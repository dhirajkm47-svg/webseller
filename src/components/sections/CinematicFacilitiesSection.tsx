"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "framer-motion";

const FACILITY_ZONES = [
  {
    num: "01",
    title: "STRENGTH & RESISTANCE FLOOR",
    tag: "RESISTANCE & HYPERTROPHY",
    description:
      "Dedicated floor area engineered for barbell work, progressive overload, and structured strength routines inside Amanora Club.",
    specs: ["Heavy Dumbbell Range", "Olympic Power Racks", "Plate-Loaded Machines", "Rubberized Impact Flooring"],
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=1600",
    location: "Amanora Club Main Floor",
  },
  {
    num: "02",
    title: "CARDIOVASCULAR SUITE",
    tag: "ENDURANCE & INTERVALS",
    description:
      "Modern treadmills, stationary bicycles, and cardiovascular conditioning equipment overlooking the Amanora grounds.",
    specs: ["Commercial Treadmills", "Stationary Spin Cycles", "Interval Conditioning", "Heart-Rate Tracking Friendly"],
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=1600",
    location: "Amanora Club Cardio Wing",
  },
  {
    num: "03",
    title: "FREE WEIGHTS & BENCH ARENA",
    tag: "FREE WEIGHTS & DUMBBELLS",
    description:
      "Complete selection of precision dumbbells, flat and incline Olympic benches, and weight racks for compound movements.",
    specs: ["Dumbbell Sets up to 40kg+", "Adjustable & Incline Benches", "Olympic Barbells", "Dedicated Mirror Walls"],
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1600",
    location: "Amanora Club Free Weight Floor",
  },
  {
    num: "04",
    title: "FUNCTIONAL & MOBILITY FLOOR",
    tag: "CORE & FUNCTIONAL MOVEMENT",
    description:
      "Spacious open floor designated for athletic agility, bodyweight drills, core stabilization, and post-workout mobility.",
    specs: ["Mobility & Stretching Zone", "Functional Agility Space", "Kettlebells & Resistance Bands", "Clean Member Changing Access"],
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=1600",
    location: "Amanora Club Functional Arena",
  },
];

export default function CinematicFacilitiesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll progress through 200vh pinned facilities stage
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
  const rawWatermarkY = useTransform(smoothProgress, [0, 1], ["-8%", "16%"]);
  const watermarkY = shouldReduceMotion ? "0%" : rawWatermarkY;

  // --- FACILITY ZONE OPACITIES & PARALLAX TRANSFORMS ---
  // Zone 1: 0% -> 28%
  const z1Opacity = useTransform(smoothProgress, [0, 0.22, 0.3], [1, 1, 0]);
  const z1Y = useTransform(smoothProgress, [0, 0.3], [0, -30]);
  const z1Scale = useTransform(smoothProgress, [0, 0.3], [1, 1.08]);

  // Zone 2: 24% -> 54%
  const z2Opacity = useTransform(smoothProgress, [0.24, 0.32, 0.48, 0.56], [0, 1, 1, 0]);
  const z2Y = useTransform(smoothProgress, [0.24, 0.32, 0.56], [30, 0, -30]);
  const z2Scale = useTransform(smoothProgress, [0.24, 0.56], [1.08, 1]);

  // Zone 3: 50% -> 78%
  const z3Opacity = useTransform(smoothProgress, [0.5, 0.58, 0.72, 0.8], [0, 1, 1, 0]);
  const z3Y = useTransform(smoothProgress, [0.5, 0.58, 0.8], [30, 0, -30]);
  const z3Scale = useTransform(smoothProgress, [0.5, 0.8], [1.08, 1]);

  // Zone 4: 74% -> 100%
  const z4Opacity = useTransform(smoothProgress, [0.74, 0.82, 1], [0, 1, 1]);
  const z4Y = useTransform(smoothProgress, [0.74, 0.82, 1], [30, 0, 0]);
  const z4Scale = useTransform(smoothProgress, [0.74, 1], [1.08, 1]);

  // Bottom Membership Handoff Cue (Illuminates in the final 15% of scroll)
  const handoffOpacity = useTransform(smoothProgress, [0.82, 0.94], [0, 1]);
  const handoffY = useTransform(smoothProgress, [0.82, 0.94], [20, 0]);

  const zoneStates = [
    { opacity: shouldReduceMotion ? 1 : z1Opacity, y: shouldReduceMotion ? 0 : z1Y, scale: shouldReduceMotion ? 1 : z1Scale },
    { opacity: shouldReduceMotion ? 0 : z2Opacity, y: shouldReduceMotion ? 0 : z2Y, scale: shouldReduceMotion ? 1 : z2Scale },
    { opacity: shouldReduceMotion ? 0 : z3Opacity, y: shouldReduceMotion ? 0 : z3Y, scale: shouldReduceMotion ? 1 : z3Scale },
    { opacity: shouldReduceMotion ? 0 : z4Opacity, y: shouldReduceMotion ? 0 : z4Y, scale: shouldReduceMotion ? 1 : z4Scale },
  ];

  return (
    <section
      id="facilities"
      ref={containerRef}
      className="relative h-[200vh] bg-[#050B18] border-t border-white/10 hidden lg:block overflow-clip"
    >
      {/* Sticky Viewport Stage */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between pt-20 pb-8 px-8 xl:px-12 overflow-hidden select-none">
        
        {/* Giant Background Watermark */}
        <motion.div
          style={{ y: watermarkY }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden opacity-[0.03]"
        >
          <span className="font-heading font-black text-[20vw] leading-none uppercase tracking-tighter text-white whitespace-nowrap">
            FACILITIES
          </span>
        </motion.div>

        {/* Ambient Subtle Lighting Spheres */}
        <div className="absolute top-1/3 right-1/4 w-[550px] h-[550px] bg-[#0066FF]/10 blur-[140px] rounded-full pointer-events-none z-0" />
        <div className="absolute bottom-1/4 left-1/4 w-[450px] h-[450px] bg-[#00C6FF]/08 blur-[130px] rounded-full pointer-events-none z-0" />
        <div className="absolute inset-0 z-0 opacity-15 pointer-events-none bg-[radial-gradient(#00C6FF_1px,transparent_1px)] [background-size:28px_28px]" />

        {/* TOP SECTION HEADER: PROGRESS TRACKER & BREADCRUMB */}
        <div className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between pt-2 border-b border-white/10 pb-3">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-[#00C6FF] uppercase tracking-[0.25em]">
              02 / TRAINING FLOORS &amp; SPACES
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
              AMANORA CLUB (FERN HOTEL) • PUNE
            </span>
          </div>

          {/* Dynamic Scroll Progress Indicator */}
          <div className="flex items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1730] border border-[#00C6FF]/30 text-xs font-mono font-bold text-white shadow-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00C6FF] animate-pulse" />
              <span>ZONE TOUR</span>
              <span className="text-zinc-500">•</span>
              <span className="text-[#00C6FF]">4 FLOORS</span>
            </div>
          </div>
        </div>

        {/* MAIN STAGE: PINNED 4-ZONE CHOREOGRAPHY */}
        <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-2 flex-1 flex items-center">
          <div className="w-full relative h-[520px] xl:h-[560px]">
            {FACILITY_ZONES.map((zone, index) => {
              const state = zoneStates[index];
              return (
                <motion.div
                  key={zone.num}
                  style={{
                    opacity: state.opacity,
                    y: state.y,
                  }}
                  className={`absolute inset-0 grid grid-cols-12 gap-8 items-center ${
                    index !== 0 && shouldReduceMotion ? "hidden" : ""
                  }`}
                >
                  {/* LEFT: Cinematic Oversized Facility Visual (7 Cols) */}
                  <div className="col-span-7 relative h-[480px] xl:h-[520px] rounded-3xl overflow-hidden border border-[#00C6FF]/25 shadow-2xl bg-[#0D1730] group">
                    <motion.div
                      style={{
                        scale: state.scale,
                        transformOrigin: "center center",
                      }}
                      className="w-full h-full relative will-change-transform"
                    >
                      <Image
                        src={zone.image}
                        alt={zone.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-95 contrast-105"
                      />
                    </motion.div>

                    <div className="absolute inset-0 bg-gradient-to-t from-[#050B18]/90 via-[#050B18]/25 to-transparent pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#050B18]/40 via-transparent to-transparent pointer-events-none" />

                    {/* Top Location Tag */}
                    <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-[#091124]/90 border border-[#00C6FF]/35 backdrop-blur-md flex items-center gap-2 pointer-events-none z-10 shadow-xl">
                      <span className="w-2 h-2 rounded-full bg-[#00C6FF] shadow-[0_0_10px_#00C6FF]" />
                      <span className="text-[10px] font-mono font-bold text-white uppercase tracking-widest">
                        {zone.location}
                      </span>
                    </div>

                    {/* Bottom Numeric Identifier */}
                    <div className="absolute bottom-6 left-6 flex items-baseline gap-3 pointer-events-none z-10">
                      <span className="font-heading font-black text-4xl text-white/90">
                        {zone.num}
                      </span>
                      <span className="text-[10px] font-mono text-[#00C6FF] font-bold uppercase tracking-widest">
                        ALPHA FITNESS TRAINING SUITE
                      </span>
                    </div>
                  </div>

                  {/* RIGHT: High-Impact Editorial Details & Feature Specs (5 Cols) */}
                  <div className="col-span-5 flex flex-col justify-between h-[480px] xl:h-[520px] p-8 xl:p-10 rounded-3xl bg-[#0D1730] border border-[#00C6FF]/20 shadow-2xl space-y-6">
                    
                    <div className="space-y-4">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0066FF]/15 border border-[#00C6FF]/35 text-[#00C6FF] text-[10px] font-mono font-bold uppercase tracking-wider">
                        <Sparkles className="w-3 h-3 text-[#00C6FF]" />
                        <span>{zone.tag}</span>
                      </div>

                      <h3 className="text-3xl xl:text-4xl font-heading font-black text-white uppercase tracking-tight leading-tight drop-shadow-md">
                        {zone.title}
                      </h3>

                      <p className="text-xs xl:text-sm text-zinc-300 font-sans leading-relaxed">
                        {zone.description}
                      </p>

                      {/* Equipment / Space Highlights */}
                      <div className="pt-2 space-y-2 border-t border-white/10">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 font-bold block mb-1">
                          Space Architecture &amp; Equipment
                        </span>
                        {zone.specs.map((spec) => (
                          <div key={spec} className="flex items-center gap-2 text-xs text-zinc-300 font-sans">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#00C6FF] flex-shrink-0" />
                            <span>{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Section Action */}
                    <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                      <a
                        href="#membership"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#0066FF] to-[#00C6FF] hover:brightness-110 text-white font-heading font-black text-xs uppercase tracking-wider shadow-lg shadow-[#0066FF]/35 hover:shadow-[#00C6FF]/55 transition-all transform hover:-translate-y-0.5 active:scale-[0.98] cursor-pointer"
                      >
                        <span>Choose Pass For This Zone</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                      <span className="text-xs font-mono text-zinc-400 font-bold">{zone.num} / 04</span>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* BOTTOM METADATA & MEMBERSHIP HANDOFF CUE */}
        <div className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between text-xs font-mono text-zinc-400 pt-3 border-t border-white/10">
          <div className="flex items-center gap-2 text-[11px] text-zinc-400">
            <span className="text-[#00C6FF]">❖</span>
            <span>EXPERIENCED THE SPACES</span>
          </div>

          {/* Pulsing Handoff Cue */}
          <motion.div
            style={{
              opacity: shouldReduceMotion ? 1 : handoffOpacity,
              y: shouldReduceMotion ? 0 : handoffY,
            }}
            className="flex items-center gap-2 text-white font-bold"
          >
            <span className="text-zinc-400">NEXT:</span>
            <a
              href="#membership"
              className="text-[#00C6FF] hover:text-white uppercase tracking-wider underline underline-offset-4 flex items-center gap-1 transition-colors"
            >
              <span>SELECT YOUR MEMBERSHIP PASS ↓</span>
            </a>
          </motion.div>

          <div className="text-[11px] text-zinc-400">
            AMANORA CLUB, PUNE
          </div>
        </div>

      </div>
    </section>
  );
}
