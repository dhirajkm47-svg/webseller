"use client";

import Image from "next/image";
import { Camera } from "lucide-react";
import { motion } from "framer-motion";

export default function EditorialGallery() {
  return (
    <section id="gallery" className="py-24 bg-[#0B0B0F] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-heading font-black uppercase tracking-[0.25em] text-[#7A5CFF]">
              <Camera className="w-3.5 h-3.5" />
              <span>VISUAL CAMPAIGN</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase font-heading tracking-tight leading-[1.02]">
              FITNESS IN <span className="text-[#7A5CFF]">MOTION</span>
            </h2>
          </div>
          <p className="text-zinc-400 text-xs sm:text-sm max-w-md font-sans leading-relaxed">
            Inside the training spaces of Alpha Fitness at Amanora Club (Fern Hotel), Hadapsar, Pune.
          </p>
        </div>

        {/* Asymmetric Editorial Photo Mosaic: 1 Large + 2 Medium + 2 Smaller */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6">
          
          {/* 1. Large Feature Hero Image (Spans 7 cols, row-span-2) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 relative h-[360px] sm:h-[480px] lg:h-[540px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl group bg-[#141419]"
          >
            <Image
              src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=1600"
              alt="Alpha Fitness Strength Training Arena"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F]/90 via-[#0B0B0F]/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[10px] font-mono text-[#7A5CFF] uppercase tracking-widest font-bold block mb-1">
                Strength Arena
              </span>
              <h3 className="text-xl sm:text-2xl font-heading font-black text-white uppercase leading-tight">
                Barbell & Heavy Resistance Floor
              </h3>
            </div>
          </motion.div>

          {/* 2 & 3. Two Medium Stacked Images on Right (Spans 5 cols) */}
          <div className="md:col-span-5 flex flex-col gap-4 sm:gap-6">
            {/* Medium Image 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative h-[220px] sm:h-[255px] rounded-3xl overflow-hidden border border-white/10 shadow-xl group bg-[#141419]"
            >
              <Image
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=1000"
                alt="Cardiovascular Exercise Section"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F]/85 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-5 right-5">
                <span className="text-[10px] font-mono text-[#7A5CFF] uppercase font-bold block">
                  Cardio Space
                </span>
                <h4 className="text-base font-heading font-black text-white uppercase">
                  Treadmills & Interval Training
                </h4>
              </div>
            </motion.div>

            {/* Medium Image 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative h-[220px] sm:h-[255px] rounded-3xl overflow-hidden border border-white/10 shadow-xl group bg-[#141419]"
            >
              <Image
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=1000"
                alt="Functional Movement Area"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F]/85 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-5 right-5">
                <span className="text-[10px] font-mono text-[#7A5CFF] uppercase font-bold block">
                  Movement Floor
                </span>
                <h4 className="text-base font-heading font-black text-white uppercase">
                  Agility & Core Conditioning
                </h4>
              </div>
            </motion.div>
          </div>

          {/* 4 & 5. Two Wide / Asymmetric Bottom Images (Spans 6 cols each) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-6 relative h-[240px] sm:h-[280px] rounded-3xl overflow-hidden border border-white/10 shadow-xl group bg-[#141419]"
          >
            <Image
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200"
              alt="Free Weights and Dumbbells"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F]/85 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-[#7A5CFF] uppercase font-bold block">
                  Free Weights
                </span>
                <h4 className="text-base font-heading font-black text-white uppercase">
                  Dumbbells & Olympic Benches
                </h4>
              </div>
              <span className="text-xs font-mono text-zinc-400">Amanora Club</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-6 relative h-[240px] sm:h-[280px] rounded-3xl overflow-hidden border border-white/10 shadow-xl group bg-[#141419]"
          >
            <Image
              src="https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&q=80&w=1200"
              alt="Club Amenities & Changing Suites"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F]/85 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-[#7A5CFF] uppercase font-bold block">
                  Club Amenities
                </span>
                <h4 className="text-base font-heading font-black text-white uppercase">
                  Lockers & Shower Suites
                </h4>
              </div>
              <span className="text-xs font-mono text-zinc-400">Amanora Township</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
