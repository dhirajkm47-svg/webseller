"use client";

import React, { useState, Suspense } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MembershipPlans from '@/components/sections/MembershipPlans';
import CheckoutModal from '@/components/checkout/CheckoutModal';
import PaymentSuccessModal from '@/components/checkout/PaymentSuccessModal';
import { PlanDemo, DEMO_MEMBERSHIP_PLANS } from '@/data/demo-content';
import { ShieldCheck, ArrowLeft, CheckCircle2 } from 'lucide-react';
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

      <div className="pt-32 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>

        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            Instant Membership Enrollment
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl font-black uppercase tracking-tight text-white">
            START YOUR <span className="text-brand-500">MEMBERSHIP</span>
          </h1>
          <p className="mt-4 text-zinc-400 text-base">
            Select your preferred membership pass for Alpha Fitness at Amanora Club, Hadapsar, Pune. Complete fast digital enrollment and receive your immediate gate pass.
          </p>
        </div>

        <MembershipPlans onSelectPlan={handleSelectPlan} />
      </div>

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
