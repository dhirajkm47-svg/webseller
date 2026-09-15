import { MockPaymentProvider } from './mock-provider';
import { RazorpayProvider } from './razorpay-provider';
import { PaymentGatewayProvider } from './types';

let paymentGatewayInstance: PaymentGatewayProvider | null = null;

export function getPaymentGateway(): PaymentGatewayProvider {
  if (paymentGatewayInstance) return paymentGatewayInstance;

  const providerType = process.env.PAYMENT_PROVIDER || 'MOCK';

  if (providerType === 'RAZORPAY' && process.env.RAZORPAY_KEY_ID) {
    paymentGatewayInstance = new RazorpayProvider();
  } else {
    paymentGatewayInstance = new MockPaymentProvider();
  }

  return paymentGatewayInstance;
}

export * from './types';
export * from './mock-provider';
export * from './razorpay-provider';
