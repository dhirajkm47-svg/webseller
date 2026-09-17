"use client";

import CinematicFacilitiesSection from "./CinematicFacilitiesSection";
import MobileFacilitiesSection from "./MobileFacilitiesSection";

export default function Facilities() {
  return (
    <>
      {/* Desktop (>= 1024px): 4-Zone Pinned Scroll Facilities Showcase */}
      <CinematicFacilitiesSection />

      {/* Mobile & Tablet (< 1024px): Natural Responsive Scrolling Facilities Layout */}
      <MobileFacilitiesSection />
    </>
  );
}
