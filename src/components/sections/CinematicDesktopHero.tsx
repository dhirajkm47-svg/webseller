"use client";

import { useRef } from "react";
import { ArrowRight, MapPin, ShieldCheck, Sparkles, ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "framer-motion";
import { CLUB_LOCATION_INFO } from "@/data/demo-content";

interface CinematicDesktopHeroProps {
  onOpenCheckout: () => void;
}

export default function CinematicDesktopHero({ onOpenCheckout }: CinematicDesktopHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll Progress across the 220vh pinned desktop hero canvas
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // High performance physics-smoothed spring for organic fluid motion
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001,
  });

  // --- 1. OVERSIZED BACKGROUND & INTRO TYPOGRAPHY TRANSFORMATIONS ---
  // Initial dominant state (0% -> 35%), then scales and dissolves into the background (35% -> 55%)
  const rawTitleScale = useTransform(smoothProgress, [0, 0.4, 0.7], [1, 1.15, 1.3]);
  const titleScale = shouldReduceMotion ? 1 : rawTitleScale;

  const rawTitleOpacity = useTransform(smoothProgress, [0, 0.25, 0.5, 0.7], [1, 0.9, 0.15, 0]);
  const titleOpacity = shouldReduceMotion ? 0 : rawTitleOpacity;

  const rawTitleY = useTransform(smoothProgress, [0, 0.5], [0, -50]);
  const titleY = shouldReduceMotion ? 0 : rawTitleY;

  // Giant Ambient Background Wordmark (Deep Onyx Parallax)
  const rawBackdropTextY = useTransform(smoothProgress, [0, 1], ["0%", "18%"]);
  const backdropTextY = shouldReduceMotion ? "0%" : rawBackdropTextY;

  // Scroll Hint Indicator (visible only at the top 0% -> 12%)
  const rawHintOpacity = useTransform(smoothProgress, [0, 0.12], [1, 0]);
  const hintOpacity = shouldReduceMotion ? 0 : rawHintOpacity;

  // --- 2. MAIN CINEMATIC FITNESS VISUAL CONTAINER TRANSFORMS ---
  // Starts as a refined framed portal (0%), expands to widescreen dominance (50% -> 80%)
  const rawBoxWidth = useTransform(
    smoothProgress,
    [0, 0.45, 0.8],
    ["720px", "980px", "1200px"]
  );
  const boxWidth = shouldReduceMotion ? "1200px" : rawBoxWidth;

  const rawBoxHeight = useTransform(
    smoothProgress,
    [0, 0.45, 0.8],
    ["380px", "480px", "560px"]
  );
  const boxHeight = shouldReduceMotion ? "560px" : rawBoxHeight;

  // Internal Video Camera Push-in & Parallax
  const rawVideoScale = useTransform(smoothProgress, [0, 0.5, 1], [1, 1.14, 1.28]);
  const videoScale = shouldReduceMotion ? 1 : rawVideoScale;

  const rawVideoY = useTransform(smoothProgress, [0, 1], ["0%", "-4%"]);
  const videoY = shouldReduceMotion ? "0%" : rawVideoY;

  // --- 3. CONVERGING BRAND STORY & CTA REVEAL (40% -> 85%) ---
  // Smoothly reveals as the visual takes center stage
  const rawContentOpacity = useTransform(smoothProgress, [0, 0.38, 0.65, 0.92], [0, 0.2, 1, 1]);
  const contentOpacity = shouldReduceMotion ? 1 : rawContentOpacity;

  const rawContentY = useTransform(smoothProgress, [0.35, 0.65], [35, 0]);
  const contentY = shouldReduceMotion ? 0 : rawContentY;

  // Floating verified badges subtle depth translation
  const rawBadgeY = useTransform(smoothProgress, [0, 0.5, 1], [0, -8, -16]);
  const badgeY = shouldReduceMotion ? 0 : rawBadgeY;

  return (
    <section
      ref={containerRef}
      className="relative h-[220vh] bg-[#050B18] hidden lg:block overflow-clip"
    >
      {/* Sticky Viewport Stage (Pinned Full-Screen Experience) */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between pt-24 pb-10 overflow-hidden select-none">
        
        {/* Giant Architectural Background Typography (Onyx Parallax Texture) */}
        <motion.div
          style={{ y: backdropTextY }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden opacity-[0.035]"
        >
          <span className="font-heading font-black text-[22vw] leading-none uppercase tracking-tighter text-white whitespace-nowrap">
            ALPHA FITNESS
          </span>
        </motion.div>

        {/* Ambient Atmospheric Blue Lighting Spheres */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#0066FF]/12 blur-[140px] rounded-full pointer-events-none z-0" />
        <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-[#00C6FF]/10 blur-[130px] rounded-full pointer-events-none z-0" />
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[radial-gradient(#00C6FF_1px,transparent_1px)] [background-size:32px_32px]" />

        {/* TOP LAYER: OVERSIZED INTRO TYPOGRAPHY (Phases out on scroll) */}
        <motion.div
          style={{
            opacity: titleOpacity,
            scale: titleScale,
            y: titleY,
            transformOrigin: "center center",
          }}
          className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none px-6 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0066FF]/15 border border-[#00C6FF]/35 text-[#00C6FF] text-[11px] font-mono font-bold uppercase tracking-[0.25em] mb-4 shadow-lg backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#00C6FF]" />
            <span>AMANORA CLUB • HADAPSAR, PUNE</span>
          </div>

          <h1 className="text-7xl xl:text-8xl font-black text-white uppercase font-heading tracking-tight leading-[0.92] drop-shadow-2xl">
            FORGED FOR<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] via-[#00C6FF] to-white">
              PERFORMANCE.
            </span>
          </h1>

          <p className="mt-4 text-sm font-mono tracking-widest text-zinc-300 uppercase">
            Dedicated Training Space • Free Weights • Cardio Suite
          </p>
        </motion.div>

        {/* CENTER STAGE: CINEMATIC EXPANDING VISUAL CANVAS */}
        <div className="relative z-10 w-full flex-1 flex items-center justify-center px-6">
          <motion.div
            style={{
              width: boxWidth,
              height: boxHeight,
            }}
            className="relative rounded-[28px] overflow-hidden border border-[#00C6FF]/25 shadow-2xl shadow-black/90 bg-[#0D1730] group transition-shadow duration-500"
          >
            {/* Scroll-Driven Video Viewport */}
            <motion.div
              style={{
                scale: videoScale,
                y: videoY,
                transformOrigin: "center center",
              }}
              className="w-full h-full relative will-change-transform"
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1800"
                className="w-full h-full object-cover object-center brightness-[0.92] contrast-[1.06]"
                aria-hidden="true"
              >
                <source src="/videos/alpha-fitness-hero.mp4" type="video/mp4" />
              </video>
            </motion.div>

            {/* Depth Gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050B18]/95 via-[#050B18]/25 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050B18]/60 via-transparent to-[#050B18]/30 pointer-events-none" />

            {/* Top Floating Badge */}
            <motion.div
              style={{ y: badgeY }}
              className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-[#091124]/90 border border-[#00C6FF]/35 backdrop-blur-md flex items-center gap-2 z-10 shadow-xl"
            >
              <span className="w-2 h-2 rounded-full bg-[#00C6FF] shadow-[0_0_12px_#00C6FF] animate-pulse" />
              <span className="text-[10px] font-mono font-bold text-white uppercase tracking-widest">
                Amanora Club (Fern Hotel) • Pune
              </span>
            </motion.div>

            {/* CONVERGING OVERLAY CONTENT (Fades in as hero expands) */}
            <motion.div
              style={{
                opacity: contentOpacity,
                y: contentY,
              }}
              className="absolute inset-0 z-20 p-8 sm:p-10 flex flex-col justify-end"
            >
              <div className="grid grid-cols-12 gap-8 items-end">
                
                {/* Left: Strategic Copy */}
                <div className="col-span-8 space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0066FF]/20 border border-[#00C6FF]/40 text-[#00C6FF] text-[10px] font-mono font-bold uppercase tracking-wider">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>AMANORA VERIFIED FACILITY</span>
                    </div>
                    <span className="text-xs font-mono text-zinc-400">
                      STRENGTH FLOOR • HADAPSAR
                    </span>
                  </div>

                  <h2 className="text-3xl xl:text-4xl font-heading font-black text-white uppercase tracking-tight leading-tight drop-shadow-md">
                    TRAIN. TRANSFORM. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#00C6FF]">BELONG.</span>
                  </h2>

                  <p className="text-xs xl:text-sm text-zinc-300 font-sans max-w-xl leading-relaxed">
                    Dedicated strength training equipment, Olympic free weights, cardio suites, and instant gate pass enrollment inside Amanora Club, Hadapsar, Pune.
                  </p>

                  <div className="flex items-center gap-2 text-xs text-zinc-400 pt-1 font-sans">
                    <MapPin className="w-3.5 h-3.5 text-[#00C6FF] shrink-0" />
                    <span>{CLUB_LOCATION_INFO.fullAddress}</span>
                  </div>
                </div>

                {/* Right: High-Impact CTAs */}
                <div className="col-span-4 flex flex-col items-end gap-3 pointer-events-auto">
                  <button
                    onClick={onOpenCheckout}
                    className="w-full max-w-[220px] py-4 px-6 rounded-full bg-gradient-to-r from-[#0066FF] to-[#00C6FF] hover:brightness-110 text-white font-heading font-black text-xs uppercase tracking-wider shadow-xl shadow-[#0066FF]/40 hover:shadow-[#00C6FF]/60 transition-all transform hover:-translate-y-0.5 active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Join Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href="#membership"
                    className="w-full max-w-[220px] py-3.5 px-6 rounded-full bg-[#0066FF]/10 hover:bg-[#0066FF]/20 border border-[#00C6FF]/30 hover:border-[#00C6FF]/60 text-white font-heading font-bold text-xs uppercase tracking-wider text-center transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                  >
                    <span>View Membership Plans</span>
                  </a>
                </div>

              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* BOTTOM METADATA & SCROLL HINT */}
        <div className="relative z-20 max-w-7xl mx-auto px-8 w-full flex items-center justify-between text-xs font-mono text-zinc-400">
          
          {/* Three Pillars Indicator */}
          <div className="flex items-center gap-6 text-[11px] uppercase tracking-wider">
            <span className="text-zinc-200"><strong className="text-[#00C6FF]">01</strong> — TRAIN</span>
            <span className="text-zinc-200"><strong className="text-[#00C6FF]">02</strong> — TRANSFORM</span>
            <span className="text-zinc-200"><strong className="text-[#00C6FF]">03</strong> — BELONG</span>
          </div>

          {/* Dynamic Scroll Hint (Fades out as user scrolls) */}
          <motion.div
            style={{ opacity: hintOpacity }}
            className="flex items-center gap-2 text-[#00C6FF] font-bold text-[11px] uppercase tracking-widest animate-bounce"
          >
            <span>SCROLL TO EXPERIENCE</span>
            <ChevronDown className="w-3.5 h-3.5" />
          </motion.div>

          <div className="text-[11px] text-zinc-400">
            AMANORA TOWNSHIP, HADAPSAR
          </div>
        </div>

      </div>
    </section>
  );
}