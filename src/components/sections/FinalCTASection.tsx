"use client";

import CinematicFinalCTASection from "./CinematicFinalCTASection";
import MobileFinalCTASection from "./MobileFinalCTASection";

interface FinalCTASectionProps {
  onOpenCheckout: () => void;
}

export default function FinalCTASection({ onOpenCheckout }: FinalCTASectionProps) {
  return (
    <>
      {/* Desktop (>= 1024px): Pinned Scroll-Driven Cinematic Final CTA Stage */}
      <CinematicFinalCTASection onOpenCheckout={onOpenCheckout} />

      {/* Mobile & Tablet (< 1024px): Responsive Natural Scrolling Final CTA Presentation */}
      <MobileFinalCTASection onOpenCheckout={onOpenCheckout} />
    </>
  );
}
