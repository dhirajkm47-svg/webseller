"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Shield, Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface HeaderProps {
  onOpenCheckout: () => void;
}

export default function Header({ onOpenCheckout }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Facilities", href: "#facilities" },
    { name: "Philosophy", href: "#editorial-story" },
    { name: "Gallery", href: "#gallery" },
    { name: "Membership", href: "#membership" },
    { name: "Location", href: "#location" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0B0B0F]/95 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl"
          : "bg-gradient-to-b from-[#0B0B0F]/90 via-[#0B0B0F]/40 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 flex items-center justify-center">
            <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8 transform group-hover:scale-105 transition-transform">
              <defs>
                <linearGradient id="headerLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#7A5CFF" />
                  <stop offset="100%" stopColor="#3B82F6" />
                </linearGradient>
              </defs>
              <path d="M16 2L3 28H10L16 15L22 28H29L16 2Z" fill="url(#headerLogoGrad)" />
              <path d="M16 8L8 24H12L16 16L20 24H24L16 8Z" fill="#FFFFFF" opacity="0.95" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-black text-lg sm:text-xl tracking-wider text-white uppercase leading-tight">
              ALPHA <span className="text-zinc-300 font-light">FITNESS</span>
            </span>
            <span className="text-[8px] font-mono tracking-[0.25em] text-[#7A5CFF] font-bold uppercase -mt-0.5">
              AMANORA CLUB • PUNE
            </span>
          </div>
        </Link>

        {/* Clean Editorial Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-heading font-bold uppercase tracking-widest text-zinc-300 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/admin"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono text-zinc-400 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#7A5CFF]/40 transition-all"
            title="Admin Console"
          >
            <Shield className="w-3 h-3 text-[#7A5CFF]" />
            <span>Admin</span>
          </Link>
          <button
            onClick={onOpenCheckout}
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#7A5CFF] to-[#3B82F6] hover:brightness-110 text-white text-xs font-heading font-black uppercase tracking-wider shadow-lg shadow-[#7A5CFF]/30 hover:shadow-[#7A5CFF]/50 transition-all transform hover:-translate-y-0.5 active:scale-[0.98] flex items-center gap-1.5 cursor-pointer"
          >
            <span>Join Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-zinc-300 hover:text-white"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#101014] border-b border-white/10 px-6 py-6 space-y-4 overflow-hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-heading font-bold uppercase tracking-wider text-zinc-200 hover:text-[#7A5CFF] py-1 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <Link
                href="/admin"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full border border-white/10 bg-white/[0.04] text-zinc-300 text-xs font-mono hover:border-[#7A5CFF]/40 transition-colors"
              >
                <Shield className="w-3.5 h-3.5 text-[#7A5CFF]" />
                <span>Admin Login</span>
              </Link>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCheckout();
                }}
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#7A5CFF] to-[#3B82F6] hover:brightness-110 text-white font-heading font-black text-xs uppercase tracking-wider shadow-lg shadow-[#7A5CFF]/30 active:scale-[0.98] transition-all"
              >
                Join Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
