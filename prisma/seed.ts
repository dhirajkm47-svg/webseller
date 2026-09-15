import { PrismaClient } from '@prisma/client';
import crypto from 'crypto';

const prisma = new PrismaClient();

function hashPassword(password: string): { hash: string; salt: string } {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
  return { hash, salt };
}

async function main() {
  console.log('Seeding Alpha Fitness database...');

  // 1. Seed Admin
  const adminEmail = process.env.ADMIN_DEFAULT_EMAIL || 'admin@alphafitness.demo';
  const adminPassword = process.env.ADMIN_DEFAULT_PASSWORD || 'AdminPassword123!';
  const { hash, salt } = hashPassword(adminPassword);

  const existingAdmin = await prisma.admin.findUnique({
    where: { email: adminEmail },
  });

  if (!existingAdmin) {
    await prisma.admin.create({
      data: {
        email: adminEmail,
        passwordHash: hash,
        salt: salt,
        name: 'Alpha Fitness Manager',
        role: 'SUPERADMIN',
      },
    });
    console.log(`Created admin user: ${adminEmail}`);
  } else {
    await prisma.admin.update({
      where: { email: adminEmail },
      data: {
        passwordHash: hash,
        salt: salt,
      },
    });
    console.log(`Updated admin credentials for: ${adminEmail}`);
  }

  // 2. Seed Sample Members for Demonstration
  const sampleMembers = [
    {
      memberCode: 'AF-2026-1001',
      fullName: 'Rohan Deshmukh [DEMO]',
      email: 'rohan.deshmukh@demo.in',
      phone: '+91 98230 11223',
      emergencyContact: '+91 98230 99887',
      planSlug: 'annual-elite',
      planName: 'Annual Elite [DEMO]',
      duration: '12 Months',
      amount: 28000,
    },
    {
      memberCode: 'AF-2026-1002',
      fullName: 'Pooja Kulkarni [DEMO]',
      email: 'pooja.kulkarni@demo.in',
      phone: '+91 97654 22334',
      emergencyContact: '+91 97654 88776',
      planSlug: 'quarterly-pro',
      planName: 'Quarterly Pro [DEMO]',
      duration: '3 Months',
      amount: 9500,
    },
  ];

  for (const m of sampleMembers) {
    const existing = await prisma.member.findUnique({
      where: { email: m.email },
    });

    if (!existing) {
      const createdMember = await prisma.member.create({
        data: {
          memberCode: m.memberCode,
          fullName: m.fullName,
          email: m.email,
          phone: m.phone,
          emergencyContact: m.emergencyContact,
        },
      });

      const startDate = new Date();
      const endDate = new Date();
      endDate.setMonth(endDate.getMonth() + (m.duration.includes('12') ? 12 : 3));

      const membership = await prisma.membership.create({
        data: {
          memberId: createdMember.id,
          planSlug: m.planSlug,
          planName: m.planName,
          duration: m.duration,
          amount: m.amount,
          startDate,
          endDate,
          status: 'ACTIVE',
        },
      });

      await prisma.payment.create({
        data: {
          orderId: `order_seed_${createdMember.id.substring(0, 8)}`,
          paymentId: `pay_seed_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
          memberId: createdMember.id,
          membershipId: membership.id,
          amount: m.amount,
          currency: 'INR',
          status: 'SUCCESS',
          provider: 'MOCK',
        },
      });

      console.log(`Seeded demo member: ${m.fullName} (${m.memberCode})`);
    }
  }

  console.log('Seeding completed successfully.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
