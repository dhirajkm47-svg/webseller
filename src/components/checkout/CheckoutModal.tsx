"use client";

import React, { useState } from 'react';
import { X, ShieldCheck, CreditCard, Sparkles, AlertCircle, Loader2 } from 'lucide-react';
import { PlanDemo } from '@/data/demo-content';

interface ReceiptData {
  memberCode: string;
  fullName: string;
  email: string;
  planName: string;
  startDate: string;
  endDate: string;
  transactionRef: string;
  amountInINR: number;
}

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan?: PlanDemo;
  onSuccess: (receipt: ReceiptData) => void;
}

export default function CheckoutModal({
  isOpen,
  onClose,
  selectedPlan,
  onSuccess,
}: CheckoutModalProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [emergencyContact, setEmergencyContact] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen || !selectedPlan) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!fullName.trim() || !email.trim() || !phone.trim()) {
      setErrorMessage('Please provide your name, email, and phone number.');
      return;
    }

    setIsLoading(true);

    try {
      // Step 1: Initiate Order on Backend
      const initRes = await fetch('/api/checkout/initiate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          planId: selectedPlan.id,
          fullName: fullName.trim(),
          email: email.trim(),
          phone: phone.trim(),
          emergencyContact: emergencyContact.trim() || undefined,
        }),
      });

      if (!initRes.ok) {
        const errData = await initRes.json();
        throw new Error(errData.error || 'Failed to initiate checkout.');
      }

      const initData = await initRes.json();

      // Step 2: Simulate Payment & Server-Side Verification
      const paymentId = initData.paymentId || `pay_mock_${Date.now()}`;
      const verifyRes = await fetch('/api/webhooks/payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          orderId: initData.orderId,
          paymentId: paymentId,
          signature: initData.signature,
          memberId: initData.memberId,
          planId: selectedPlan.id,
        }),
      });

      if (!verifyRes.ok) {
        const errData = await verifyRes.json();
        throw new Error(errData.error || 'Payment verification failed.');
      }

      const verifyData = await verifyRes.json();

      // Step 3: Emit success receipt
      onSuccess({
        memberCode: verifyData.memberCode,
        fullName: fullName.trim(),
        email: email.trim(),
        planName: selectedPlan.name,
        startDate: verifyData.startDate || new Date().toISOString(),
        endDate: verifyData.endDate || new Date(Date.now() + 30 * 86400000).toISOString(),
        transactionRef: verifyData.paymentId || `TXN_${Date.now()}`,
        amountInINR: selectedPlan.priceInINR,
      });

      onClose();
    } catch (err: unknown) {
      setErrorMessage(err instanceof Error ? err.message : 'An error occurred during checkout.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#141419] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden">
        {/* Subtle Ambient Glow */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#7A5CFF]/15 rounded-full blur-3xl pointer-events-none" />

        {/* Modal Header */}
        <div className="flex items-center justify-between pb-5 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#7A5CFF]">
              <Sparkles className="w-3.5 h-3.5" />
              Secure Checkout
            </div>
            <h3 className="font-heading font-black text-xl sm:text-2xl text-white mt-1">
              JOIN ALPHA FITNESS
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Plan Summary Banner */}
        <div className="mt-5 p-4 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-between">
          <div>
            <span className="text-xs text-zinc-400 block font-medium">Selected Tier</span>
            <h4 className="text-white font-heading font-bold text-base">{selectedPlan.name}</h4>
            <span className="text-xs text-[#7A5CFF] font-semibold">{selectedPlan.durationLabel} Access</span>
          </div>
          <div className="text-right">
            <span className="text-xs text-zinc-400 block font-medium">Total Amount</span>
            <span className="text-xl font-heading font-black text-white">₹{selectedPlan.priceInINR.toLocaleString('en-IN')}</span>
          </div>
        </div>

        {/* Semantic Error Alert (Kept Red) */}
        {errorMessage && (
          <div className="mt-4 p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 flex items-start gap-3 text-red-300 text-xs sm:text-sm">
            <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block text-xs font-medium text-zinc-300 uppercase tracking-wider mb-1.5">
              Full Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Arjun Sharma"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[#0B0B0F] border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#7A5CFF] focus:ring-1 focus:ring-[#7A5CFF] transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-zinc-300 uppercase tracking-wider mb-1.5">
                Email Address *
              </label>
              <input
                type="email"
                required
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#0B0B0F] border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#7A5CFF] focus:ring-1 focus:ring-[#7A5CFF] transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-zinc-300 uppercase tracking-wider mb-1.5">
                Phone Number *
              </label>
              <input
                type="tel"
                required
                placeholder="+91 98765 43210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#0B0B0F] border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#7A5CFF] focus:ring-1 focus:ring-[#7A5CFF] transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-zinc-300 uppercase tracking-wider mb-1.5">
              Emergency Contact (Optional)
            </label>
            <input
              type="text"
              placeholder="Name & Contact number"
              value={emergencyContact}
              onChange={(e) => setEmergencyContact(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[#0B0B0F] border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#7A5CFF] focus:ring-1 focus:ring-[#7A5CFF] transition-colors"
            />
          </div>

          {/* Demo Sandbox Note */}
          <div className="p-3 rounded-xl bg-[#7A5CFF]/10 border border-[#7A5CFF]/20 text-zinc-300 text-[11px] leading-relaxed flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 shrink-0 text-[#7A5CFF] mt-0.5" />
            <span>
              <strong className="text-[#7A5CFF]">Demo Gateway Active:</strong> Instant simulated server authorization for client presentation. No actual card charge occurs.
            </span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full mt-2 py-4 rounded-full bg-gradient-to-r from-[#7A5CFF] to-[#3B82F6] hover:brightness-110 text-white font-heading font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#7A5CFF]/30 hover:shadow-[#7A5CFF]/50 transition-all transform hover:-translate-y-0.5 active:scale-[0.98] disabled:opacity-50 cursor-pointer"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Processing Order...</span>
              </>
            ) : (
              <>
                <CreditCard className="w-4 h-4" />
                <span>Complete Enrollment — ₹{selectedPlan.priceInINR.toLocaleString('en-IN')}</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
