"use client";

import CinematicStorySection from "./CinematicStorySection";
import MobileStorySection from "./MobileStorySection";

interface EditorialStoryProps {
  onOpenCheckout: () => void;
}

export default function EditorialStorySection({ onOpenCheckout }: EditorialStoryProps) {
  return (
    <>
      {/* DESKTOP ONLY (>= 1024px): Scroll-Driven Cinematic Story Experience */}
      <CinematicStorySection onOpenCheckout={onOpenCheckout} />

      {/* MOBILE / TABLET (< 1024px): Clean, Natural Scrolling Responsive Story Layout */}
      <MobileStorySection onOpenCheckout={onOpenCheckout} />
    </>
  );
}

