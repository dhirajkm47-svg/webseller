"use client";

import Image from "next/image";
import { Dumbbell, Zap, Activity, UserCheck, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { DEMO_PROGRAMS } from "@/data/demo-content";

const iconMap: Record<string, React.ReactNode> = {
  Dumbbell: <Dumbbell className="w-5 h-5 text-brand-500" />,
  Zap: <Zap className="w-5 h-5 text-brand-500" />,
  Activity: <Activity className="w-5 h-5 text-brand-500" />,
  UserCheck: <UserCheck className="w-5 h-5 text-brand-500" />,
};

interface ProgramsProps {
  onOpenCheckout: () => void;
}

export default function Programs({ onOpenCheckout }: ProgramsProps) {
  return (
    <section id="programs" className="py-24 bg-dark-bg border-t border-dark-border/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-2">
            <div className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand-600">
              TRAINING DISCIPLINES
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white uppercase font-display tracking-tight">
              FITNESS <span className="text-brand-600">PROGRAMS</span>
            </h2>
          </div>
          <p className="text-zinc-400 text-xs sm:text-sm max-w-md">
            Structured workout categories covering resistance training, cardio conditioning, functional movement, and general gym orientation.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DEMO_PROGRAMS.map((program, idx) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group relative bg-dark-card border border-dark-border rounded-2xl overflow-hidden hover:border-brand-600/50 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              {/* Card Image Header */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-dark-card/40 to-transparent" />
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-dark-bg/85 border border-dark-border text-[10px] font-extrabold text-zinc-300 backdrop-blur-md uppercase">
                  {program.category}
                </span>
              </div>

              {/* Content Body */}
              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-lg bg-brand-600/15 flex items-center justify-center mb-3">
                    {iconMap[program.iconName] || <Dumbbell className="w-4 h-4 text-brand-500" />}
                  </div>
                  <h3 className="text-base font-extrabold text-white uppercase tracking-tight group-hover:text-brand-500 transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed mt-1.5">
                    {program.description}
                  </p>
                </div>

                <button
                  onClick={onOpenCheckout}
                  className="w-full pt-4 flex items-center justify-between text-xs font-bold text-zinc-300 group-hover:text-white border-t border-dark-border/80 mt-4 transition-colors"
                >
                  <span className="uppercase tracking-wider text-[11px]">Select Plan</span>
                  <ArrowRight className="w-3.5 h-3.5 text-brand-500 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
