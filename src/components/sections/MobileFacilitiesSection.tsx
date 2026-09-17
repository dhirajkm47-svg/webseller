"use client";

import Image from "next/image";
import { ArrowRight, Sparkles, CheckCircle2, Info } from "lucide-react";
import { motion } from "framer-motion";

const FACILITY_ZONES = [
  {
    num: "01",
    title: "STRENGTH & RESISTANCE FLOOR",
    tag: "RESISTANCE & HYPERTROPHY",
    description:
      "Dedicated floor area engineered for barbell work, progressive overload, and structured strength routines inside Amanora Club.",
    specs: ["Heavy Dumbbell Range", "Olympic Power Racks", "Plate-Loaded Machines", "Rubberized Impact Flooring"],
    image: "/images/facilities/strength-resistance.jpg",
    location: "Amanora Club Main Floor",
  },
  {
    num: "02",
    title: "CARDIOVASCULAR SUITE",
    tag: "ENDURANCE & INTERVALS",
    description:
      "Modern treadmills, stationary bicycles, and cardiovascular conditioning equipment overlooking the Amanora grounds.",
    specs: ["Commercial Treadmills", "Stationary Spin Cycles", "Interval Conditioning", "Heart-Rate Tracking Friendly"],
    image: "/images/facilities/cardio-suite.jpg",
    location: "Amanora Club Cardio Wing",
  },
  {
    num: "03",
    title: "FREE WEIGHTS & BENCH ARENA",
    tag: "FREE WEIGHTS & DUMBBELLS",
    description:
      "Complete selection of precision dumbbells, flat and incline Olympic benches, and weight racks for compound movements.",
    specs: ["Dumbbell Sets up to 40kg+", "Adjustable & Incline Benches", "Olympic Barbells", "Dedicated Mirror Walls"],
    image: "/images/facilities/free-weights-arena.jpg",
    location: "Amanora Club Free Weight Floor",
  },
  {
    num: "04",
    title: "FUNCTIONAL & MOBILITY FLOOR",
    tag: "CORE & FUNCTIONAL MOVEMENT",
    description:
      "Spacious open floor designated for athletic agility, bodyweight drills, core stabilization, and post-workout mobility.",
    specs: ["Mobility & Stretching Zone", "Functional Agility Space", "Kettlebells & Resistance Bands", "Clean Member Changing Access"],
    image: "/images/facilities/functional-mobility.jpg",
    location: "Amanora Club Functional Arena",
  },
];

export default function MobileFacilitiesSection() {
  return (
    <section id="facilities-mobile" className="py-16 sm:py-20 bg-[#050B18] border-t border-white/10 relative block lg:hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[320px] h-[320px] bg-[#0066FF]/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Mobile Header */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1730] border border-[#00C6FF]/30 text-[10px] font-mono font-bold text-[#00C6FF] uppercase tracking-wider">
            <span>02 / TRAINING FLOORS &amp; SPACES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-heading font-black text-white uppercase tracking-tight leading-tight">
            FITNESS SPACES &amp;<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#00C6FF]">
              TRAINING FLOORS
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed">
            Four specialized workout zones inside Amanora Club (Fern Hotel), Pune, engineered for strength, endurance, and athletic performance.
          </p>
        </div>

        {/* Vertical Facility Zone Cards Stack */}
        <div className="space-y-6">
          {FACILITY_ZONES.map((zone, idx) => (
            <motion.div
              key={zone.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#0D1730] border border-[#00C6FF]/20 rounded-2xl overflow-hidden shadow-xl"
            >
              {/* Image with Tag & Number */}
              <div className="relative h-52 sm:h-60 w-full overflow-hidden">
                <Image
                  src={zone.image}
                  alt={zone.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1730] via-transparent to-transparent" />
                
                {/* Zone Number Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#050B18]/90 border border-[#00C6FF]/40 backdrop-blur-md flex items-center gap-1.5 shadow-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00C6FF]" />
                  <span className="text-[10px] font-mono font-bold text-white uppercase tracking-wider">
                    ZONE {zone.num}
                  </span>
                </div>

                {/* Location Badge */}
                <div className="absolute bottom-3 left-3 text-[10px] font-mono text-[#00C6FF] font-semibold tracking-wider uppercase bg-[#050B18]/80 px-2.5 py-0.5 rounded-md backdrop-blur-sm">
                  {zone.location}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 space-y-4">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold text-[#00C6FF] uppercase tracking-wider">
                    <Sparkles className="w-3 h-3 text-[#00C6FF]" />
                    <span>{zone.tag}</span>
                  </div>
                  <h3 className="text-xl font-heading font-black text-white uppercase tracking-tight">
                    {zone.title}
                  </h3>
                  <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                    {zone.description}
                  </p>
                </div>

                {/* Specs List */}
                <div className="pt-3 border-t border-white/10 space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 font-bold block">
                    Features &amp; Highlights
                  </span>
                  {zone.specs.map((spec) => (
                    <div key={spec} className="flex items-center gap-2 text-xs text-zinc-300 font-sans">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00C6FF] flex-shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>

                {/* Card CTA */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  <a
                    href="#membership"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#0066FF] to-[#00C6FF] hover:brightness-110 text-white font-heading font-black text-xs uppercase tracking-wider shadow-md shadow-[#0066FF]/30 transition-all active:scale-[0.98]"
                  >
                    <span>Select Pass</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <span className="text-xs font-mono text-zinc-400 font-bold">{zone.num} / 04</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Handoff Cue */}
        <div className="mt-10 text-center space-y-3">
          <a
            href="#membership"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#00C6FF] hover:text-white uppercase tracking-wider underline underline-offset-4"
          >
            <span>NEXT: VIEW MEMBERSHIP PLANS &amp; PASSES ↓</span>
          </a>

          {/* Placeholder Disclaimer */}
          <div className="flex items-center justify-center gap-1.5 text-[10px] text-zinc-500 font-sans">
            <Info className="w-3 h-3 text-zinc-400" />
            <span>Conceptual layout imagery. Real gym photos to be integrated.</span>
          </div>
        </div>

      </div>
    </section>
  );
}
