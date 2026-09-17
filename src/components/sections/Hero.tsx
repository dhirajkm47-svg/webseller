"use client";

import CinematicDesktopHero from "./CinematicDesktopHero";
import MobileHero from "./MobileHero";

interface HeroProps {
  onOpenCheckout: () => void;
}

export default function Hero({ onOpenCheckout }: HeroProps) {
  return (
    <>
      {/* DESKTOP ONLY (>= 1024px): Scroll-Driven Cinematic Experience */}
      <CinematicDesktopHero onOpenCheckout={onOpenCheckout} />

      {/* MOBILE / TABLET (< 1024px): Clean, High-Performance Responsive Hero */}
      <MobileHero onOpenCheckout={onOpenCheckout} />
    </>
  );
}
