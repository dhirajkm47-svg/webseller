"use client";

import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

interface HighlightStripProps {
  onOpenCheckout: () => void;
}

export default function HighlightStrip({ onOpenCheckout }: HighlightStripProps) {
  return (
    <section className="py-20 bg-[#101014] border-y border-white/10 relative overflow-hidden">
      {/* Ambient background accent */}
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-72 h-72 bg-[#7A5CFF]/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Bold Headline & Manifesto */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.25em] text-[#7A5CFF] font-heading">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE ALPHA STANDARD</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-black text-white uppercase font-heading tracking-tight leading-[1.05]">
              BUILT FOR<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7A5CFF] to-[#3B82F6]">A STRONGER</span><br />
              YOU
            </h2>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-sans max-w-md">
              A serious workout environment designed for focused training. From strength equipment to open training spaces, every corner inside Amanora Club is built to support your daily fitness routine.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenCheckout}
                className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#7A5CFF] to-[#3B82F6] hover:brightness-110 text-white font-heading font-black text-xs uppercase tracking-wider shadow-lg shadow-[#7A5CFF]/30 hover:shadow-[#7A5CFF]/50 transition-all transform hover:-translate-y-0.5 active:scale-[0.98] flex items-center gap-2 cursor-pointer"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Visual Photo Storytelling Panels */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Photo Panel 1 */}
            <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden border border-white/10 group shadow-xl bg-[#141419]">
              <Image
                src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=1000"
                alt="Strength & Training Floor"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F]/90 via-[#0B0B0F]/30 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#7A5CFF] font-bold block mb-1">
                  Zone 01
                </span>
                <h4 className="text-white font-heading font-black text-base uppercase">
                  Strength & Free Weights
                </h4>
                <p className="text-zinc-400 text-xs mt-0.5">
                  Dumbbells, barbells, and resistance racks.
                </p>
              </div>
            </div>

            {/* Photo Panel 2 */}
            <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden border border-white/10 group shadow-xl bg-[#141419]">
              <Image
                src="https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&q=80&w=1000"
                alt="Cardio & Functional Spaces"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F]/90 via-[#0B0B0F]/30 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#7A5CFF] font-bold block mb-1">
                  Zone 02
                </span>
                <h4 className="text-white font-heading font-black text-base uppercase">
                  Cardio & Mobility Space
                </h4>
                <p className="text-zinc-400 text-xs mt-0.5">
                  Treadmills, bikes, and open mobility area.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
