"use client";

import { MapPin, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { CLUB_LOCATION_INFO } from "@/data/demo-content";

interface MobileHeroProps {
  onOpenCheckout: () => void;
}

export default function MobileHero({ onOpenCheckout }: MobileHeroProps) {
  return (
    <section className="relative bg-[#050B18] pt-28 pb-12 px-4 sm:px-6 lg:hidden overflow-hidden">
      {/* Background Subtle Atmosphere Glow & Texture */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[320px] sm:w-[480px] h-[320px] sm:h-[480px] bg-[#0066FF]/12 blur-[90px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none bg-[radial-gradient(#00C6FF_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative z-10 max-w-2xl mx-auto space-y-6">
        
        {/* TEXT AREA: BADGES & HEADLINE */}
        <div className="space-y-3 sm:space-y-4">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <div className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#0066FF]/15 border border-[#00C6FF]/35 text-[#00C6FF] text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#00C6FF]" />
              <span>AMANORA VERIFIED FACILITY</span>
            </div>
            <div className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#0066FF]/10 border border-[#00C6FF]/20 text-zinc-300 text-[9px] sm:text-[10px] font-mono uppercase tracking-wider">
              <Sparkles className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-[#00C6FF]" />
              <span>HADAPSAR, PUNE</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white uppercase font-heading tracking-tight leading-[0.95] sm:leading-[0.92]">
            TRAIN.<br />
            TRANSFORM.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#00C6FF]">BELONG.</span>
          </h1>

          <p className="text-xs sm:text-sm text-zinc-300 font-sans leading-snug sm:leading-relaxed">
            Dedicated strength training space, free weights, cardio equipment, and streamlined digital membership access inside Amanora Club, Hadapsar, Pune.
          </p>

          {/* Action CTAs */}
          <div className="pt-1 sm:pt-2 flex flex-wrap items-center gap-2.5 sm:gap-3.5">
            <button
              onClick={onOpenCheckout}
              className="px-5 py-2.5 sm:px-8 sm:py-4 rounded-full bg-gradient-to-r from-[#0066FF] to-[#00C6FF] hover:brightness-110 text-white font-heading font-black text-[11px] sm:text-xs uppercase tracking-wider shadow-lg shadow-[#0066FF]/40 hover:shadow-[#00C6FF]/60 transition-all transform active:scale-[0.98] flex items-center gap-1.5 sm:gap-2 cursor-pointer"
            >
              <span>Join Now</span>
              <ArrowRight className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
            </button>

            <a
              href="#membership"
              className="px-4 py-2.5 sm:px-6 sm:py-4 rounded-full bg-[#0066FF]/10 hover:bg-[#0066FF]/20 border border-[#00C6FF]/30 hover:border-[#00C6FF]/60 text-white font-heading font-bold text-[11px] sm:text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 sm:gap-2"
            >
              <span>View Plans</span>
            </a>
          </div>

          <div className="pt-2 sm:pt-3 border-t border-white/10 flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-zinc-400 font-sans truncate">
            <MapPin className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#00C6FF] shrink-0" />
            <span className="truncate">{CLUB_LOCATION_INFO.fullAddress}</span>
          </div>
        </div>

        {/* VISUAL AREA: VIDEO CARD */}
        <div className="relative h-[220px] sm:h-[320px] w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-[#00C6FF]/25 shadow-2xl shadow-black/80 bg-[#0D1730]">
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

          <div className="absolute inset-0 bg-gradient-to-t from-[#050B18]/90 via-transparent to-transparent opacity-80 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050B18]/40 via-transparent to-transparent pointer-events-none" />

          {/* Floating Location Tag */}
          <div className="absolute top-3 left-3 sm:top-5 sm:left-5 px-2.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-[#091124]/90 border border-[#00C6FF]/30 backdrop-blur-md flex items-center gap-1.5 sm:gap-2 pointer-events-none z-10 shadow-lg">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#00C6FF] shadow-[0_0_10px_#00C6FF] animate-pulse" />
            <span className="text-[8px] sm:text-[10px] font-mono font-bold text-white uppercase tracking-wider sm:tracking-widest">
              Amanora Club • Hadapsar, Pune
            </span>
          </div>

          {/* Bottom Caption Overlay */}
          <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 flex items-end justify-between pointer-events-none z-10">
            <div>
              <span className="text-[8px] sm:text-[10px] font-mono text-[#00C6FF] uppercase tracking-wider sm:tracking-widest font-bold block mb-0.5">
                Training Environment
              </span>
              <h3 className="text-sm sm:text-lg font-heading font-black text-white uppercase leading-tight drop-shadow-md">
                Strength Floor & Free Weights
              </h3>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
