"use client";

import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface EditorialStoryProps {
  onOpenCheckout: () => void;
}

export default function EditorialStorySection({ onOpenCheckout }: EditorialStoryProps) {
  return (
    <section id="editorial-story" className="py-24 bg-[#091124] border-y border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Asymmetric 2x2 Editorial Photo & Typography Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT: Massive Vertical Gym Photograph (7 of 12 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 relative rounded-3xl overflow-hidden border border-[#00C6FF]/25 shadow-2xl min-h-[480px] lg:min-h-[580px] group bg-[#0D1730]"
          >
            <Image
              src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=1600"
              alt="Alpha Fitness Amanora Training Area"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050B18] via-[#050B18]/30 to-transparent" />
            
            {/* Overlay Headline on Left Photo */}
            <div className="absolute bottom-8 left-8 right-8 space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#00C6FF] font-bold block">
                Pillar 01 — Training Arena
              </span>
              <h3 className="text-2xl sm:text-4xl font-heading font-black text-white uppercase leading-tight">
                BUILT FOR DAILY DISCIPLINE
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 font-sans max-w-lg">
                Spacious floor area for strength training, functional conditioning, and barbell routines at Amanora Club.
              </p>
            </div>
          </motion.div>

          {/* RIGHT: Stacked Smaller Photo + Editorial Typography (5 of 12 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            
            {/* Top: Smaller Supporting Gym Photo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative h-60 sm:h-64 w-full rounded-3xl overflow-hidden border border-white/10 shadow-xl group bg-[#0D1730]"
            >
              <Image
                src="https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&q=80&w=1000"
                alt="Cardio & Conditioning Space"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#091124] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase text-[#00C6FF] font-bold block">
                    Pillar 02
                  </span>
                  <h4 className="text-sm font-heading font-black text-white uppercase">
                    Cardio & Mobility Space
                  </h4>
                </div>
                <span className="text-[10px] font-mono text-zinc-400">Amanora Hadapsar</span>
              </div>
            </motion.div>

            {/* Bottom: Editorial Typography Block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="p-8 rounded-3xl bg-[#0D1730] border border-[#00C6FF]/20 flex flex-col justify-between flex-1 space-y-6 shadow-xl"
            >
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-[#00C6FF]">
                  <Sparkles className="w-3 h-3 text-[#00C6FF]" />
                  <span>COMMITTED TO PROGRESS</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-heading font-black text-white uppercase tracking-tight leading-tight">
                  PURPOSEFUL SPACES FOR REAL RESULTS
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed">
                  Alpha Fitness operates as a dedicated fitness facility inside Amanora Club, Hadapsar, Pune. Every member gains access to well-maintained workout spaces, free weights, and instant digital check-in.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenCheckout}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-[#0066FF] to-[#00C6FF] hover:brightness-110 text-white font-heading font-black text-xs uppercase tracking-wider shadow-lg shadow-[#0066FF]/35 hover:shadow-[#00C6FF]/55 transition-all transform hover:-translate-y-0.5 active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Explore Membership</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
