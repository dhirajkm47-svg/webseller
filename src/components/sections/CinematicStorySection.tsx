"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowRight, Sparkles, ShieldCheck } from "lucide-react";
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "framer-motion";

interface CinematicStorySectionProps {
  onOpenCheckout: () => void;
}

export default function CinematicStorySection({ onOpenCheckout }: CinematicStorySectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll Progress across the 160vh pinned storytelling canvas
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Physics-based spring smoothing for fluid organic deceleration
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 95,
    damping: 28,
    restDelta: 0.001,
  });

  // --- 1. AMBIENT BACKDROP PARALLAX ---
  const rawBackdropY = useTransform(smoothProgress, [0, 1], ["-6%", "14%"]);
  const backdropY = shouldReduceMotion ? "0%" : rawBackdropY;

  // --- 2. LEFT HERO PHOTOGRAPH PARALLAX & SCALE ---
  // Gentle push-in and vertical parallax floating
  const rawImageScale = useTransform(smoothProgress, [0, 0.5, 1], [1.08, 1.02, 1.0]);
  const imageScale = shouldReduceMotion ? 1 : rawImageScale;

  const rawLeftCardY = useTransform(smoothProgress, [0, 0.5, 1], [30, 0, -20]);
  const leftCardY = shouldReduceMotion ? 0 : rawLeftCardY;

  const rawLeftOverlayOpacity = useTransform(smoothProgress, [0, 0.2, 0.6], [0.4, 0.9, 1]);
  const leftOverlayOpacity = shouldReduceMotion ? 1 : rawLeftOverlayOpacity;

  // --- 3. RIGHT COLUMN (SUPPORTING PHOTO + EDITORIAL BLOCK) ---
  // Subtle layered depth (secondary photo enters faster than editorial card)
  const rawRightPhotoY = useTransform(smoothProgress, [0, 0.5, 1], [45, 0, -25]);
  const rightPhotoY = shouldReduceMotion ? 0 : rawRightPhotoY;

  const rawRightPhotoScale = useTransform(smoothProgress, [0, 0.6, 1], [1.1, 1.03, 1.0]);
  const rightPhotoScale = shouldReduceMotion ? 1 : rawRightPhotoScale;

  const rawStoryCardY = useTransform(smoothProgress, [0.1, 0.55, 1], [40, 0, -15]);
  const storyCardY = shouldReduceMotion ? 0 : rawStoryCardY;

  const rawStoryCardOpacity = useTransform(smoothProgress, [0, 0.25, 0.6], [0.3, 0.85, 1]);
  const storyCardOpacity = shouldReduceMotion ? 1 : rawStoryCardOpacity;

  // --- 4. SECTION HEADER & ACCENT REVEAL ---
  const rawHeaderOpacity = useTransform(smoothProgress, [0, 0.2], [0.5, 1]);
  const headerOpacity = shouldReduceMotion ? 1 : rawHeaderOpacity;

  return (
    <section
      id="editorial-story"
      ref={containerRef}
      className="relative h-[160vh] bg-[#091124] border-y border-white/10 hidden lg:block overflow-clip"
    >
      {/* Sticky Viewport Container */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between pt-20 pb-8 px-8 xl:px-12 overflow-hidden select-none">
        
        {/* Background Giant Architectural Watermark */}
        <motion.div
          style={{ y: backdropY }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden opacity-[0.03]"
        >
          <span className="font-heading font-black text-[20vw] leading-none uppercase tracking-tighter text-white whitespace-nowrap">
            PHILOSOPHY
          </span>
        </motion.div>

        {/* Ambient Subtle Blue Glow Spheres */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#0066FF]/10 blur-[130px] rounded-full pointer-events-none z-0" />
        <div className="absolute bottom-1/3 right-1/4 w-[450px] h-[450px] bg-[#00C6FF]/08 blur-[120px] rounded-full pointer-events-none z-0" />
        <div className="absolute inset-0 z-0 opacity-15 pointer-events-none bg-[radial-gradient(#00C6FF_1px,transparent_1px)] [background-size:28px_28px]" />

        {/* TOP SECTION HEADER (Floating Breadcrumb & Intent) */}
        <motion.div
          style={{ opacity: headerOpacity }}
          className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between pt-2 border-b border-white/10 pb-3"
        >
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-[#00C6FF] uppercase tracking-[0.25em]">
              01 / DISCIPLINE &amp; SPACES
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
              AMANORA CLUB • HADAPSAR
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0066FF]/10 border border-[#00C6FF]/30 text-[#00C6FF] text-[10px] font-mono font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>FACILITY PHILOSOPHY</span>
          </div>
        </motion.div>

        {/* CENTER ASYMMETRIC 2x2 CINEMATIC MOSAIC */}
        <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-2">
          <div className="grid grid-cols-12 gap-8 items-stretch">
            
            {/* LEFT: Dominant High-Impact Vertical Photograph (7 Cols) */}
            <motion.div
              style={{
                y: leftCardY,
              }}
              className="col-span-7 relative rounded-3xl overflow-hidden border border-[#00C6FF]/25 shadow-2xl min-h-[500px] xl:min-h-[540px] group bg-[#0D1730]"
            >
              <motion.div
                style={{
                  scale: imageScale,
                  transformOrigin: "center center",
                }}
                className="w-full h-full relative will-change-transform"
              >
                <Image
                  src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=1600"
                  alt="Alpha Fitness Amanora Training Area"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                />
              </motion.div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#050B18] via-[#050B18]/35 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#050B18]/40 via-transparent to-transparent pointer-events-none" />
              
              {/* Overlay Headline on Left Photo */}
              <motion.div
                style={{ opacity: leftOverlayOpacity }}
                className="absolute bottom-8 left-8 right-8 space-y-2 pointer-events-none"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#091124]/90 border border-[#00C6FF]/30 backdrop-blur-md text-[10px] font-mono font-bold uppercase tracking-widest text-[#00C6FF] mb-1 shadow-lg">
                  <span>Pillar 01 — Training Arena</span>
                </div>
                <h3 className="text-3xl xl:text-4xl font-heading font-black text-white uppercase leading-tight drop-shadow-lg">
                  BUILT FOR DAILY DISCIPLINE
                </h3>
                <p className="text-xs xl:text-sm text-zinc-300 font-sans max-w-lg leading-relaxed">
                  Spacious floor area dedicated to progressive strength training, barbell work, and functional conditioning inside Amanora Club.
                </p>
              </motion.div>
            </motion.div>

            {/* RIGHT: Stacked Secondary Photograph + Editorial Typography (5 Cols) */}
            <div className="col-span-5 flex flex-col justify-between gap-6">
              
              {/* Top: Supporting Cardio Space Photo */}
              <motion.div
                style={{
                  y: rightPhotoY,
                }}
                className="relative h-56 xl:h-60 w-full rounded-3xl overflow-hidden border border-white/10 shadow-xl group bg-[#0D1730]"
              >
                <motion.div
                  style={{
                    scale: rightPhotoScale,
                    transformOrigin: "center center",
                  }}
                  className="w-full h-full relative will-change-transform"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&q=80&w=1000"
                    alt="Cardio & Conditioning Space"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                  />
                </motion.div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#091124] via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between pointer-events-none">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#00C6FF] font-bold block">
                      Pillar 02
                    </span>
                    <h4 className="text-sm font-heading font-black text-white uppercase">
                      Cardio &amp; Mobility Space
                    </h4>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-400">Amanora Hadapsar</span>
                </div>
              </motion.div>

              {/* Bottom: Refined Editorial Typography & Membership Action */}
              <motion.div
                style={{
                  y: storyCardY,
                  opacity: storyCardOpacity,
                }}
                className="p-7 xl:p-8 rounded-3xl bg-[#0D1730] border border-[#00C6FF]/25 flex flex-col justify-between flex-1 space-y-5 shadow-2xl"
              >
                <div className="space-y-2.5">
                  <div className="inline-flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-[#00C6FF]">
                    <Sparkles className="w-3.5 h-3.5 text-[#00C6FF]" />
                    <span>COMMITTED TO PROGRESS</span>
                  </div>
                  <h3 className="text-2xl xl:text-3xl font-heading font-black text-white uppercase tracking-tight leading-tight">
                    PURPOSEFUL SPACES FOR REAL RESULTS
                  </h3>
                  <p className="text-xs xl:text-sm text-zinc-300 font-sans leading-relaxed">
                    Alpha Fitness operates as a dedicated fitness facility inside Amanora Club, Hadapsar, Pune. Every member gains access to well-maintained workout spaces, free weights, and instant digital check-in.
                  </p>
                </div>

                <div className="pt-1">
                  <button
                    onClick={onOpenCheckout}
                    className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-[#0066FF] to-[#00C6FF] hover:brightness-110 text-white font-heading font-black text-xs uppercase tracking-wider shadow-lg shadow-[#0066FF]/35 hover:shadow-[#00C6FF]/55 transition-all transform hover:-translate-y-0.5 active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Explore Membership Passes</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>

            </div>

          </div>
        </div>

        {/* BOTTOM SECTION PROGRESS & HANDOFF HINT */}
        <div className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between text-xs font-mono text-zinc-400 pt-3 border-t border-white/10">
          <div className="flex items-center gap-2 text-[11px] text-zinc-400">
            <span className="text-[#00C6FF]">❖</span>
            <span>STRUCTURED STRENGTH &amp; ENDURANCE TRAINING</span>
          </div>

          <div className="text-[11px] text-zinc-400">
            NEXT: <span className="text-zinc-200 font-bold uppercase">CLUB FACILITIES &amp; TRAINING FLOORS ↓</span>
          </div>
        </div>

      </div>
    </section>
  );
}
