import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { verifySessionToken } from '@/lib/auth';

function checkAuth(req: NextRequest) {
  const token = req.cookies.get('admin_token')?.value;
  if (!token) return null;
  return verifySessionToken(token);
}

export async function GET(req: NextRequest) {
  try {
    const auth = checkAuth(req);
    if (!auth) {
      return NextResponse.json({ error: 'Unauthorized admin access.' }, { status: 401 });
    }

    const members = await prisma.member.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        memberships: {
          orderBy: { createdAt: 'desc' },
        },
        payments: {
          orderBy: { createdAt: 'desc' },
        },
      },
    });

    const totalRevenue = await prisma.payment.aggregate({
      where: { status: 'SUCCESS' },
      _sum: { amount: true },
    });

    const activeMembershipsCount = await prisma.membership.count({
      where: { status: 'ACTIVE' },
    });

    return NextResponse.json({
      members,
      metrics: {
        totalMembers: members.length,
        activeMemberships: activeMembershipsCount,
        totalRevenueINR: totalRevenue._sum.amount || 0,
      },
    });
  } catch (error) {
    console.error('Admin members fetch error:', error);
    return NextResponse.json({ error: 'Failed to fetch members data.' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const auth = checkAuth(req);
    if (!auth) {
      return NextResponse.json({ error: 'Unauthorized admin access.' }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const memberId = searchParams.get('id');

    if (!memberId) {
      return NextResponse.json({ error: 'Member ID is required.' }, { status: 400 });
    }

    await prisma.member.delete({
      where: { id: memberId },
    });

    return NextResponse.json({ success: true, message: 'Member deleted successfully.' });
  } catch (error) {
    console.error('Admin member delete error:', error);
    return NextResponse.json({ error: 'Failed to delete member.' }, { status: 500 });
  }
}
