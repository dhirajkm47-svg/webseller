import Image from "next/image";
import { Compass } from "lucide-react";
import { DEMO_TRAINING_PILLARS } from "@/data/demo-content";

export default function Trainers() {
  return (
    <section id="training-guidance" className="py-24 bg-dark-bg border-t border-dark-border/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand-600">
            TRAINING SUPPORT
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white uppercase font-display tracking-tight">
            STRUCTURED <span className="text-brand-600">FITNESS GUIDANCE</span>
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm">
            Core training pillars designed to assist members with equipment orientation, workout consistency, and training safety.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DEMO_TRAINING_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="bg-dark-card border border-dark-border rounded-2xl overflow-hidden hover:border-zinc-700 transition-all group shadow-xl flex flex-col justify-between"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-transparent to-transparent" />
                <span className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-dark-bg/85 border border-dark-border text-[9px] font-bold text-zinc-300 uppercase tracking-wider">
                  {pillar.tag}
                </span>
              </div>

              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-extrabold text-white uppercase font-display">{pillar.title}</h3>
                  <p className="text-xs font-semibold text-brand-500 mt-0.5">{pillar.category}</p>
                  <p className="text-zinc-400 text-xs mt-2 leading-relaxed">{pillar.description}</p>
                </div>

                <div className="pt-3 border-t border-dark-border/80 flex items-center gap-1.5 text-zinc-400 text-xs">
                  <Compass className="w-3.5 h-3.5 text-brand-500 flex-shrink-0" />
                  <span className="text-[11px]">Amanora Club Member Support</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
