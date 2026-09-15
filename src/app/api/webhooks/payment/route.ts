import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { getPaymentGateway } from '@/lib/payment';
import { DEMO_MEMBERSHIP_PLANS } from '@/data/demo-content';

function calculateEndDate(durationEnum: string, startDate: Date): Date {
  const end = new Date(startDate);
  switch (durationEnum) {
    case 'MONTHLY':
      end.setMonth(end.getMonth() + 1);
      break;
    case 'QUARTERLY':
      end.setMonth(end.getMonth() + 3);
      break;
    case 'HALF_YEARLY':
      end.setMonth(end.getMonth() + 6);
      break;
    case 'ANNUAL':
      end.setFullYear(end.getFullYear() + 1);
      break;
    default:
      end.setMonth(end.getMonth() + 1);
  }
  return end;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { orderId, paymentId, signature, memberId, planId } = body;

    if (!orderId || !paymentId) {
      return NextResponse.json(
        { error: 'Order ID and Payment ID are required for verification.' },
        { status: 400 }
      );
    }

    // Verify payment with gateway provider
    const gateway = getPaymentGateway();
    const verification = await gateway.verifyPayment({
      orderId,
      paymentId,
      signature,
    });

    if (!verification.isValid) {
      return NextResponse.json(
        { error: verification.error || 'Payment verification failed.' },
        { status: 400 }
      );
    }

    // Find payment record
    const payment = await prisma.payment.findUnique({
      where: { orderId },
      include: { member: true },
    });

    if (!payment) {
      return NextResponse.json(
        { error: 'Payment order record not found.' },
        { status: 404 }
      );
    }

    // Find plan details
    const selectedPlan =
      DEMO_MEMBERSHIP_PLANS.find((p) => p.id === planId || p.slug === planId) ||
      DEMO_MEMBERSHIP_PLANS[0];

    const startDate = new Date();
    const endDate = calculateEndDate(selectedPlan.durationEnum, startDate);

    // Create active membership record
    const membership = await prisma.membership.create({
      data: {
        memberId: payment.memberId,
        planSlug: selectedPlan.slug,
        planName: selectedPlan.name,
        duration: selectedPlan.durationLabel,
        amount: payment.amount,
        startDate,
        endDate,
        status: 'ACTIVE',
      },
    });

    // Update payment record to SUCCESS
    await prisma.payment.update({
      where: { orderId },
      data: {
        paymentId,
        status: 'SUCCESS',
        membershipId: membership.id,
        rawPayload: JSON.stringify(body),
      },
    });

    return NextResponse.json({
      success: true,
      message: 'Payment verified and membership activated.',
      memberCode: payment.member.memberCode,
      memberName: payment.member.fullName,
      planName: selectedPlan.name,
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString(),
      paymentId,
    });
  } catch (error: unknown) {
    console.error('Payment webhook error:', error);
    return NextResponse.json(
      { error: 'Internal server error processing payment verification.' },
      { status: 500 }
    );
  }
}
