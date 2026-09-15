import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { prisma } from '@/lib/db';
import { createSessionToken, verifyPassword, verifySessionToken } from '@/lib/auth';
import { isDemoMode } from '@/lib/demo-mode';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required.' },
        { status: 400 }
      );
    }

    // EXPLICIT SERVER-SIDE DEMO MODE
    if (isDemoMode()) {
      const demoEmail = (process.env.ADMIN_DEFAULT_EMAIL || 'admin@alphafitness.demo').toLowerCase().trim();
      const demoPassword = process.env.ADMIN_DEFAULT_PASSWORD || 'AdminPassword123!';

      const inputEmail = email.toLowerCase().trim();
      const isEmailValid = inputEmail === demoEmail;

      const inputHash = crypto.createHash('sha256').update(password).digest();
      const demoHash = crypto.createHash('sha256').update(demoPassword).digest();
      const isPasswordValid = crypto.timingSafeEqual(inputHash, demoHash);

      if (!isEmailValid || !isPasswordValid) {
        return NextResponse.json(
          { error: 'Invalid admin credentials.' },
          { status: 401 }
        );
      }

      const token = createSessionToken({
        adminId: 'demo-admin-id-2026',
        email: demoEmail,
        name: 'Alpha Fitness Manager [DEMO]',
        role: 'SUPERADMIN',
      });

      const response = NextResponse.json({
        success: true,
        admin: {
          id: 'demo-admin-id-2026',
          name: 'Alpha Fitness Manager [DEMO]',
          email: demoEmail,
          role: 'SUPERADMIN',
        },
        demoMode: true,
      });

      response.cookies.set('admin_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 24 * 3600,
      });

      return response;
    }

    // STANDARD PRODUCTION DATABASE PATH
    const admin = await prisma.admin.findUnique({
      where: { email: email.toLowerCase().trim() },
    });

    if (!admin) {
      return NextResponse.json(
        { error: 'Invalid admin credentials.' },
        { status: 401 }
      );
    }

    const isValid = verifyPassword(password, admin.passwordHash, admin.salt);
    if (!isValid) {
      return NextResponse.json(
        { error: 'Invalid admin credentials.' },
        { status: 401 }
      );
    }

    const token = createSessionToken({
      adminId: admin.id,
      email: admin.email,
      name: admin.name,
      role: admin.role,
    });

    const response = NextResponse.json({
      success: true,
      admin: {
        id: admin.id,
        name: admin.name,
        email: admin.email,
        role: admin.role,
      },
    });

    response.cookies.set('admin_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 24 * 3600,
    });

    return response;
  } catch (error) {
    console.error('Admin login error:', error);
    return NextResponse.json(
      { error: 'Internal server error during authentication.' },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get('admin_token')?.value;
    if (!token) {
      return NextResponse.json({ authenticated: false }, { status: 401 });
    }

    const payload = verifySessionToken(token);
    if (!payload) {
      return NextResponse.json({ authenticated: false }, { status: 401 });
    }

    return NextResponse.json({
      authenticated: true,
      admin: {
        id: payload.adminId,
        email: payload.email,
        name: payload.name,
        role: payload.role,
      },
    });
  } catch {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }
}

export async function DELETE() {
  const response = NextResponse.json({ success: true, message: 'Logged out successfully.' });
  response.cookies.set('admin_token', '', {
    httpOnly: true,
    expires: new Date(0),
    path: '/',
  });
  return response;
}
