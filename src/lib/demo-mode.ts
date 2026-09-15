import { DEMO_MEMBERSHIP_PLANS } from '@/data/demo-content';

export function isDemoMode(): boolean {
  return process.env.DEMO_MODE === 'true';
}

export interface DemoMemberRecord {
  id: string;
  memberCode: string;
  fullName: string;
  email: string;
  phone: string;
  emergencyContact?: string | null;
  createdAt: string;
  memberships: Array<{
    id: string;
    planName: string;
    planSlug: string;
    duration: string;
    amount: number;
    startDate: string;
    endDate: string;
    status: string;
  }>;
  payments: Array<{
    id: string;
    orderId: string;
    paymentId?: string | null;
    amount: number;
    status: string;
    provider: string;
    createdAt: string;
  }>;
}

let demoMembersState: DemoMemberRecord[] = [
  {
    id: 'demo-member-1001',
    memberCode: 'AF-2026-1001',
    fullName: 'Rohan Deshmukh [DEMO]',
    email: 'rohan.deshmukh@demo.in',
    phone: '+91 98230 11223',
    emergencyContact: '+91 98230 99887',
    createdAt: new Date(Date.now() - 30 * 24 * 3600 * 1000).toISOString(),
    memberships: [
      {
        id: 'demo-ms-1',
        planName: 'Annual Elite [DEMO]',
        planSlug: 'annual-elite',
        duration: '12 Months',
        amount: 28000,
        startDate: new Date(Date.now() - 30 * 24 * 3600 * 1000).toISOString(),
        endDate: new Date(Date.now() + 335 * 24 * 3600 * 1000).toISOString(),
        status: 'ACTIVE',
      },
    ],
    payments: [
      {
        id: 'demo-pay-1',
        orderId: 'order_demo_1001',
        paymentId: 'pay_demo_1001_success',
        amount: 28000,
        status: 'SUCCESS',
        provider: 'MOCK',
        createdAt: new Date(Date.now() - 30 * 24 * 3600 * 1000).toISOString(),
      },
    ],
  },
  {
    id: 'demo-member-1002',
    memberCode: 'AF-2026-1002',
    fullName: 'Pooja Kulkarni [DEMO]',
    email: 'pooja.kulkarni@demo.in',
    phone: '+91 97654 22334',
    emergencyContact: '+91 97654 88776',
    createdAt: new Date(Date.now() - 15 * 24 * 3600 * 1000).toISOString(),
    memberships: [
      {
        id: 'demo-ms-2',
        planName: 'Quarterly Pro [DEMO]',
        planSlug: 'quarterly-pro',
        duration: '3 Months',
        amount: 9500,
        startDate: new Date(Date.now() - 15 * 24 * 3600 * 1000).toISOString(),
        endDate: new Date(Date.now() + 75 * 24 * 3600 * 1000).toISOString(),
        status: 'ACTIVE',
      },
    ],
    payments: [
      {
        id: 'demo-pay-2',
        orderId: 'order_demo_1002',
        paymentId: 'pay_demo_1002_success',
        amount: 9500,
        status: 'SUCCESS',
        provider: 'MOCK',
        createdAt: new Date(Date.now() - 15 * 24 * 3600 * 1000).toISOString(),
      },
    ],
  },
  {
    id: 'demo-member-1003',
    memberCode: 'AF-2026-1003',
    fullName: 'Aarav Sharma [DEMO]',
    email: 'aarav.sharma@demo.in',
    phone: '+91 91234 56789',
    emergencyContact: '+91 91234 00000',
    createdAt: new Date(Date.now() - 5 * 24 * 3600 * 1000).toISOString(),
    memberships: [
      {
        id: 'demo-ms-3',
        planName: 'Flex Monthly [DEMO]',
        planSlug: 'monthly-pass',
        duration: '1 Month',
        amount: 3500,
        startDate: new Date(Date.now() - 5 * 24 * 3600 * 1000).toISOString(),
        endDate: new Date(Date.now() + 25 * 24 * 3600 * 1000).toISOString(),
        status: 'ACTIVE',
      },
    ],
    payments: [
      {
        id: 'demo-pay-3',
        orderId: 'order_demo_1003',
        paymentId: 'pay_demo_1003_success',
        amount: 3500,
        status: 'SUCCESS',
        provider: 'MOCK',
        createdAt: new Date(Date.now() - 5 * 24 * 3600 * 1000).toISOString(),
      },
    ],
  },
];

export function getDemoMembers(): DemoMemberRecord[] {
  return demoMembersState;
}

export function addDemoMember(member: {
  fullName: string;
  email: string;
  phone: string;
  emergencyContact?: string | null;
  planId: string;
  orderId: string;
  paymentId: string;
  amount: number;
}): DemoMemberRecord {
  const plan = DEMO_MEMBERSHIP_PLANS.find(p => p.id === member.planId || p.slug === member.planId) || DEMO_MEMBERSHIP_PLANS[0];
  const memberCode = "AF-2026-" + Math.floor(1000 + Math.random() * 9000);
  const now = new Date();
  const endDate = new Date(now);
  endDate.setMonth(endDate.getMonth() + (plan.durationEnum === 'ANNUAL' ? 12 : plan.durationEnum === 'QUARTERLY' ? 3 : 1));

  const newRecord: DemoMemberRecord = {
    id: "demo-member-" + Date.now(),
    memberCode,
    fullName: member.fullName.replace(/\s*\[DEMO\]/i, '') + " [DEMO]",
    email: member.email.toLowerCase().trim(),
    phone: member.phone.trim(),
    emergencyContact: member.emergencyContact,
    createdAt: now.toISOString(),
    memberships: [
      {
        id: "demo-ms-" + Date.now(),
        planName: plan.name,
        planSlug: plan.slug,
        duration: plan.durationLabel,
        amount: plan.priceInINR,
        startDate: now.toISOString(),
        endDate: endDate.toISOString(),
        status: 'ACTIVE',
      },
    ],
    payments: [
      {
        id: "demo-pay-" + Date.now(),
        orderId: member.orderId,
        paymentId: member.paymentId,
        amount: member.amount,
        status: 'SUCCESS',
        provider: 'MOCK',
        createdAt: now.toISOString(),
      },
    ],
  };

  demoMembersState = [newRecord, ...demoMembersState];
  return newRecord;
}

export function deleteDemoMember(id: string): boolean {
  const initialLength = demoMembersState.length;
  demoMembersState = demoMembersState.filter(m => m.id !== id);
  return demoMembersState.length < initialLength;
}

export function getDemoMetrics() {
  const totalMembers = demoMembersState.length;
  const activeMemberships = demoMembersState.reduce(
    (acc, m) => acc + m.memberships.filter(ms => ms.status === 'ACTIVE').length,
    0
  );
  const totalRevenueINR = demoMembersState.reduce(
    (acc, m) => acc + m.payments.filter(p => p.status === 'SUCCESS').reduce((pAcc, p) => pAcc + p.amount, 0),
    0
  );
  return {
    totalMembers,
    activeMemberships,
    totalRevenueINR,
  };
}
