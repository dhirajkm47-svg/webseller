"use client";

import React from 'react';
import { X, CheckCircle2, QrCode, Calendar, MapPin, Award, Printer, ArrowRight } from 'lucide-react';
import Link from 'next/link';

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

interface PaymentSuccessModalProps {
  receipt: ReceiptData | null;
  onClose: () => void;
}

export default function PaymentSuccessModal({ receipt, onClose }: PaymentSuccessModalProps) {
  if (!receipt) return null;

  const formatDate = (isoString: string) => {
    try {
      const d = new Date(isoString);
      return d.toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      });
    } catch {
      return isoString;
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-dark-card border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden">
        {/* Subtle Brand Red Glow */}
        <div className="absolute top-0 right-1/2 translate-x-1/2 w-64 h-32 bg-brand-600/25 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-white/10 relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-400">
                Payment Confirmed
              </span>
              <h3 className="font-heading font-black text-xl text-white">
                WELCOME TO ALPHA FITNESS
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Digital Membership Pass Card */}
        <div className="mt-6 rounded-2xl bg-gradient-to-br from-zinc-900 via-dark-card to-zinc-950 border border-white/15 p-6 shadow-xl relative overflow-hidden">
          {/* Watermark Logo */}
          <div className="absolute -right-6 -bottom-6 opacity-5 pointer-events-none">
            <Award className="w-44 h-44 text-white" />
          </div>

          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-brand-600 flex items-center justify-center text-white font-black text-xs">
                A
              </div>
              <span className="font-heading font-black tracking-widest text-sm text-white uppercase">
                Alpha Fitness Pass
              </span>
            </div>
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold uppercase tracking-wider">
              Active Member
            </span>
          </div>

          {/* Member ID and Name */}
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div>
              <span className="text-[11px] text-zinc-400 block uppercase tracking-wider font-mono">
                Member ID
              </span>
              <span className="text-base sm:text-lg font-heading font-black text-brand-400 tracking-wider font-mono">
                {receipt.memberCode}
              </span>
            </div>
            <div>
              <span className="text-[11px] text-zinc-400 block uppercase tracking-wider font-mono">
                Plan Enrolled
              </span>
              <span className="text-sm font-bold text-white">
                {receipt.planName}
              </span>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-white/10">
            <span className="text-[11px] text-zinc-400 block uppercase tracking-wider font-mono">
              Member Name
            </span>
            <span className="text-base font-bold text-white">
              {receipt.fullName}
            </span>
          </div>

          {/* Validity & Club Location */}
          <div className="mt-4 grid grid-cols-2 gap-4 pt-4 border-t border-white/10 text-xs">
            <div className="flex items-start gap-2 text-zinc-300">
              <Calendar className="w-3.5 h-3.5 text-brand-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] text-zinc-500 block uppercase">Valid Period</span>
                <span>{formatDate(receipt.startDate)} – {formatDate(receipt.endDate)}</span>
              </div>
            </div>

            <div className="flex items-start gap-2 text-zinc-300">
              <MapPin className="w-3.5 h-3.5 text-brand-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] text-zinc-500 block uppercase">Home Club</span>
                <span>Amanora Club, Pune</span>
              </div>
            </div>
          </div>

          {/* Simulated QR Code for Front Desk Entry */}
          <div className="mt-5 p-3 rounded-xl bg-black/40 border border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-white text-black">
                <QrCode className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs font-semibold text-white block">Digital Gate Pass</span>
                <span className="text-[10px] text-zinc-400 font-mono">Show at Amanora Front Desk</span>
              </div>
            </div>
            <span className="text-[10px] font-mono text-zinc-400">
              ₹{receipt.amountInINR.toLocaleString('en-IN')} Paid
            </span>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={handlePrint}
            className="w-full sm:w-auto flex-1 py-3 px-4 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 text-white font-medium text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
          >
            <Printer className="w-3.5 h-3.5" />
            Print Member Pass
          </button>

          <Link
            href="/admin"
            className="w-full sm:w-auto flex-1 py-3 px-4 rounded-full bg-brand-600 hover:bg-brand-500 text-white font-heading font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-lg shadow-brand-600/30 text-center"
          >
            <span>Admin Console</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
