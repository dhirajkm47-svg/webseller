"use client";

import Image from "next/image";
import { ArrowRight, MapPin, Sparkles, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { CLUB_LOCATION_INFO } from "@/data/demo-content";

interface MobileFinalCTASectionProps {
  onOpenCheckout: () => void;
}

export default function MobileFinalCTASection({ onOpenCheckout }: MobileFinalCTASectionProps) {
  return (
    <section id="final-cta-mobile" className="py-16 sm:py-20 bg-[#050B18] border-t border-white/10 relative block lg:hidden">
      {/* Ambient Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-[#0066FF]/10 blur-[90px] rounded-full pointer-events-none" />

      <div className="max-w-xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Mobile Final Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl overflow-hidden border border-[#00C6FF]/30 bg-[#0D1730] shadow-xl relative p-6 sm:p-8 space-y-6"
        >
          {/* Background Image Layer */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=1000"
              alt="Alpha Fitness Amanora Final"
              fill
              className="object-cover opacity-15"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1730] via-[#0D1730]/90 to-[#0D1730]/70" />
          </div>

          <div className="relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0066FF]/20 border border-[#00C6FF]/40 text-[#00C6FF] text-[10px] font-mono font-bold uppercase tracking-wider">
              <Sparkles className="w-3 h-3 text-[#00C6FF]" />
              <span>04 / FINAL STANDARD</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-heading font-black text-white uppercase tracking-tight leading-tight">
              ELEVATE YOUR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#00C6FF]">
                FITNESS STANDARDS
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed">
              Structured strength routines, cardio conditioning, and organized fitness spaces inside Amanora Club, Hadapsar, Pune.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 space-y-3">
              <button
                onClick={onOpenCheckout}
                className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-[#0066FF] to-[#00C6FF] hover:brightness-110 text-white font-heading font-black text-xs uppercase tracking-wider shadow-lg shadow-[#0066FF]/40 transition-all flex items-center justify-center gap-2 active:scale-[0.98] cursor-pointer"
              >
                <span>Start Your Membership</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#location"
                className="w-full py-3 px-6 rounded-full bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/15 font-heading font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MapPin className="w-3.5 h-3.5 text-[#00C6FF]" />
                <span>Visit Club Location</span>
              </a>
            </div>

            {/* Location Quick Strip */}
            <div className="pt-4 border-t border-white/10 space-y-2 text-xs font-sans">
              <div className="flex items-center gap-2 text-zinc-300 font-medium">
                <Shield className="w-3.5 h-3.5 text-[#00C6FF] flex-shrink-0" />
                <span>Amanora Club (Fern Hotel), Hadapsar, Pune</span>
              </div>
              <p className="text-[11px] text-zinc-400 font-mono">
                Hours: {CLUB_LOCATION_INFO.operatingHours.weekdays}
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
