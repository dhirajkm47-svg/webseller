"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import EditorialStorySection from "@/components/sections/EditorialStorySection";
import Facilities from "@/components/sections/Facilities";
import EditorialGallery from "@/components/sections/EditorialGallery";
import AtmosphereBanner from "@/components/sections/AtmosphereBanner";
import MembershipPlans from "@/components/sections/MembershipPlans";
import FAQ from "@/components/sections/FAQ";
import LocationContact from "@/components/sections/LocationContact";
import CheckoutModal from "@/components/checkout/CheckoutModal";
import PaymentSuccessModal from "@/components/checkout/PaymentSuccessModal";
import { PlanDemo, DEMO_MEMBERSHIP_PLANS } from "@/data/demo-content";

export default function Home() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<PlanDemo | undefined>(undefined);
  const [receiptData, setReceiptData] = useState<{
    memberCode: string;
    fullName: string;
    email: string;
    planName: string;
    startDate: string;
    endDate: string;
    transactionRef: string;
    amountInINR: number;
  } | null>(null);

  const handleOpenCheckout = (plan?: PlanDemo) => {
    setSelectedPlan(plan || DEMO_MEMBERSHIP_PLANS[1]);
    setIsCheckoutOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#050B18] text-[#F8FAFC] selection:bg-[#00C6FF] selection:text-black">
      {/* Editorial Header */}
      <Header onOpenCheckout={() => handleOpenCheckout()} />

      {/* Visually Dominant Asymmetric Hero (60% Photo / 40% Text) */}
      <Hero onOpenCheckout={() => handleOpenCheckout()} />

      {/* Asymmetric Large Editorial Image & Story Section */}
      <EditorialStorySection onOpenCheckout={() => handleOpenCheckout()} />

      {/* Facilities Showcase & Panoramic Gallery */}
      <Facilities />

      {/* 5-Item Asymmetric Photo Campaign Mosaic */}
      <EditorialGallery />

      {/* Full-Bleed Panoramic Interstitial Atmosphere Banner */}
      <AtmosphereBanner onOpenCheckout={() => handleOpenCheckout()} />

      {/* Integrated Editorial Membership Presentation */}
      <MembershipPlans onSelectPlan={(plan) => handleOpenCheckout(plan)} />

      {/* FAQ & Location Sections */}
      <FAQ />
      <LocationContact />

      {/* Minimal Editorial Footer */}
      <Footer />

      {/* Checkout Modal Flow */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        selectedPlan={selectedPlan}
        onSuccess={(receipt) => {
          setReceiptData(receipt);
        }}
      />

      {/* Payment Receipt / Digital Member Pass Modal */}
      <PaymentSuccessModal
        receipt={receiptData}
        onClose={() => setReceiptData(null)}
      />
    </main>
  );
}
