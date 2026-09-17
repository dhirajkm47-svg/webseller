"use client";

import { Check, ArrowRight, Sparkles, Info } from "lucide-react";
import { motion } from "framer-motion";
import { DEMO_MEMBERSHIP_PLANS, PlanDemo } from "@/data/demo-content";

interface MobileMembershipSectionProps {
  onSelectPlan: (plan: PlanDemo) => void;
}

export default function MobileMembershipSection({ onSelectPlan }: MobileMembershipSectionProps) {
  return (
    <section id="membership-mobile" className="py-16 sm:py-20 bg-[#050B18] border-t border-white/10 relative block lg:hidden">
      {/* Ambient Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[320px] h-[320px] bg-[#0066FF]/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1730] border border-[#00C6FF]/30 text-[10px] font-mono font-bold text-[#00C6FF] uppercase tracking-wider">
            <Sparkles className="w-3 h-3 text-[#00C6FF]" />
            <span>03 / MEMBERSHIP PASSES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-heading font-black text-white uppercase tracking-tight leading-tight">
            CHOOSE YOUR<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#00C6FF]">
              FITNESS PLAN
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed">
            Select your preferred membership pass for Alpha Fitness at Amanora Club, Pune. Instant digital pass delivery.
          </p>
        </div>

        {/* Vertical Stack of Membership Plans */}
        <div className="space-y-6">
          {DEMO_MEMBERSHIP_PLANS.map((plan, idx) => {
            const planNumber = `0${idx + 1}`;
            const isPopular = Boolean(plan.popular);

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative rounded-2xl p-6 flex flex-col justify-between transition-all bg-[#0D1730] ${
                  isPopular
                    ? "border-2 border-[#00C6FF] shadow-2xl shadow-[#0066FF]/30 bg-gradient-to-b from-[#0D1730] to-[#081024]"
                    : "border border-[#00C6FF]/25 shadow-xl"
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#0066FF] to-[#00C6FF] text-white text-[10px] font-heading font-black uppercase px-3.5 py-0.5 rounded-full shadow-md tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-white" />
                    <span>MOST POPULAR PASS</span>
                  </div>
                )}

                <div className="space-y-4">
                  <div className="flex items-start justify-between border-b border-white/10 pb-3">
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#00C6FF] block">
                        {plan.tierLabel} TIER
                      </span>
                      <h3 className="text-lg sm:text-xl font-heading font-black text-white uppercase tracking-tight mt-0.5">
                        {plan.name}
                      </h3>
                    </div>
                    <span className="text-xs font-mono font-bold text-zinc-400 bg-white/5 px-2.5 py-1 rounded-lg border border-white/10">
                      {planNumber}
                    </span>
                  </div>

                  <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                    {plan.description}
                  </p>

                  {/* Price Box */}
                  <div className="py-3 px-4 rounded-xl bg-[#050B18]/80 border border-white/10 flex items-baseline justify-between">
                    <div>
                      <span className="text-xs font-bold text-zinc-400 mr-1">₹</span>
                      <span className="text-2xl font-heading font-black text-white">
                        {plan.priceInINR.toLocaleString("en-IN")}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-[#00C6FF] font-bold">
                      / {plan.durationLabel}
                    </span>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 pt-1">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 font-bold block">
                      Included Privileges
                    </span>
                    <ul className="space-y-2 text-xs text-zinc-300 font-sans">
                      {plan.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#00C6FF] flex-shrink-0 mt-0.5" />
                          <span className="leading-snug">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-5 border-t border-white/10 mt-5">
                  <button
                    onClick={() => onSelectPlan(plan)}
                    className={`w-full py-3 px-5 rounded-full text-xs font-heading font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      isPopular
                        ? "bg-gradient-to-r from-[#0066FF] to-[#00C6FF] hover:brightness-110 text-white shadow-lg shadow-[#0066FF]/40 active:scale-[0.98]"
                        : "bg-[#0066FF]/15 hover:bg-[#0066FF]/30 text-white border border-[#00C6FF]/40 active:scale-[0.98]"
                    }`}
                  >
                    <span>Select {plan.durationLabel} Pass</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Demo Disclaimer */}
        <div className="mt-8 flex items-center justify-center gap-2 text-[11px] text-zinc-400 font-sans text-center">
          <Info className="w-3.5 h-3.5 text-[#00C6FF] flex-shrink-0" />
          <span>Prices and tiers shown are demo placeholders subject to final client confirmation.</span>
        </div>

      </div>
    </section>
  );
}
