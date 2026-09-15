import { POST as authPost } from '../src/app/api/admin/auth/route';
import { GET as membersGet } from '../src/app/api/admin/members/route';
import { POST as checkoutPost } from '../src/app/api/checkout/initiate/route';
import { POST as webhookPost } from '../src/app/api/webhooks/payment/route';
import { NextRequest } from 'next/server';

async function testDemoApiRoutes() {
  process.env.DEMO_MODE = 'true';
  process.env.ADMIN_DEFAULT_EMAIL = 'admin@alphafitness.demo';
  process.env.ADMIN_DEFAULT_PASSWORD = 'AdminPassword123!';
  process.env.ADMIN_SESSION_SECRET = 'super_secure_demo_secret_key_2026';

  console.log('Testing Demo Mode Route Handlers...');

  // 1. Auth failure test
  const wrongReq = new NextRequest('http://localhost:3000/api/admin/auth', {
    method: 'POST',
    body: JSON.stringify({ email: 'admin@alphafitness.demo', password: 'WrongPassword' }),
  });
  const wrongRes = await authPost(wrongReq);
  if (wrongRes.status !== 401) {
    throw new Error(`Expected 401 for wrong credentials, got ${wrongRes.status}`);
  }
  console.log('✓ Invalid credentials return 401 Unauthorized in DEMO_MODE');

  // 2. Auth success test
  const validReq = new NextRequest('http://localhost:3000/api/admin/auth', {
    method: 'POST',
    body: JSON.stringify({ email: 'admin@alphafitness.demo', password: 'AdminPassword123!' }),
  });
  const validRes = await authPost(validReq);
  if (validRes.status !== 200) {
    throw new Error(`Expected 200 for valid credentials, got ${validRes.status}`);
  }
  const authData = await validRes.json();
  const setCookie = validRes.headers.get('set-cookie');
  if (!authData.demoMode || !setCookie) {
    throw new Error('Auth response missing demoMode flag or set-cookie header');
  }
  console.log('✓ Valid demo login succeeds (200 OK), returns demoMode: true, and sets HTTP-only session cookie');

  // Extract token from cookie
  const tokenMatch = setCookie.match(/admin_token=([^;]+)/);
  const token = tokenMatch ? tokenMatch[1] : '';

  // 3. Unauthenticated Members GET
  const unauthReq = new NextRequest('http://localhost:3000/api/admin/members');
  const unauthRes = await membersGet(unauthReq);
  if (unauthRes.status !== 401) {
    throw new Error(`Expected 401 for unauthenticated members GET, got ${unauthRes.status}`);
  }
  console.log('✓ Unauthenticated admin members request returns 401');

  // 4. Authenticated Members GET
  const authMembersReq = new NextRequest('http://localhost:3000/api/admin/members', {
    headers: {
      cookie: `admin_token=${token}`,
    },
  });
  const authMembersRes = await membersGet(authMembersReq);
  if (authMembersRes.status !== 200) {
    throw new Error(`Expected 200 for authenticated members GET, got ${authMembersRes.status}`);
  }
  const membersData = await authMembersRes.json();
  if (!membersData.demoMode || !Array.isArray(membersData.members) || membersData.members.length === 0) {
    throw new Error('Members data missing or invalid in demo mode');
  }
  console.log(`✓ Authenticated admin members GET returns ${membersData.members.length} demo members and metrics (Revenue: Rs.${membersData.metrics.totalRevenueINR})`);

  // 5. Checkout initiate in DEMO_MODE
  const checkoutReq = new NextRequest('http://localhost:3000/api/checkout/initiate', {
    method: 'POST',
    body: JSON.stringify({
      planId: 'annual-elite',
      fullName: 'Client Demo User',
      email: 'client@demo.com',
      phone: '+91 98888 77777',
      emergencyContact: '+91 98888 66666',
    }),
  });
  const checkoutRes = await checkoutPost(checkoutReq);
  if (checkoutRes.status !== 200) {
    throw new Error(`Expected 200 for checkout initiate, got ${checkoutRes.status}`);
  }
  const checkoutData = await checkoutRes.json();
  if (!checkoutData.demoMode || !checkoutData.orderId || !checkoutData.signature) {
    throw new Error('Checkout response missing demo order or signature');
  }
  console.log(`✓ Checkout initiate generated demo order: ${checkoutData.orderId}`);

  // 6. Payment Webhook in DEMO_MODE
  const webhookReq = new NextRequest('http://localhost:3000/api/webhooks/payment', {
    method: 'POST',
    body: JSON.stringify({
      orderId: checkoutData.orderId,
      paymentId: checkoutData.paymentId,
      signature: checkoutData.signature,
      planId: 'annual-elite',
      fullName: 'Client Demo User',
      email: 'client@demo.com',
      phone: '+91 98888 77777',
    }),
  });
  const webhookRes = await webhookPost(webhookReq);
  if (webhookRes.status !== 200) {
    throw new Error(`Expected 200 for webhook, got ${webhookRes.status}`);
  }
  const webhookData = await webhookRes.json();
  if (!webhookData.demoMode || !webhookData.memberCode) {
    throw new Error('Payment webhook missing demo memberCode');
  }
  console.log(`✓ Payment webhook activated demo membership for pass: ${webhookData.memberCode}`);

  console.log('\n======================================================');
  console.log('ALL DEMO MODE ROUTE HANDLER TESTS PASSED WITH 100% SUCCESS!');
  console.log('======================================================');
}

testDemoApiRoutes().catch((err) => {
  console.error('Demo API Test Failed:', err);
  process.exit(1);
});
