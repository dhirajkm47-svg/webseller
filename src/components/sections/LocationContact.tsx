import React from 'react';
import { MapPin, Clock, Phone, Mail, Navigation } from 'lucide-react';
import { CLUB_LOCATION_INFO } from '@/data/demo-content';

export default function LocationContact() {
  return (
    <section id="location" className="py-24 bg-dark-card/40 border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Details & Hours */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold uppercase tracking-wider mb-4">
                <MapPin className="w-3.5 h-3.5" />
                Club Location
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
                VISIT US AT <span className="text-brand-500">AMANORA CLUB</span>
              </h2>
              <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
                Located inside Amanora Club (Fern Hotel) in Amanora Township, Hadapsar, Pune. Dedicated strength and fitness facility for local members and residents.
              </p>
            </div>

            {/* Address & Contact Cards */}
            <div className="space-y-4">
              <div className="p-6 rounded-2xl bg-dark-card border border-white/10 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-brand-500/10 text-brand-400 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-heading font-bold text-base">Club Address</h4>
                  <p className="text-zinc-300 text-sm mt-1 leading-relaxed">
                    {CLUB_LOCATION_INFO.fullAddress}
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-dark-card border border-white/10 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-brand-500/10 text-brand-400 shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-heading font-bold text-base">Operating Hours</h4>
                  <div className="text-zinc-300 text-sm mt-1 space-y-1">
                    <p><span className="text-zinc-400">Mon – Sat:</span> {CLUB_LOCATION_INFO.operatingHours.weekdays}</p>
                    <p><span className="text-zinc-400">Sunday:</span> {CLUB_LOCATION_INFO.operatingHours.sundays}</p>
                  </div>
                  <p className="text-[11px] text-zinc-400 mt-2 italic font-mono">
                    *{CLUB_LOCATION_INFO.operatingHours.notes}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-dark-card border border-white/10 flex items-center gap-3">
                  <Phone className="w-5 h-5 text-brand-400 shrink-0" />
                  <div>
                    <span className="text-xs text-zinc-400 block">Club Phone</span>
                    <span className="text-sm font-medium text-white">{CLUB_LOCATION_INFO.phonePlaceholder}</span>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-dark-card border border-white/10 flex items-center gap-3">
                  <Mail className="w-5 h-5 text-brand-400 shrink-0" />
                  <div>
                    <span className="text-xs text-zinc-400 block">General Inquiries</span>
                    <span className="text-sm font-medium text-white">{CLUB_LOCATION_INFO.emailPlaceholder}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Map Card */}
          <div className="lg:col-span-6 space-y-6">
            <div className="rounded-2xl border border-white/10 bg-dark-card overflow-hidden p-6 relative">
              <div className="h-64 sm:h-72 w-full rounded-xl bg-zinc-900 border border-white/5 relative flex flex-col items-center justify-center text-center p-6 overflow-hidden">
                {/* Visual Map Backdrop */}
                <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />
                <div className="relative z-10 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-brand-500/20 text-brand-500 border border-brand-500/40 flex items-center justify-center mx-auto animate-pulse">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h4 className="text-white font-heading font-bold text-lg">
                    Amanora Club (Fern Hotel)
                  </h4>
                  <p className="text-xs text-zinc-400 max-w-xs mx-auto">
                    Amanora Township, Hadapsar, Pune — 411028
                  </p>
                  <a
                    href="https://maps.google.com/?q=Amanora+Club+Hadapsar+Pune"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold uppercase tracking-wider transition-colors border border-white/15"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    Open in Google Maps
                  </a>
                </div>
              </div>

              {/* Inquiry Assistance Box */}
              <div className="mt-6 pt-6 border-t border-white/5 text-center">
                <p className="text-xs text-zinc-400">
                  Visit our reception inside Amanora Club during operating hours for membership onboarding and pass validation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
