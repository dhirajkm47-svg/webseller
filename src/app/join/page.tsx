"use client";

import React, { useState, Suspense } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MembershipPlans from '@/components/sections/MembershipPlans';
import CheckoutModal from '@/components/checkout/CheckoutModal';
import PaymentSuccessModal from '@/components/checkout/PaymentSuccessModal';
import { PlanDemo, DEMO_MEMBERSHIP_PLANS } from '@/data/demo-content';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

function JoinContent() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<PlanDemo | undefined>(DEMO_MEMBERSHIP_PLANS[1]);
  const [receiptData, setReceiptData] = useState<{
    memberCode: string;
    fullName: string;
    email: string;
    planName: string;
    startDate: string;
    endDate: string;
    transactionRef: string;
    amountInINR: number;
  } | null>(null);

  const handleSelectPlan = (plan: PlanDemo) => {
    setSelectedPlan(plan);
    setIsCheckoutOpen(true);
  };

  return (
    <main className="min-h-screen bg-dark-bg text-zinc-100 selection:bg-brand-600 selection:text-white">
      <Header onOpenCheckout={() => setIsCheckoutOpen(true)} />

      <div className="pt-28 pb-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>

      <MembershipPlans onSelectPlan={handleSelectPlan} />

      <Footer />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        selectedPlan={selectedPlan}
        onSuccess={(receipt) => setReceiptData(receipt)}
      />

      <PaymentSuccessModal
        receipt={receiptData}
        onClose={() => setReceiptData(null)}
      />
    </main>
  );
}

export default function JoinPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-dark-bg text-white p-12">Loading membership registration...</div>}>
      <JoinContent />
    </Suspense>
  );
}
