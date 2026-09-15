import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { prisma } from '@/lib/db';
import { getPaymentGateway, MockPaymentProvider } from '@/lib/payment';
import { DEMO_MEMBERSHIP_PLANS } from '@/data/demo-content';
import { isDemoMode } from '@/lib/demo-mode';

export const dynamic = 'force-dynamic';

function generateMemberCode(): string {
  const randomNum = Math.floor(1000 + Math.random() * 9000);
  return `AF-2026-${randomNum}`;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { planId, fullName, email, phone, emergencyContact } = body;

    if (!fullName || !email || !phone || !planId) {
      return NextResponse.json(
        { error: 'Name, email, phone, and plan are required.' },
        { status: 400 }
      );
    }

    const plan = DEMO_MEMBERSHIP_PLANS.find(
      (p) => p.id === planId || p.slug === planId
    );

    if (!plan) {
      return NextResponse.json(
        { error: 'Invalid membership plan selected.' },
        { status: 400 }
      );
    }

    // EXPLICIT DEMO MODE
    if (isDemoMode()) {
      const orderId = `order_demo_${Date.now()}`;
      const mockPaymentId = `pay_mock_${Date.now()}`;
      const memberCode = generateMemberCode();
      const memberId = `demo_mbr_${Date.now()}`;
      const mockGateway = new MockPaymentProvider();
      const signature = mockGateway.generateMockSignature(orderId, mockPaymentId);

      return NextResponse.json({
        orderId,
        paymentId: mockPaymentId,
        memberId,
        memberCode,
        amount: plan.priceInINR,
        currency: 'INR',
        provider: 'MOCK',
        signature,
        demoMode: true,
      });
    }

    // STANDARD PRODUCTION DATABASE PATH
    let member = await prisma.member.findUnique({
      where: { email: email.toLowerCase().trim() },
    });

    if (!member) {
      member = await prisma.member.create({
        data: {
          memberCode: generateMemberCode(),
          fullName: fullName.trim(),
          email: email.toLowerCase().trim(),
          phone: phone.trim(),
          emergencyContact: emergencyContact ? emergencyContact.trim() : null,
        },
      });
    }

    // Create Payment Order via Gateway Abstraction
    const gateway = getPaymentGateway();
    const order = await gateway.createOrder({
      amount: plan.priceInINR,
      currency: 'INR',
      receipt: `rcpt_${member.id.substring(0, 8)}_${Date.now()}`,
      notes: {
        memberId: member.id,
        planSlug: plan.slug,
      },
    });

    // Save pending payment record in DB
    await prisma.payment.create({
      data: {
        orderId: order.id,
        memberId: member.id,
        amount: plan.priceInINR,
        currency: 'INR',
        status: 'INITIATED',
        provider: order.provider,
      },
    });

    // Generate mock signature & mock paymentId for demo instant verification if in mock mode
    let signature = '';
    let mockPaymentId = `pay_mock_${Date.now()}`;
    if (gateway instanceof MockPaymentProvider) {
      signature = gateway.generateMockSignature(order.id, mockPaymentId);
    }

    return NextResponse.json({
      orderId: order.id,
      paymentId: mockPaymentId,
      memberId: member.id,
      memberCode: member.memberCode,
      amount: plan.priceInINR,
      currency: 'INR',
      provider: order.provider,
      signature,
    });
  } catch (error: unknown) {
    console.error('Checkout initiate error:', error);
    return NextResponse.json(
      { error: 'Failed to initiate checkout order.' },
      { status: 500 }
    );
  }
}
