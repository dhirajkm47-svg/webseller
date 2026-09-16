"use client";

import Image from "next/image";
import { ArrowRight, Info } from "lucide-react";
import { motion } from "framer-motion";
import { DEMO_FACILITIES } from "@/data/demo-content";

export default function Facilities() {
  return (
    <section id="facilities" className="py-24 bg-[#050B18] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header & Featured Split View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          {/* Left Column: Headline & Description */}
          <div className="lg:col-span-6 space-y-5">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-black uppercase tracking-[0.25em] text-[#00C6FF] font-heading"
            >
              CLUB FACILITIES
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase font-heading leading-[1.02]"
            >
              FITNESS SPACES &<br />TRAINING AREAS
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-sm sm:text-base text-zinc-400 max-w-lg leading-relaxed font-sans"
            >
              Organized workout zones for strength training, cardiovascular exercise, and functional conditioning inside Amanora Club.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="pt-2"
            >
              <a
                href="#membership"
                className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full border border-[#00C6FF]/30 hover:border-[#00C6FF]/60 text-xs font-heading font-black text-white bg-[#0066FF]/10 hover:bg-[#0066FF]/20 transition-all uppercase tracking-wider"
              >
                <span>View Membership Plans</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#00C6FF]" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Featured Showcase Card */}
          <div className="lg:col-span-6">
            <div className="relative h-72 sm:h-80 w-full rounded-3xl overflow-hidden border border-[#00C6FF]/25 shadow-2xl group bg-[#0D1730]">
              <Image
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=1400"
                alt="Alpha Fitness Amanora Club Facility Preview"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050B18]/90 via-[#050B18]/30 to-transparent" />
              
              {/* Motivational Typography Banner Overlay */}
              <div className="absolute bottom-6 right-6 text-right max-w-xs">
                <p className="text-2xl sm:text-3xl font-black text-white uppercase tracking-wider font-heading leading-none drop-shadow-lg">
                  CONSISTENCY<br />OVER<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#00C6FF]">TIME</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 5-Item Panoramic Gallery Card Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 pt-4">
          {DEMO_FACILITIES.map((facility, idx) => (
            <motion.div
              key={facility.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group bg-[#0D1730] border border-white/10 rounded-2xl overflow-hidden hover:border-[#00C6FF]/40 transition-all shadow-xl hover:-translate-y-1"
            >
              <div className="relative h-40 sm:h-48 w-full overflow-hidden">
                <Image
                  src={facility.image}
                  alt={facility.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1730] via-transparent to-transparent" />
              </div>
              <div className="p-4 bg-[#0D1730] border-t border-white/5">
                <h3 className="text-xs font-heading font-black text-white uppercase truncate tracking-wide group-hover:text-[#00C6FF] transition-colors">
                  {facility.title}
                </h3>
                <p className="text-[10px] text-zinc-400 mt-1 line-clamp-2 leading-tight">
                  {facility.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Placeholder Imagery Notice */}
        <div className="mt-8 flex items-center justify-center gap-2 text-[11px] text-zinc-500 font-sans">
          <Info className="w-3.5 h-3.5 text-zinc-400" />
          <span>Facility photos are conceptual layout placeholders. Real Alpha Fitness photography to be integrated upon client onboarding.</span>
        </div>
      </div>
    </section>
  );
}
