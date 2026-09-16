"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, Mail, ShieldCheck, AlertCircle, ArrowLeft, Loader2 } from 'lucide-react';
import Link from 'next/link';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('admin@alphafitness.demo');
  const [password, setPassword] = useState('AdminPassword123!');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), password }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Authentication failed.');
      }

      router.push('/admin/dashboard');
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Invalid login credentials.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050B18] text-[#F8FAFC] flex items-center justify-center p-4 relative selection:bg-[#00C6FF] selection:text-black">
      {/* Background Accent */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#0066FF]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-md bg-[#0D1730] border border-[#00C6FF]/30 rounded-3xl p-8 shadow-2xl relative z-10">
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-[#00C6FF] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Live Site
          </Link>
        </div>

        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-[#0066FF] to-[#00C6FF] flex items-center justify-center text-white font-black text-xl mx-auto shadow-lg shadow-[#0066FF]/40">
            A
          </div>
          <h1 className="font-heading font-black text-2xl text-white mt-4 uppercase tracking-wider">
            ADMIN PORTAL
          </h1>
          <p className="text-xs text-zinc-400 mt-1">
            Alpha Fitness • Amanora Club, Hadapsar, Pune
          </p>
        </div>

        {/* Semantic Red Error Alert */}
        {error && (
          <div className="mb-6 p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 flex items-start gap-3 text-red-300 text-xs">
            <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-zinc-300 uppercase tracking-wider mb-1.5">
              Admin Email
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#050B18] border border-white/15 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#00C6FF] focus:ring-1 focus:ring-[#00C6FF] transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-zinc-300 uppercase tracking-wider mb-1.5">
              Password
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#050B18] border border-white/15 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#00C6FF] focus:ring-1 focus:ring-[#00C6FF] transition-colors"
              />
            </div>
          </div>

          {/* Quick Demo Credentials Box */}
          <div className="p-3 rounded-xl bg-[#050B18] border border-[#00C6FF]/25 text-[11px] text-zinc-300 space-y-1 font-mono">
            <div className="flex items-center gap-1.5 text-[#00C6FF] font-semibold uppercase text-[10px]">
              <ShieldCheck className="w-3.5 h-3.5" />
              Demo Credentials Pre-filled
            </div>
            <div>Email: <span className="text-zinc-200">admin@alphafitness.demo</span></div>
            <div>Pass: <span className="text-zinc-200">AdminPassword123!</span></div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#0066FF] to-[#00C6FF] hover:brightness-110 text-white font-heading font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#0066FF]/40 hover:shadow-[#00C6FF]/60 transition-all transform hover:-translate-y-0.5 active:scale-[0.98] disabled:opacity-50 mt-2 cursor-pointer"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Authenticating...</span>
              </>
            ) : (
              <span>Sign In to Admin Console</span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
