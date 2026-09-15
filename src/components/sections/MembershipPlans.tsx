"use client";

import Image from "next/image";
import { Check, ShieldAlert, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { DEMO_MEMBERSHIP_PLANS, PlanDemo } from "@/data/demo-content";

interface MembershipPlansProps {
  onSelectPlan: (plan: PlanDemo) => void;
}

export default function MembershipPlans({ onSelectPlan }: MembershipPlansProps) {
  return (
    <section id="membership" className="py-24 bg-[#09090B] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Atmospheric Gym Editorial Photography Panel */}
          <div className="hidden lg:block lg:col-span-5 relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl min-h-[550px]">
            <Image
              src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=1400"
              alt="Alpha Fitness Membership"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-[#09090B]/40 to-transparent" />
            <div className="absolute top-8 left-8 flex items-center gap-2">
              <span className="font-heading font-black text-sm tracking-widest text-white uppercase">
                ALPHA <span className="text-[#E50914]">FITNESS</span>
              </span>
            </div>
            <div className="absolute bottom-8 left-8 right-8 space-y-2">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#E50914] font-bold block">
                Membership Passes
              </span>
              <h4 className="text-2xl font-heading font-black text-white uppercase leading-tight">
                ELEVATE YOUR WORKOUT STANDARDS
              </h4>
              <p className="text-xs text-zinc-400 font-sans">
                Amanora Club (Fern Hotel), Amanora Township, Hadapsar, Pune.
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Plans Selection */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            {/* Section Header */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xs font-black uppercase tracking-[0.25em] text-[#E50914] font-heading mb-2"
              >
                MEMBERSHIP PASSES
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl sm:text-5xl font-black text-white uppercase font-heading tracking-tight leading-[1.02]"
              >
                CHOOSE YOUR<br />FITNESS PLAN
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-sm sm:text-base text-zinc-400 mt-2 max-w-lg font-sans"
              >
                Select your preferred membership pass for Alpha Fitness at Amanora Club. Instant digital membership enrollment.
              </motion.p>
            </div>

            {/* 3 Editorial Cards with 01, 02, 03 Indexing */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              {DEMO_MEMBERSHIP_PLANS.map((plan, idx) => {
                const planNumber = `0${idx + 1}`;
                return (
                  <motion.div
                    key={plan.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className={`relative rounded-2xl p-6 flex flex-col justify-between transition-all bg-[#111115] ${
                      plan.popular
                        ? "border-2 border-[#E50914] shadow-2xl shadow-[#E50914]/20"
                        : "border border-white/10 hover:border-zinc-600"
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#E50914] text-white text-[10px] font-heading font-black uppercase px-3.5 py-0.5 rounded-full shadow-md tracking-wider">
                        Most Popular
                      </div>
                    )}

                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <span className="text-[10px] font-heading font-black uppercase tracking-widest text-[#E50914]">
                            {plan.tierLabel}
                          </span>
                          <h3 className="text-base font-heading font-black text-white uppercase mt-0.5">{plan.name}</h3>
                        </div>
                        <span className="text-xs font-mono font-bold text-zinc-500">
                          {planNumber}
                        </span>
                      </div>

                      <p className="text-[11px] text-zinc-400 font-sans leading-relaxed">{plan.description}</p>

                      <div className="py-3 border-y border-white/10">
                        <div className="flex items-baseline gap-1">
                          <span className="text-xs font-bold text-zinc-400">₹</span>
                          <span className="text-2xl font-heading font-black text-white">
                            {plan.priceInINR.toLocaleString("en-IN")}
                          </span>
                          <span className="text-[10px] text-zinc-400 font-medium">/ {plan.durationLabel}</span>
                        </div>
                      </div>

                      <ul className="space-y-2 text-[11px] text-zinc-300 font-sans">
                        {plan.features.slice(0, 4).map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-[#E50914] flex-shrink-0 mt-0.5" />
                            <span className="leading-tight">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-6">
                      <button
                        onClick={() => onSelectPlan(plan)}
                        className={`w-full py-3 px-4 rounded-full text-xs font-heading font-black uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 ${
                          plan.popular
                            ? "bg-[#E50914] hover:bg-[#FF2424] text-white shadow-lg shadow-[#E50914]/30"
                            : "bg-white/5 hover:bg-white/10 text-zinc-200 border border-white/10 hover:border-zinc-500"
                        }`}
                      >
                        <span>Select Pass</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Demo Notice */}
            <div className="pt-2 flex items-center gap-2 text-[11px] text-zinc-500 font-sans">
              <ShieldAlert className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
              <span>Prices and tiers shown are demo placeholders subject to final client confirmation upon onboarding.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
