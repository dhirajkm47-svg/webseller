import React from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';
import { DEMO_CLUB_STANDARDS } from '@/data/demo-content';

export default function Testimonials() {
  return (
    <section id="standards" className="py-24 bg-dark-card/40 border-b border-white/5 relative overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute -top-32 right-1/4 w-96 h-96 bg-brand-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            Club Commitments
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
            MEMBER STANDARDS & <span className="text-brand-500">FACILITY CARE</span>
          </h2>
          <p className="mt-4 text-zinc-400 text-sm sm:text-base">
            Our operational standards for workout hygiene, equipment accessibility, and straightforward membership management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {DEMO_CLUB_STANDARDS.map((item) => (
            <div
              key={item.id}
              className="bg-dark-card border border-white/10 rounded-2xl p-8 hover:border-brand-500/40 transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-2 rounded-xl bg-brand-500/10 border border-brand-500/20 text-brand-400">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] uppercase font-mono px-2.5 py-0.5 rounded bg-white/5 text-zinc-400 border border-white/10">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-white font-heading font-bold text-lg sm:text-xl mb-3">
                  {item.title}
                </h3>
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-6 mt-6 border-t border-white/5">
                <span className="text-xs text-zinc-400">
                  Amanora Club, Hadapsar, Pune
                </span>
                <span className="text-xs text-brand-400 font-medium">
                  Alpha Fitness
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
