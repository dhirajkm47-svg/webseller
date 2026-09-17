"use client";

import { PlanDemo } from "@/data/demo-content";
import CinematicMembershipSection from "./CinematicMembershipSection";
import MobileMembershipSection from "./MobileMembershipSection";

interface MembershipPlansProps {
  onSelectPlan: (plan: PlanDemo) => void;
}

export default function MembershipPlans({ onSelectPlan }: MembershipPlansProps) {
  return (
    <>
      {/* Desktop (>= 1024px): Pinned Scroll-Driven Cinematic Membership Selection Stage */}
      <CinematicMembershipSection onSelectPlan={onSelectPlan} />

      {/* Mobile & Tablet (< 1024px): Responsive Natural Scrolling Membership Presentation */}
      <MobileMembershipSection onSelectPlan={onSelectPlan} />
    </>
  );
}
