import Image from "next/image";
import { CheckCircle2, MapPin, Shield } from "lucide-react";
import { CLUB_LOCATION_INFO } from "@/data/demo-content";

export default function About() {
  return (
    <section id="about" className="py-24 bg-dark-bg border-t border-dark-border/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Showcase */}
          <div className="relative">
            <div className="relative h-[420px] sm:h-[480px] w-full rounded-2xl overflow-hidden border border-dark-border shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=1200"
                alt="Alpha Fitness Amanora Club"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 via-transparent to-transparent" />
            </div>

            {/* Overlay Location Badge */}
            <div className="absolute -bottom-5 -right-2 sm:right-6 bg-dark-card/95 border border-dark-border p-5 rounded-2xl shadow-2xl max-w-[260px] backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-brand-600/20 text-brand-500 flex items-center justify-center font-bold">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white uppercase font-display">Amanora Club</p>
                  <p className="text-[10px] text-zinc-400">Hadapsar, Pune</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="space-y-6">
            <div className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand-600">
              ABOUT ALPHA FITNESS
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight uppercase font-display">
              A DEDICATED GYM FOR <span className="text-brand-600">YOUR WORKOUTS</span>
            </h2>

            <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
              Located at {CLUB_LOCATION_INFO.locationName} in {CLUB_LOCATION_INFO.township}, Alpha Fitness provides a dedicated fitness and strength training environment for members in Hadapsar, Pune.
            </p>

            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase font-display">Fitness Equipment & Weights</h4>
                  <p className="text-[11px] text-zinc-400 mt-0.5">Free weights, resistance machines, and cardio equipment for regular training.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase font-display">Organized Training Environment</h4>
                  <p className="text-[11px] text-zinc-400 mt-0.5">Spacious training areas supporting personal workout routines and functional fitness.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase font-display">Digital Member Management</h4>
                  <p className="text-[11px] text-zinc-400 mt-0.5">Online membership enrollment, digital check-in passes, and clear membership tracking.</p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-6 border-t border-dark-border/80">
              <div className="flex items-center gap-2 text-xs font-semibold text-zinc-300">
                <Shield className="w-4 h-4 text-brand-600" />
                <span>Amanora Club Location</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-brand-600" />
                <span>Verified Facility Address</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
