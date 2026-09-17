"use client";

import { useRef } from "react";
import { Check, ArrowRight, Sparkles, Info } from "lucide-react";
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "framer-motion";
import { DEMO_MEMBERSHIP_PLANS, PlanDemo } from "@/data/demo-content";

interface CinematicMembershipSectionProps {
  onSelectPlan: (plan: PlanDemo) => void;
}

export default function CinematicMembershipSection({ onSelectPlan }: CinematicMembershipSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll progress through 200vh pinned membership track
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001,
  });

  // Background architectural watermark parallax
  const rawWatermarkY = useTransform(smoothProgress, [0, 1], ["-6%", "14%"]);
  const watermarkY = shouldReduceMotion ? "0%" : rawWatermarkY;

  // Header and Stage Reveal Transforms (Always readable, subtle elevation)
  const headerOpacity = useTransform(smoothProgress, [0, 0.15], [0.85, 1]);
  const headerY = useTransform(smoothProgress, [0, 0.15], [-12, 0]);

  // Staged Card Reveal Transforms (Elevated opacity floors to maintain high readability throughout scroll):
  // Card 1 (Flex Monthly): enters early
  const card1Opacity = useTransform(smoothProgress, [0, 0.22], [0.85, 1]);
  const card1Y = useTransform(smoothProgress, [0, 0.22], [18, 0]);
  const card1Scale = useTransform(smoothProgress, [0, 0.22, 0.8], [0.97, 1, 1]);

  // Card 2 (Quarterly Pro - Popular): enters mid with active highlight
  const card2Opacity = useTransform(smoothProgress, [0.08, 0.32], [0.75, 1]);
  const card2Y = useTransform(smoothProgress, [0.08, 0.32], [22, 0]);
  const card2Scale = useTransform(smoothProgress, [0.08, 0.32, 0.8], [0.95, 1.02, 1.02]);

  // Card 3 (Annual Elite): enters late
  const card3Opacity = useTransform(smoothProgress, [0.15, 0.42], [0.75, 1]);
  const card3Y = useTransform(smoothProgress, [0.15, 0.42], [26, 0]);
  const card3Scale = useTransform(smoothProgress, [0.15, 0.42, 0.8], [0.97, 1, 1]);

  // Bottom Membership Handoff Cue
  const bottomHandoffOpacity = useTransform(smoothProgress, [0.65, 0.9], [0.75, 1]);
  const bottomHandoffY = useTransform(smoothProgress, [0.65, 0.9], [10, 0]);

  const cardTransforms = [
    { opacity: shouldReduceMotion ? 1 : card1Opacity, y: shouldReduceMotion ? 0 : card1Y, scale: shouldReduceMotion ? 1 : card1Scale },
    { opacity: shouldReduceMotion ? 1 : card2Opacity, y: shouldReduceMotion ? 0 : card2Y, scale: shouldReduceMotion ? 1 : card2Scale },
    { opacity: shouldReduceMotion ? 1 : card3Opacity, y: shouldReduceMotion ? 0 : card3Y, scale: shouldReduceMotion ? 1 : card3Scale },
  ];

  return (
    <section
      id="membership"
      ref={containerRef}
      className="relative h-[200vh] bg-[#050B18] border-t border-white/10 hidden lg:block overflow-clip select-none"
    >
      {/* Pinned Viewport Stage */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between pt-20 pb-8 px-8 xl:px-12 overflow-hidden">
        
        {/* Giant Architectural Watermark */}
        <motion.div
          style={{ y: watermarkY }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden opacity-[0.03]"
        >
          <span className="font-heading font-black text-[22vw] leading-none uppercase tracking-tighter text-white whitespace-nowrap">
            MEMBERSHIP
          </span>
        </motion.div>

        {/* Ambient Subtle Lighting Spheres */}
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-[#0066FF]/10 blur-[150px] rounded-full pointer-events-none z-0" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#00C6FF]/08 blur-[140px] rounded-full pointer-events-none z-0" />
        <div className="absolute inset-0 z-0 opacity-15 pointer-events-none bg-[radial-gradient(#00C6FF_1px,transparent_1px)] [background-size:28px_28px]" />

        {/* TOP SECTION HEADER: PROGRESS TRACKER & BREADCRUMB */}
        <motion.div
          style={{
            opacity: shouldReduceMotion ? 1 : headerOpacity,
            y: shouldReduceMotion ? 0 : headerY,
          }}
          className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between pt-2 border-b border-white/10 pb-3"
        >
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-[#00C6FF] uppercase tracking-[0.25em]">
              03 / MEMBERSHIP PASSES
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-xs font-mono text-zinc-300 uppercase tracking-wider">
              AMANORA CLUB (FERN HOTEL) • PUNE
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0D1730] border border-[#00C6FF]/40 text-xs font-mono font-bold text-white shadow-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00C6FF] animate-pulse" />
              <span>INSTANT ENROLLMENT</span>
              <span className="text-zinc-500">•</span>
              <span className="text-[#00C6FF]">3 PASS OPTIONS</span>
            </div>
          </div>
        </motion.div>

        {/* MAIN STAGE: EDITORIAL INTRO + 3-PLAN COMPARISON CARDS */}
        <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-2 flex-1 flex flex-col justify-center">
          
          {/* Section Title Banner */}
          <div className="text-center max-w-2xl mx-auto mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0066FF]/20 border border-[#00C6FF]/40 text-[#00C6FF] text-[10px] font-mono font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3 h-3" />
              <span>TRAINING PRIVILEGES</span>
            </div>
            <h2 className="text-3xl xl:text-4xl font-heading font-black text-white uppercase tracking-tight leading-tight">
              CHOOSE YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#00C6FF]">FITNESS PLAN</span>
            </h2>
            <p className="text-xs xl:text-sm text-zinc-200 font-sans mt-1">
              Select your membership tier for Alpha Fitness at Amanora Club. Instant digital membership pass delivery.
            </p>
          </div>

          {/* 3 Staged Plans Grid */}
          <div className="grid grid-cols-3 gap-6 items-stretch">
            {DEMO_MEMBERSHIP_PLANS.map((plan, idx) => {
              const transform = cardTransforms[idx];
              const planNumber = `0${idx + 1}`;
              const isPopular = Boolean(plan.popular);

              return (
                <motion.div
                  key={plan.id}
                  style={{
                    opacity: transform.opacity,
                    y: transform.y,
                    scale: transform.scale,
                  }}
                  className={`relative rounded-3xl p-6 xl:p-7 flex flex-col justify-between transition-all duration-300 bg-[#0D1730] will-change-transform shadow-2xl ${
                    isPopular
                      ? "border-2 border-[#00C6FF] shadow-[#0066FF]/40 bg-gradient-to-b from-[#0D1730] to-[#081024]"
                      : "border border-[#00C6FF]/35 hover:border-[#00C6FF]/60"
                  }`}
                >
                  {/* Most Popular Ribbon */}
                  {isPopular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#0066FF] to-[#00C6FF] text-white text-[10px] font-heading font-black uppercase px-4 py-0.5 rounded-full shadow-lg shadow-[#0066FF]/50 tracking-widest flex items-center gap-1.5 z-10">
                      <Sparkles className="w-3 h-3 text-white" />
                      <span>MOST POPULAR PASS</span>
                    </div>
                  )}

                  {/* Card Header & Price */}
                  <div className="space-y-4">
                    <div className="flex items-start justify-between border-b border-white/15 pb-3">
                      <div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#00C6FF] block">
                          {plan.tierLabel} TIER
                        </span>
                        <h3 className="text-xl xl:text-2xl font-heading font-black text-white uppercase tracking-tight mt-0.5">
                          {plan.name}
                        </h3>
                      </div>
                      <span className="text-xs font-mono font-black text-white bg-white/10 px-2.5 py-1 rounded-lg border border-white/15">
                        {planNumber}
                      </span>
                    </div>

                    <p className="text-xs text-zinc-200 font-sans leading-relaxed min-h-[36px]">
                      {plan.description}
                    </p>

                    {/* Pricing Block */}
                    <div className="py-3 px-4 rounded-2xl bg-[#050B18]/90 border border-white/15 flex items-baseline justify-between shadow-inner">
                      <div>
                        <span className="text-xs font-bold text-zinc-300 mr-1">₹</span>
                        <span className="text-2xl xl:text-3xl font-heading font-black text-white tracking-tight">
                          {plan.priceInINR.toLocaleString("en-IN")}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-[#00C6FF] font-bold">
                        / {plan.durationLabel}
                      </span>
                    </div>

                    {/* Features List */}
                    <div className="space-y-2 pt-1">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 font-bold block mb-2">
                        Included Privileges
                      </span>
                      <ul className="space-y-2 text-xs text-zinc-100 font-sans font-medium">
                        {plan.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2.5">
                            <Check className="w-4 h-4 text-[#00C6FF] flex-shrink-0 mt-0.5" />
                            <span className="leading-snug text-zinc-100">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="pt-6 border-t border-white/15 mt-6">
                    <button
                      onClick={() => onSelectPlan(plan)}
                      className={`w-full py-3.5 px-5 rounded-full text-xs font-heading font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                        isPopular
                          ? "bg-gradient-to-r from-[#0066FF] to-[#00C6FF] hover:brightness-110 text-white shadow-xl shadow-[#0066FF]/40 hover:shadow-[#00C6FF]/60 transform hover:-translate-y-0.5 active:scale-[0.98]"
                          : "bg-[#0066FF]/20 hover:bg-[#0066FF]/35 text-white border border-[#00C6FF]/50 hover:border-[#00C6FF] transform hover:-translate-y-0.5 active:scale-[0.98]"
                      }`}
                    >
                      <span>Select {plan.durationLabel} Pass</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* BOTTOM METADATA & CTA DOMINANCE HANDOFF */}
        <div className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between text-xs font-mono text-zinc-300 pt-3 border-t border-white/10">
          <div className="flex items-center gap-2 text-[11px] text-zinc-300">
            <Info className="w-3.5 h-3.5 text-[#00C6FF] flex-shrink-0" />
            <span>Prices and tiers shown are demo placeholders subject to final client confirmation.</span>
          </div>

          {/* Bottom Illuminated Enrollment Cue */}
          <motion.div
            style={{
              opacity: shouldReduceMotion ? 1 : bottomHandoffOpacity,
              y: shouldReduceMotion ? 0 : bottomHandoffY,
            }}
            className="flex items-center gap-3 text-white font-bold"
          >
            <span className="text-zinc-400">READY TO TRAIN?</span>
            <button
              onClick={() => onSelectPlan(DEMO_MEMBERSHIP_PLANS[1])}
              className="text-[#00C6FF] hover:text-white uppercase tracking-wider underline underline-offset-4 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>ENROLL IN POPULAR PASS (QUARTERLY PRO) →</span>
            </button>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
