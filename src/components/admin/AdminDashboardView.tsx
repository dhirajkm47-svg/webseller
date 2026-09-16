"use client";

import React, { useState, useEffect } from 'react';
import { 
  Users, 
  CreditCard, 
  TrendingUp, 
  Search, 
  Trash2, 
  LogOut, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  RefreshCw,
  ExternalLink
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface MemberItem {
  id: string;
  memberCode: string;
  fullName: string;
  email: string;
  phone: string;
  emergencyContact?: string | null;
  createdAt: string;
  memberships: Array<{
    id: string;
    planName: string;
    planSlug: string;
    duration: string;
    amount: number;
    startDate: string;
    endDate: string;
    status: string;
  }>;
  payments: Array<{
    id: string;
    orderId: string;
    paymentId?: string | null;
    amount: number;
    status: string;
    provider: string;
    createdAt: string;
  }>;
}

interface Metrics {
  totalMembers: number;
  activeMemberships: number;
  totalRevenueINR: number;
}

export default function AdminDashboardView() {
  const router = useRouter();
  const [members, setMembers] = useState<MemberItem[]>([]);
  const [metrics, setMetrics] = useState<Metrics>({
    totalMembers: 0,
    activeMemberships: 0,
    totalRevenueINR: 0,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [adminUser, setAdminUser] = useState<{ name: string; email: string } | null>(null);

  const fetchMembers = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/admin/members');
      if (!res.ok) {
        if (res.status === 401) {
          router.push('/admin/login');
          return;
        }
        throw new Error('Failed to load members.');
      }
      const data = await res.json();
      setMembers(data.members || []);
      setMetrics(data.metrics || { totalMembers: 0, activeMemberships: 0, totalRevenueINR: 0 });
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const initData = async () => {
      try {
        const authRes = await fetch('/api/admin/auth');
        if (authRes.ok) {
          const authData = await authRes.json();
          setAdminUser(authData.admin);
        } else {
          router.push('/admin/login');
          return;
        }
      } catch {
        router.push('/admin/login');
        return;
      }

      setIsLoading(true);
      try {
        const res = await fetch('/api/admin/members');
        if (!res.ok) {
          if (res.status === 401) {
            router.push('/admin/login');
            return;
          }
          throw new Error('Failed to load members.');
        }
        const data = await res.json();
        setMembers(data.members || []);
        setMetrics(data.metrics || { totalMembers: 0, activeMemberships: 0, totalRevenueINR: 0 });
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    initData();
  }, [router]);

  const handleLogout = async () => {
    await fetch('/api/admin/auth', { method: 'DELETE' });
    router.push('/admin/login');
  };

  const handleDeleteMember = async (id: string, name: string) => {
    if (!confirm(`Are you sure you want to delete member ${name}? This will remove all associated memberships and payment logs.`)) {
      return;
    }

    try {
      const res = await fetch(`/api/admin/members?id=${id}`, { method: 'DELETE' });
      if (res.ok) {
        fetchMembers();
      }
    } catch (err) {
      console.error('Delete error:', err);
    }
  };

  const filteredMembers = members.filter((m) => {
    const q = searchQuery.toLowerCase();
    return (
      m.fullName.toLowerCase().includes(q) ||
      m.email.toLowerCase().includes(q) ||
      m.memberCode.toLowerCase().includes(q) ||
      m.phone.toLowerCase().includes(q)
    );
  });

  return (
    <div className="min-h-screen bg-dark-bg text-zinc-100 selection:bg-brand-600 selection:text-white">
      {/* Admin Top Navigation */}
      <header className="border-b border-white/10 bg-dark-card/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#7A5CFF] to-[#3B82F6] flex items-center justify-center text-white font-black text-sm shadow-md shadow-[#7A5CFF]/30">
                A
              </div>
              <span className="font-heading font-black tracking-wider text-base text-white">
                ALPHA <span className="text-[#7A5CFF]">FITNESS</span>
              </span>
            </Link>
            <span className="px-2.5 py-0.5 rounded-full bg-[#7A5CFF]/10 border border-[#7A5CFF]/20 text-[#7A5CFF] text-xs font-mono font-semibold">
              Admin Console
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              target="_blank"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-zinc-300 transition-colors"
            >
              <span>Live Site</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>

            {adminUser && (
              <span className="text-xs text-zinc-400 hidden md:inline-block font-mono">
                {adminUser.email}
              </span>
            )}

            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 text-red-400 text-xs font-medium transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <div className="p-6 rounded-2xl bg-dark-card border border-white/10 flex items-center justify-between">
            <div>
              <span className="text-xs text-zinc-400 uppercase tracking-wider font-semibold">
                Total Enrolled Members
              </span>
              <h3 className="text-3xl font-heading font-black text-white mt-1">
                {metrics.totalMembers}
              </h3>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-[#7A5CFF]/10 border border-[#7A5CFF]/20 flex items-center justify-center text-[#7A5CFF]">
              <Users className="w-6 h-6" />
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-dark-card border border-white/10 flex items-center justify-between">
            <div>
              <span className="text-xs text-zinc-400 uppercase tracking-wider font-semibold">
                Active Passes
              </span>
              <h3 className="text-3xl font-heading font-black text-emerald-400 mt-1">
                {metrics.activeMemberships}
              </h3>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="w-6 h-6" />
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-dark-card border border-white/10 flex items-center justify-between">
            <div>
              <span className="text-xs text-zinc-400 uppercase tracking-wider font-semibold">
                Total Revenue
              </span>
              <h3 className="text-3xl font-heading font-black text-white mt-1">
                ₹{metrics.totalRevenueINR.toLocaleString('en-IN')}
              </h3>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-[#7A5CFF]/10 border border-[#7A5CFF]/20 flex items-center justify-center text-[#7A5CFF]">
              <TrendingUp className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Members Directory Card */}
        <div className="rounded-2xl bg-dark-card border border-white/10 overflow-hidden shadow-xl">
          {/* Header & Search */}
          <div className="p-6 border-b border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-heading font-black text-white uppercase tracking-wide">
                Member Directory & Membership Records
              </h2>
              <p className="text-xs text-zinc-400 mt-0.5">
                Real-time synchronized records for Amanora Club, Hadapsar, Pune.
              </p>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div className="relative flex-1 sm:w-64">
                <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search code, name, phone..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 rounded-xl bg-dark-bg border border-white/10 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-[#7A5CFF] focus:ring-1 focus:ring-[#7A5CFF] transition-colors"
                />
              </div>

              <button
                onClick={fetchMembers}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 transition-colors"
                title="Refresh"
              >
                <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-white/5 uppercase text-zinc-400 font-semibold tracking-wider border-b border-white/10">
                <tr>
                  <th className="px-6 py-3.5">Member ID</th>
                  <th className="px-6 py-3.5">Full Name & Contact</th>
                  <th className="px-6 py-3.5">Active Plan</th>
                  <th className="px-6 py-3.5">Validity</th>
                  <th className="px-6 py-3.5">Payment</th>
                  <th className="px-6 py-3.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-zinc-300">
                {isLoading ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center text-zinc-500">
                      Loading member records...
                    </td>
                  </tr>
                ) : filteredMembers.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center text-zinc-500">
                      No matching member records found.
                    </td>
                  </tr>
                ) : (
                  filteredMembers.map((m) => {
                    const activeMembership = m.memberships[0];
                    const latestPayment = m.payments[0];

                    return (
                      <tr key={m.id} className="hover:bg-white/[0.02] transition-colors">
                        <td className="px-6 py-4 font-mono font-bold text-[#7A5CFF]">
                          {m.memberCode}
                        </td>
                        <td className="px-6 py-4">
                          <div className="font-semibold text-white text-sm">{m.fullName}</div>
                          <div className="text-zinc-400 text-[11px] mt-0.5">{m.email} • {m.phone}</div>
                        </td>
                        <td className="px-6 py-4">
                          {activeMembership ? (
                            <div>
                              <span className="font-medium text-white">{activeMembership.planName}</span>
                              <span className="block text-[10px] text-zinc-400 font-mono">{activeMembership.duration}</span>
                            </div>
                          ) : (
                            <span className="text-zinc-500">No active plan</span>
                          )}
                        </td>
                        <td className="px-6 py-4">
                          {activeMembership ? (
                            <div className="text-[11px]">
                              <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-semibold text-[10px]">
                                {activeMembership.status}
                              </span>
                              <div className="text-zinc-400 mt-1">
                                Until {new Date(activeMembership.endDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                              </div>
                            </div>
                          ) : (
                            <span className="text-zinc-500">-</span>
                          )}
                        </td>
                        <td className="px-6 py-4">
                          {latestPayment ? (
                            <div>
                              <span className="font-semibold text-white">₹{latestPayment.amount.toLocaleString('en-IN')}</span>
                              <span className="block text-[10px] text-emerald-400 uppercase font-mono">{latestPayment.status} ({latestPayment.provider})</span>
                            </div>
                          ) : (
                            <span className="text-zinc-500">Pending</span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button
                            onClick={() => handleDeleteMember(m.id, m.fullName)}
                            className="p-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 hover:text-red-300 transition-colors"
                            title="Delete Member"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
