"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowRight, MapPin, Sparkles, Shield, ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "framer-motion";
import { CLUB_LOCATION_INFO } from "@/data/demo-content";

interface CinematicFinalCTASectionProps {
  onOpenCheckout: () => void;
}

export default function CinematicFinalCTASection({ onOpenCheckout }: CinematicFinalCTASectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll progress through 180vh pinned CTA track
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
  const rawWatermarkY = useTransform(smoothProgress, [0, 1], ["-8%", "12%"]);
  const watermarkY = shouldReduceMotion ? "0%" : rawWatermarkY;

  // Phase 1: Header and Opening Statement (Always clear & readable)
  const headerOpacity = useTransform(smoothProgress, [0, 0.15], [0.85, 1]);
  const headerY = useTransform(smoothProgress, [0, 0.15], [-12, 0]);

  // Phase 2: Cinematic Card Visual & Scaling (Elevated baseline opacity for continuous readability)
  const cardOpacity = useTransform(smoothProgress, [0.08, 0.3], [0.85, 1]);
  const cardScale = useTransform(smoothProgress, [0.08, 0.35, 0.85], [0.96, 1, 1.02]);
  const cardY = useTransform(smoothProgress, [0.08, 0.3], [20, 0]);

  // Phase 3: Focal CTA Dominance (High contrast & immediate visual prominence)
  const ctaOpacity = useTransform(smoothProgress, [0.2, 0.45], [0.9, 1]);
  const ctaScale = useTransform(smoothProgress, [0.2, 0.45], [0.98, 1]);

  // Phase 4: Location & Footer Handoff
  const handoffOpacity = useTransform(smoothProgress, [0.65, 0.9], [0.75, 1]);
  const handoffY = useTransform(smoothProgress, [0.65, 0.9], [12, 0]);

  return (
    <section
      id="final-cta"
      ref={containerRef}
      className="relative h-[180vh] bg-[#050B18] border-t border-white/10 hidden lg:block overflow-clip select-none"
    >
      {/* Pinned Viewport Stage */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between pt-20 pb-8 px-8 xl:px-12 overflow-hidden">
        
        {/* Giant Architectural Watermark */}
        <motion.div
          style={{ y: watermarkY }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden opacity-[0.03]"
        >
          <span className="font-heading font-black text-[20vw] leading-none uppercase tracking-tighter text-white whitespace-nowrap">
            ALPHA FITNESS
          </span>
        </motion.div>

        {/* Ambient Subtle Lighting Spheres */}
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#0066FF]/10 blur-[150px] rounded-full pointer-events-none z-0" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-[#00C6FF]/08 blur-[140px] rounded-full pointer-events-none z-0" />
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
              04 / FINAL STANDARD
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-xs font-mono text-zinc-300 uppercase tracking-wider">
              AMANORA CLUB (FERN HOTEL) • PUNE
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0D1730] border border-[#00C6FF]/40 text-xs font-mono font-bold text-white shadow-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00C6FF] animate-pulse" />
              <span>CONSISTENCY OVER TIME</span>
            </div>
          </div>
        </motion.div>

        {/* MAIN STAGE: CINEMATIC CLOSING CARD & PRIMARY CONVERSION FOCAL */}
        <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-2 flex-1 flex items-center justify-center">
          
          <motion.div
            style={{
              opacity: shouldReduceMotion ? 1 : cardOpacity,
              scale: shouldReduceMotion ? 1 : cardScale,
              y: shouldReduceMotion ? 0 : cardY,
            }}
            className="w-full max-w-5xl rounded-3xl overflow-hidden border border-[#00C6FF]/35 bg-[#0D1730] shadow-2xl relative grid grid-cols-12 items-center p-8 xl:p-12 gap-8"
          >
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0">
              <Image
                src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=1800"
                alt="Alpha Fitness Amanora Final Showcase"
                fill
                className="object-cover opacity-20 contrast-125 brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0D1730] via-[#0D1730]/90 to-[#0D1730]/80" />
            </div>

            {/* Left Content (8 Columns) */}
            <div className="col-span-8 relative z-10 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0066FF]/20 border border-[#00C6FF]/40 text-[#00C6FF] text-[10px] font-mono font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#00C6FF]" />
                <span>START YOUR TRAINING TODAY</span>
              </div>

              <h2 className="text-3xl xl:text-5xl font-heading font-black text-white uppercase tracking-tight leading-[1.05] drop-shadow-md">
                ELEVATE YOUR <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#00C6FF]">
                  FITNESS STANDARDS
                </span>
              </h2>

              <p className="text-xs xl:text-sm text-zinc-200 font-sans max-w-lg leading-relaxed">
                Structured strength training, modern cardio conditioning, and organized fitness spaces inside Amanora Club, Hadapsar, Pune. Instant membership enrollment.
              </p>

              {/* Action Buttons */}
              <motion.div
                style={{
                  opacity: shouldReduceMotion ? 1 : ctaOpacity,
                  scale: shouldReduceMotion ? 1 : ctaScale,
                }}
                className="pt-2 flex items-center gap-4"
              >
                <button
                  onClick={onOpenCheckout}
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-[#0066FF] to-[#00C6FF] hover:brightness-110 text-white font-heading font-black text-xs uppercase tracking-wider shadow-xl shadow-[#0066FF]/40 hover:shadow-[#00C6FF]/60 transition-all transform hover:-translate-y-0.5 active:scale-[0.98] inline-flex items-center gap-2.5 cursor-pointer"
                >
                  <span>Start Your Membership</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="#location"
                  className="px-6 py-4 rounded-full bg-[#050B18]/90 hover:bg-[#050B18] text-white border border-[#00C6FF]/40 hover:border-[#00C6FF] font-heading font-bold text-xs uppercase tracking-wider transition-all inline-flex items-center gap-2 cursor-pointer shadow-lg"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#00C6FF]" />
                  <span>Visit Club Location</span>
                </a>
              </motion.div>
            </div>

            {/* Right Location Mini-Card (4 Columns) */}
            <div className="col-span-4 relative z-10 p-6 rounded-2xl bg-[#050B18]/90 border border-[#00C6FF]/30 backdrop-blur-md space-y-4 shadow-xl">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#00C6FF] uppercase tracking-wider">
                <Shield className="w-3.5 h-3.5" />
                <span>CLUB DETAILS</span>
              </div>

              <div className="space-y-3 text-xs font-sans">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block">Address</span>
                  <p className="text-white leading-snug font-medium">{CLUB_LOCATION_INFO.fullAddress}</p>
                </div>

                <div className="pt-2 border-t border-white/10 space-y-1">
                  <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block">Hours</span>
                  <p className="text-white font-medium">Mon – Sat: {CLUB_LOCATION_INFO.operatingHours.weekdays}</p>
                  <p className="text-zinc-300 text-[11px]">Sun: {CLUB_LOCATION_INFO.operatingHours.sundays}</p>
                </div>
              </div>
            </div>

          </motion.div>

        </div>

        {/* BOTTOM METADATA & FOOTER HANDOFF */}
        <motion.div
          style={{
            opacity: shouldReduceMotion ? 1 : handoffOpacity,
            y: shouldReduceMotion ? 0 : handoffY,
          }}
          className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between text-xs font-mono text-zinc-300 pt-3 border-t border-white/10"
        >
          <div className="flex items-center gap-2 text-[11px] text-zinc-300">
            <span className="text-[#00C6FF]">❖</span>
            <span>ALPHA FITNESS • AMANORA CLUB, PUNE</span>
          </div>

          <a
            href="#location"
            className="text-[#00C6FF] hover:text-white uppercase tracking-wider flex items-center gap-1.5 transition-colors group cursor-pointer"
          >
            <span>LOCATION &amp; CONTACT DETAILS</span>
            <ChevronDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
