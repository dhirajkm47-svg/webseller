"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface AtmosphereBannerProps {
  onOpenCheckout: () => void;
}

export default function AtmosphereBanner({ onOpenCheckout }: AtmosphereBannerProps) {
  return (
    <section className="relative py-28 bg-[#050B18] border-y border-white/10 overflow-hidden">
      {/* Full-Bleed Atmospheric Background Photography */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=2600"
          alt="Alpha Fitness Amanora Atmosphere"
          fill
          className="object-cover object-center opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050B18] via-[#050B18]/80 to-[#050B18]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0066FF]/15 border border-[#00C6FF]/35 text-[#00C6FF] text-xs font-black uppercase tracking-[0.25em] font-heading"
        >
          AMANORA CLUB • HADAPSAR
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase font-heading tracking-tight max-w-4xl mx-auto leading-tight"
        >
          THE STANDARD OF TRAINING AT <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#00C6FF]">AMANORA</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-zinc-300 text-sm sm:text-base max-w-2xl mx-auto font-sans leading-relaxed"
        >
          Dedicated fitness spaces, quality training equipment, and instant digital membership pass generation for members in Pune.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="pt-4"
        >
          <button
            onClick={onOpenCheckout}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-[#0066FF] to-[#00C6FF] hover:brightness-110 text-white font-heading font-black text-xs uppercase tracking-wider shadow-xl shadow-[#0066FF]/40 hover:shadow-[#00C6FF]/60 transition-all transform hover:-translate-y-0.5 active:scale-[0.98] inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Start Your Membership</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
