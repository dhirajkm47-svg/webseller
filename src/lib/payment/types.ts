export interface CreateOrderParams {
  amount: number;
  currency?: string;
  receipt: string;
  notes?: Record<string, string>;
}

export interface PaymentOrder {
  id: string;
  amount: number;
  currency: string;
  receipt: string;
  status: 'created' | 'attempted' | 'paid';
  provider: 'MOCK' | 'RAZORPAY';
}

export interface VerifyPaymentParams {
  orderId: string;
  paymentId: string;
  signature?: string;
}

export interface VerificationResult {
  isValid: boolean;
  orderId: string;
  paymentId: string;
  error?: string;
}

export interface PaymentGatewayProvider {
  createOrder(params: CreateOrderParams): Promise<PaymentOrder>;
  verifyPayment(params: VerifyPaymentParams): Promise<VerificationResult>;
}
