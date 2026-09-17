import React from 'react';
import { MapPin, Clock, Phone, Mail, Navigation } from 'lucide-react';
import { CLUB_LOCATION_INFO } from '@/data/demo-content';

export default function LocationContact() {
  return (
    <section id="location" className="py-24 bg-[#050B18] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Details & Hours */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0066FF]/15 border border-[#00C6FF]/35 text-[#00C6FF] text-xs font-mono font-bold uppercase tracking-wider mb-4">
                <MapPin className="w-3.5 h-3.5" />
                <span>Club Location</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-tight">
                VISIT US AT <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#00C6FF]">AMANORA CLUB</span>
              </h2>
              <p className="mt-4 text-zinc-300 text-sm sm:text-base leading-relaxed font-sans">
                Located inside Amanora Club (Fern Hotel) in Amanora Township, Hadapsar, Pune. Dedicated strength and fitness facility for local members and residents.
              </p>
            </div>

            {/* Address & Contact Cards */}
            <div className="space-y-4">
              <div className="p-6 rounded-2xl bg-[#0D1730] border border-[#00C6FF]/20 flex items-start gap-4 shadow-xl">
                <div className="p-3 rounded-xl bg-[#0066FF]/15 text-[#00C6FF] shrink-0 border border-[#00C6FF]/30">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-heading font-black text-base uppercase">Club Address</h4>
                  <p className="text-zinc-300 text-sm mt-1 leading-relaxed font-sans">
                    {CLUB_LOCATION_INFO.fullAddress}
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#0D1730] border border-[#00C6FF]/20 flex items-start gap-4 shadow-xl">
                <div className="p-3 rounded-xl bg-[#0066FF]/15 text-[#00C6FF] shrink-0 border border-[#00C6FF]/30">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-heading font-black text-base uppercase">Operating Hours</h4>
                  <div className="text-zinc-300 text-sm mt-1 space-y-1 font-sans">
                    <p><span className="text-zinc-400">Mon – Sat:</span> {CLUB_LOCATION_INFO.operatingHours.weekdays}</p>
                    <p><span className="text-zinc-400">Sunday:</span> {CLUB_LOCATION_INFO.operatingHours.sundays}</p>
                  </div>
                  <p className="text-[11px] text-zinc-400 mt-2 italic font-mono">
                    *{CLUB_LOCATION_INFO.operatingHours.notes}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-[#0D1730] border border-white/10 flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#00C6FF] shrink-0" />
                  <div>
                    <span className="text-xs text-zinc-400 block font-mono">Club Phone</span>
                    <span className="text-sm font-medium text-white">{CLUB_LOCATION_INFO.phonePlaceholder}</span>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#0D1730] border border-white/10 flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#00C6FF] shrink-0" />
                  <div>
                    <span className="text-xs text-zinc-400 block font-mono">General Inquiries</span>
                    <span className="text-sm font-medium text-white">{CLUB_LOCATION_INFO.emailPlaceholder}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Map Card */}
          <div className="lg:col-span-6 space-y-6">
            <div className="rounded-3xl border border-[#00C6FF]/20 bg-[#0D1730] overflow-hidden p-6 relative shadow-2xl">
              <div className="h-64 sm:h-72 w-full rounded-2xl bg-[#050B18] border border-white/10 relative flex flex-col items-center justify-center text-center p-6 overflow-hidden">
                {/* Visual Map Backdrop */}
                <div className="absolute inset-0 bg-[radial-gradient(#00C6FF_1px,transparent_1px)] [background-size:20px_20px] opacity-15" />
                <div className="relative z-10 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#0066FF]/20 text-[#00C6FF] border border-[#00C6FF]/40 flex items-center justify-center mx-auto shadow-lg shadow-[#0066FF]/30 animate-pulse">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h4 className="text-white font-heading font-black text-lg uppercase tracking-tight">
                    Amanora Club (Fern Hotel)
                  </h4>
                  <p className="text-xs text-zinc-300 max-w-xs mx-auto font-sans">
                    Amanora Township, Hadapsar, Pune — 411028
                  </p>
                  <a
                    href="https://maps.google.com/?q=Amanora+Club+Hadapsar+Pune"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#0066FF] to-[#00C6FF] hover:brightness-110 text-white text-xs font-heading font-black uppercase tracking-wider transition-all shadow-md shadow-[#0066FF]/30"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Open in Google Maps</span>
                  </a>
                </div>
              </div>

              {/* Inquiry Assistance Box */}
              <div className="mt-6 pt-6 border-t border-white/10 text-center">
                <p className="text-xs text-zinc-400 font-sans">
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
