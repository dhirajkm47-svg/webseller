"use client";

import Image from "next/image";
import { ArrowRight, Sparkles, ShieldCheck } from "lucide-react";

interface MobileStoryProps {
  onOpenCheckout: () => void;
}

export default function MobileStorySection({ onOpenCheckout }: MobileStoryProps) {
  return (
    <section id="editorial-story" className="py-16 sm:py-20 bg-[#091124] border-y border-white/10 relative lg:hidden overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header Tag */}
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-white/10">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#00C6FF] uppercase tracking-wider">
            <span>01 / PHILOSOPHY</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400">AMANORA CLUB</span>
          </div>
          <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#0066FF]/10 border border-[#00C6FF]/30 text-[#00C6FF] text-[9px] font-mono font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3 h-3" />
            <span>FACILITY CARE</span>
          </div>
        </div>

        {/* Stacked Vertical Narrative Flow */}
        <div className="space-y-6">
          
          {/* Main Visual Arena Card */}
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#00C6FF]/25 shadow-2xl h-[360px] sm:h-[440px] bg-[#0D1730]">
            <Image
              src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=1600"
              alt="Alpha Fitness Amanora Training Area"
              fill
              className="object-cover brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050B18] via-[#050B18]/30 to-transparent pointer-events-none" />
            
            <div className="absolute bottom-6 left-6 right-6 space-y-1.5 pointer-events-none">
              <span className="text-[9px] font-mono uppercase tracking-widest text-[#00C6FF] font-bold block">
                Pillar 01 — Training Arena
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-black text-white uppercase leading-tight">
                BUILT FOR DAILY DISCIPLINE
              </h3>
              <p className="text-xs text-zinc-300 font-sans max-w-lg leading-relaxed">
                Spacious floor area dedicated to progressive strength training, barbell routines, and functional conditioning at Amanora Club.
              </p>
            </div>
          </div>

          {/* Secondary Cardio Photo & Story Text */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            
            {/* Supporting Photo */}
            <div className="relative h-48 sm:h-auto rounded-2xl overflow-hidden border border-white/10 shadow-xl bg-[#0D1730]">
              <Image
                src="https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&q=80&w=1000"
                alt="Cardio & Conditioning Space"
                fill
                className="object-cover brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#091124] via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between pointer-events-none">
                <span className="text-[10px] font-mono text-[#00C6FF] font-bold uppercase">Pillar 02 — Cardio</span>
                <span className="text-[9px] font-mono text-zinc-400">Amanora Pune</span>
              </div>
            </div>

            {/* Typography Content Card */}
            <div className="p-6 rounded-2xl bg-[#0D1730] border border-[#00C6FF]/20 flex flex-col justify-between space-y-4 shadow-xl">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 text-[9px] font-mono font-bold uppercase tracking-widest text-[#00C6FF]">
                  <Sparkles className="w-3 h-3 text-[#00C6FF]" />
                  <span>COMMITTED TO PROGRESS</span>
                </div>
                <h4 className="text-lg sm:text-xl font-heading font-black text-white uppercase tracking-tight leading-snug">
                  PURPOSEFUL SPACES FOR REAL RESULTS
                </h4>
                <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                  Alpha Fitness operates as a dedicated fitness facility inside Amanora Club, Hadapsar, Pune with instant digital check-in.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenCheckout}
                  className="w-full py-3 px-5 rounded-full bg-gradient-to-r from-[#0066FF] to-[#00C6FF] hover:brightness-110 text-white font-heading font-black text-xs uppercase tracking-wider shadow-lg shadow-[#0066FF]/35 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Explore Membership</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
