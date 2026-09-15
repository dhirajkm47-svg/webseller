import crypto from 'crypto';
import { CreateOrderParams, PaymentGatewayProvider, PaymentOrder, VerificationResult, VerifyPaymentParams } from './types';

export class RazorpayProvider implements PaymentGatewayProvider {
  private keyId: string;
  private keySecret: string;

  constructor() {
    this.keyId = process.env.RAZORPAY_KEY_ID || '';
    this.keySecret = process.env.RAZORPAY_KEY_SECRET || '';
  }

  async createOrder(params: CreateOrderParams): Promise<PaymentOrder> {
    if (!this.keyId || !this.keySecret) {
      throw new Error('Razorpay credentials not configured');
    }

    const auth = Buffer.from(`${this.keyId}:${this.keySecret}`).toString('base64');
    const response = await fetch('https://api.razorpay.com/v1/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${auth}`,
      },
      body: JSON.stringify({
        amount: Math.round(params.amount * 100), // convert to paise
        currency: params.currency || 'INR',
        receipt: params.receipt,
        notes: params.notes,
      }),
    });

    if (!response.ok) {
      const err = await response.json();
      throw new Error(`Razorpay order creation failed: ${JSON.stringify(err)}`);
    }

    const data = await response.json();
    return {
      id: data.id,
      amount: data.amount / 100,
      currency: data.currency,
      receipt: data.receipt,
      status: data.status,
      provider: 'RAZORPAY',
    };
  }

  async verifyPayment(params: VerifyPaymentParams): Promise<VerificationResult> {
    const { orderId, paymentId, signature } = params;

    if (!signature) {
      return {
        isValid: false,
        orderId,
        paymentId,
        error: 'Signature missing for Razorpay verification',
      };
    }

    const generatedSignature = crypto
      .createHmac('sha256', this.keySecret)
      .update(`${orderId}|${paymentId}`)
      .digest('hex');

    const sigBuf = Buffer.from(signature);
    const expBuf = Buffer.from(generatedSignature);
    const isValid = sigBuf.length === expBuf.length && crypto.timingSafeEqual(sigBuf, expBuf);

    return {
      isValid,
      orderId,
      paymentId,
      error: isValid ? undefined : 'Invalid signature verification',
    };
  }
}
