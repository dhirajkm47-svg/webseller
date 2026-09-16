import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ExternalLink, Shield } from "lucide-react";
import { CLUB_LOCATION_INFO } from "@/data/demo-content";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#050B18] border-t border-white/10 text-zinc-400 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand Logo & Location Info */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 flex items-center justify-center">
                <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
                  <defs>
                    <linearGradient id="footerLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0066FF" />
                      <stop offset="100%" stopColor="#00C6FF" />
                    </linearGradient>
                  </defs>
                  <path d="M16 2L3 28H10L16 15L22 28H29L16 2Z" fill="url(#footerLogoGrad)" />
                  <path d="M16 8L8 24H12L16 16L20 24H24L16 8Z" fill="#FFFFFF" opacity="0.95" />
                </svg>
              </div>
              <span className="font-heading font-black text-base tracking-wider text-white uppercase">
                ALPHA <span className="text-[#00C6FF]">FITNESS</span>
              </span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed font-sans">
              Dedicated fitness facility located at Amanora Club (Fern Hotel), Hadapsar, Pune. Built for strength training, conditioning, and consistency.
            </p>
            <div className="space-y-2 pt-2 text-xs text-zinc-300 font-sans">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#00C6FF] flex-shrink-0 mt-0.5" />
                <span>{CLUB_LOCATION_INFO.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#00C6FF] flex-shrink-0" />
                <span>{CLUB_LOCATION_INFO.phonePlaceholder}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#00C6FF] flex-shrink-0" />
                <span>{CLUB_LOCATION_INFO.emailPlaceholder}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-heading font-black text-white uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2 text-xs font-sans">
              <li>
                <a href="#" className="hover:text-[#00C6FF] transition-colors">Home</a>
              </li>
              <li>
                <a href="#editorial-story" className="hover:text-[#00C6FF] transition-colors">Philosophy</a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-[#00C6FF] transition-colors">Gym Facilities</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#00C6FF] transition-colors">Photo Gallery</a>
              </li>
              <li>
                <a href="#membership" className="hover:text-[#00C6FF] transition-colors">Membership Passes</a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#00C6FF] transition-colors">Location & Hours</a>
              </li>
            </ul>
          </div>

          {/* Operating Hours */}
          <div className="space-y-3">
            <h3 className="text-xs font-heading font-black text-white uppercase tracking-wider flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#00C6FF]" />
              <span>Hours [DEMO]</span>
            </h3>
            <div className="space-y-2 text-xs font-sans">
              <div>
                <p className="font-semibold text-zinc-200">Monday - Saturday</p>
                <p className="text-zinc-400">{CLUB_LOCATION_INFO.operatingHours.weekdays}</p>
              </div>
              <div>
                <p className="font-semibold text-zinc-200">Sunday</p>
                <p className="text-zinc-400">{CLUB_LOCATION_INFO.operatingHours.sundays}</p>
              </div>
              <p className="text-[10px] text-zinc-500 italic pt-1 font-mono">
                * Hours are subject to client confirmation upon onboarding.
              </p>
            </div>
          </div>

          {/* Admin Portal Quick Access */}
          <div className="space-y-3">
            <h3 className="text-xs font-heading font-black text-white uppercase tracking-wider">
              Management Portal
            </h3>
            <div className="bg-[#0D1730] p-4 rounded-2xl border border-white/10 text-xs space-y-2.5">
              <p className="text-zinc-300 text-[11px] font-sans">
                Admin console for member records, payment logs, and check-in pass validation.
              </p>
              <div className="pt-1">
                <Link
                  href="/admin"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0066FF]/10 hover:bg-[#0066FF]/20 text-white border border-[#00C6FF]/30 hover:border-[#00C6FF] font-heading font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(0,198,255,0.15)]"
                >
                  <Shield className="w-3 h-3 text-[#00C6FF]" />
                  <span>Admin Dashboard</span>
                  <ExternalLink className="w-3 h-3 text-zinc-400" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4 font-mono">
          <p>© {new Date().getFullYear()} Alpha Fitness, Amanora Club, Pune. All rights reserved.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Membership Terms</span>
            <span>•</span>
            <span className="text-[#00C6FF] font-semibold">Amanora Township, Hadapsar</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
