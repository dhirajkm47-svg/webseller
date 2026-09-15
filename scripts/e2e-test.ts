import { prisma } from '../src/lib/db';
import { hashPassword, verifyPassword, createSessionToken, verifySessionToken } from '../src/lib/auth';
import { MockPaymentProvider } from '../src/lib/payment';
import { isDemoMode, getDemoMembers, addDemoMember, deleteDemoMember, getDemoMetrics } from '../src/lib/demo-mode';

async function runE2ETests() {
  console.log('--- Starting Alpha Fitness End-to-End Suite ---');

  // Test 1: Auth & Password Hashing
  console.log('\n[TEST 1] Testing PBKDF2 Password Hashing & Verification...');
  const testPassword = 'TestPassword123!';
  const { hash, salt } = hashPassword(testPassword);
  const isMatch = verifyPassword(testPassword, hash, salt);
  const isWrongMismatch = !verifyPassword('WrongPassword', hash, salt);
  if (!isMatch || !isWrongMismatch) {
    throw new Error('PBKDF2 Password hashing verification failed');
  }
  console.log('✓ Password hashing and timing-safe verification passed.');

  // Test 2: Session Token Signature & Expiry
  console.log('\n[TEST 2] Testing Admin HMAC-SHA256 Session Tokens...');
  const token = createSessionToken({
    adminId: 'admin-test-123',
    email: 'admin@alphafitness.demo',
    name: 'Admin Test',
    role: 'SUPERADMIN',
  });
  const decoded = verifySessionToken(token);
  if (!decoded || decoded.email !== 'admin@alphafitness.demo') {
    throw new Error('Session token verification failed');
  }
  const tamperedToken = token + 'tamper';
  if (verifySessionToken(tamperedToken) !== null) {
    throw new Error('Tampered session token was not rejected');
  }
  console.log('✓ HMAC-SHA256 session token create and verify passed.');

  // Test 3: Demo Mode Helper Tests
  console.log('\n[TEST 3] Testing Demo Mode In-Memory State & Metrics...');
  const initialMembers = getDemoMembers();
  if (initialMembers.length < 3) {
    throw new Error('Initial demo members count unexpected');
  }
  const added = addDemoMember({
    fullName: 'Test Client',
    email: 'client@test.in',
    phone: '+91 90000 11111',
    planId: 'annual-elite',
    orderId: 'order_test_999',
    paymentId: 'pay_test_999',
    amount: 28000,
  });
  if (!added.memberCode.startsWith('AF-2026-')) {
    throw new Error('Demo member code generation failed');
  }
  const metrics = getDemoMetrics();
  if (metrics.totalMembers < 4 || metrics.totalRevenueINR < 60000) {
    throw new Error('Demo metrics calculation failed');
  }
  const deleted = deleteDemoMember(added.id);
  if (!deleted) {
    throw new Error('Demo member deletion failed');
  }
  console.log('✓ Demo mode in-memory state and metrics passed.');

  // Test 4: Payment Gateway Mock Signature
  console.log('\n[TEST 4] Testing Mock Payment Signature...');
  const mockGateway = new MockPaymentProvider();
  const order = await mockGateway.createOrder({
    amount: 9500,
    currency: 'INR',
    receipt: 'rcpt_test_123',
  });
  const paymentId = 'pay_mock_' + Date.now();
  const sig = mockGateway.generateMockSignature(order.id, paymentId);
  const verification = await mockGateway.verifyPayment({
    orderId: order.id,
    paymentId,
    signature: sig,
  });
  if (!verification.isValid) {
    throw new Error('Mock payment signature verification failed');
  }
  console.log('✓ Payment gateway order creation and signature verification passed.');

  // Test 5: Database Model Check
  console.log('\n[TEST 5] Checking Database Connection & Records...');
  const adminCount = await prisma.admin.count();
  const memberCount = await prisma.member.count();
  console.log('Database reachable. Admins: ' + adminCount + ', Members: ' + memberCount);

  console.log('\n=============================================');
  console.log('ALL ALPHA FITNESS E2E INTEGRITY TESTS PASSED!');
  console.log('=============================================');
}

runE2ETests()
  .catch((err) => {
    console.error('Test Suite Failed:', err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
