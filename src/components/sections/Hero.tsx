"use client";

import { useRef } from "react";
import { MapPin, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "framer-motion";
import { CLUB_LOCATION_INFO } from "@/data/demo-content";

interface HeroProps {
  onOpenCheckout: () => void;
}

export default function Hero({ onOpenCheckout }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll Progress across the pinned hero section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Physics-based spring smoothing for natural, cinematic deceleration
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Cinematic Video Zoom: progressive scale from 1.00 -> 1.32
  const rawVideoScale = useTransform(smoothProgress, [0, 0.45, 0.85, 1], [1, 1.12, 1.25, 1.32]);
  const videoScale = shouldReduceMotion ? 1 : rawVideoScale;

  // Subtle Camera Movement (Push-in & subtle focus centering)
  const rawVideoY = useTransform(smoothProgress, [0, 1], ["0%", "-3.5%"]);
  const videoY = shouldReduceMotion ? "0%" : rawVideoY;

  const rawVideoX = useTransform(smoothProgress, [0, 1], ["0%", "-1.5%"]);
  const videoX = shouldReduceMotion ? "0%" : rawVideoX;

  // Editorial Text Panel subtle transition as user scrolls into next section
  const rawTextOpacity = useTransform(smoothProgress, [0, 0.65, 0.92, 1], [1, 1, 0.45, 0.2]);
  const textOpacity = shouldReduceMotion ? 1 : rawTextOpacity;

  const rawTextY = useTransform(smoothProgress, [0, 1], [0, -22]);
  const textY = shouldReduceMotion ? 0 : rawTextY;

  // Bottom metadata strip opacity transition
  const rawMetaOpacity = useTransform(smoothProgress, [0, 0.55, 0.9], [1, 0.85, 0.2]);
  const metaOpacity = shouldReduceMotion ? 1 : rawMetaOpacity;

  return (
    <section ref={containerRef} className="relative h-[180vh] sm:h-[200vh] bg-[#09090B]">
      {/* Sticky Hero Viewport Canvas */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between pt-24 pb-8 overflow-hidden">
        {/* Background Subtle Texture */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:24px_24px]" />

        {/* Main Split Hero Canvas */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-4 sm:py-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* LEFT / DOMINANT VISUAL AREA (60% width on desktop) */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 relative order-2 lg:order-1"
            >
              <div className="relative h-[400px] sm:h-[520px] lg:h-[540px] w-full rounded-3xl overflow-hidden border border-white/15 shadow-2xl group bg-zinc-950">
                {/* Scroll-Driven Cinematic Zoom Container */}
                <motion.div
                  style={{
                    scale: videoScale,
                    x: videoX,
                    y: videoY,
                    transformOrigin: "center center",
                  }}
                  className="w-full h-full relative will-change-transform"
                >
                  {/* High Visibility Real Gym Video */}
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1800"
                    className="w-full h-full object-cover object-center brightness-95 contrast-105"
                    aria-hidden="true"
                  >
                    <source src="/videos/alpha-fitness-hero.mp4" type="video/mp4" />
                  </video>
                </motion.div>
                
                {/* Crisp Subtle Gradient for Depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090B]/90 via-transparent to-transparent opacity-80 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#09090B]/40 via-transparent to-transparent pointer-events-none" />

                {/* Floating Verified Location Tag */}
                <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-[#111115]/90 border border-white/20 backdrop-blur-md flex items-center gap-2 pointer-events-none z-10">
                  <span className="w-2 h-2 rounded-full bg-[#E50914] animate-pulse" />
                  <span className="text-[10px] font-mono font-bold text-white uppercase tracking-widest">
                    Amanora Club • Hadapsar, Pune
                  </span>
                </div>

                {/* Bottom Image Caption Overlay */}
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between pointer-events-none z-10">
                  <div>
                    <span className="text-[10px] font-mono text-[#E50914] uppercase tracking-widest font-bold block mb-1">
                      Training Environment
                    </span>
                    <h3 className="text-xl sm:text-2xl font-heading font-black text-white uppercase leading-tight drop-shadow-md">
                      Strength Floor & Free Weights
                    </h3>
                  </div>
                  <div className="hidden sm:flex items-center gap-1.5 text-xs font-mono text-zinc-300 bg-black/60 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-sm">
                    <span>Explore Spaces</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT / STRUCTURED TEXT AREA (40% width on desktop) */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              style={{
                opacity: textOpacity,
                y: textY,
              }}
              className="lg:col-span-5 space-y-6 order-1 lg:order-2"
            >
              {/* Editorial Metadata Header */}
              <div className="flex items-center gap-2.5 text-xs font-heading font-black uppercase tracking-[0.25em] text-[#E50914]">
                <span>❖</span>
                <span>ALPHA FITNESS</span>
                <span className="text-zinc-600">•</span>
                <span className="text-zinc-400">EST. PUNE</span>
              </div>

              {/* Asymmetric Bold Headline */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white uppercase font-heading tracking-tight leading-[0.92]">
                TRAIN.<br />
                TRANSFORM.<br />
                <span className="text-[#E50914]">BELONG.</span>
              </h1>

              {/* Short Factual Supporting Text */}
              <p className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed">
                Dedicated strength training space, free weights, cardio equipment, and streamlined digital membership access inside Amanora Club, Hadapsar, Pune.
              </p>

              {/* Clear Action CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <button
                  onClick={onOpenCheckout}
                  className="px-8 py-4 rounded-full bg-[#E50914] hover:bg-[#FF2424] text-white font-heading font-black text-xs uppercase tracking-wider shadow-xl shadow-[#E50914]/35 hover:shadow-[#E50914]/55 transition-all transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
                >
                  <span>Join Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="#membership"
                  className="px-6 py-4 rounded-full bg-zinc-900/90 hover:bg-zinc-800 border border-white/10 hover:border-zinc-500 text-zinc-200 font-heading font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2"
                >
                  <span>View Plans</span>
                </a>
              </div>

              {/* Location Line Indicator */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-zinc-400 font-sans">
                <MapPin className="w-3.5 h-3.5 text-[#E50914] shrink-0" />
                <span>{CLUB_LOCATION_INFO.fullAddress}</span>
              </div>
            </motion.div>

          </div>
        </div>

        {/* BOTTOM / EDITORIAL METADATA STRIP */}
        <motion.div
          style={{ opacity: metaOpacity }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
        >
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-zinc-400">
            {/* Editorial Three Pillars Navigation */}
            <div className="flex items-center gap-6 text-[11px] uppercase tracking-wider">
              <span className="text-zinc-200"><strong className="text-[#E50914]">01</strong> — TRAIN</span>
              <span className="text-zinc-200"><strong className="text-[#E50914]">02</strong> — TRANSFORM</span>
              <span className="text-zinc-200"><strong className="text-[#E50914]">03</strong> — BELONG</span>
            </div>

            {/* Slide Indicator */}
            <div className="flex items-center gap-3">
              <span className="font-bold text-zinc-300">01 / 03</span>
              <div className="flex items-center gap-1.5">
                <button
                  aria-label="Previous Slide"
                  className="w-7 h-7 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-500 transition-colors"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  aria-label="Next Slide"
                  className="w-7 h-7 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-500 transition-colors"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
