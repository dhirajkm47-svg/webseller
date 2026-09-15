import crypto from 'crypto';
import { CreateOrderParams, PaymentGatewayProvider, PaymentOrder, VerificationResult, VerifyPaymentParams } from './types';

export class MockPaymentProvider implements PaymentGatewayProvider {
  private secret: string;

  constructor() {
    this.secret = process.env.MOCK_PAYMENT_SECRET || 'alpha-fitness-mock-secret';
  }

  async createOrder(params: CreateOrderParams): Promise<PaymentOrder> {
    const orderId = `order_mock_${Date.now()}_${crypto.randomBytes(4).toString('hex')}`;
    return {
      id: orderId,
      amount: params.amount,
      currency: params.currency || 'INR',
      receipt: params.receipt,
      status: 'created',
      provider: 'MOCK',
    };
  }

  generateMockSignature(orderId: string, paymentId: string): string {
    return crypto
      .createHmac('sha256', this.secret)
      .update(`${orderId}|${paymentId}`)
      .digest('hex');
  }

  async verifyPayment(params: VerifyPaymentParams): Promise<VerificationResult> {
    const { orderId, paymentId, signature } = params;

    if (!orderId || !paymentId) {
      return {
        isValid: false,
        orderId,
        paymentId,
        error: 'Missing orderId or paymentId',
      };
    }

    // If signature provided, verify HMAC timing-safely
    if (signature) {
      const expectedSignature = this.generateMockSignature(orderId, paymentId);
      const sigBuf = Buffer.from(signature);
      const expBuf = Buffer.from(expectedSignature);
      const isValid = sigBuf.length === expBuf.length && crypto.timingSafeEqual(sigBuf, expBuf);
      
      return {
        isValid,
        orderId,
        paymentId,
        error: isValid ? undefined : 'Invalid signature for mock transaction',
      };
    }

    // Default demo simulation valid check if standard format
    return {
      isValid: true,
      orderId,
      paymentId,
    };
  }
}
