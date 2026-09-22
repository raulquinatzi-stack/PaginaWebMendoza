import React from "react";
import { Hero } from "@/components/hero/Hero";
import { EmergencyTriage } from "@/components/emergency-triage/EmergencyTriage";
import { PracticeAreas } from "@/components/practice-areas/PracticeAreas";
import { Testimonials } from "@/components/testimonials/Testimonials";
import { ContactSection } from "@/components/contact/ContactSection";
import { FloatingWhatsApp } from "@/components/contact/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#060a16] text-slate-100 selection:bg-[#c5a880] selection:text-[#060a16]">
      {/* Hero Presentation */}
      <Hero />

      {/* Emergency Triage & Protocol 24/7 */}
      <EmergencyTriage />

      {/* Specialized Practice Areas */}
      <PracticeAreas />

      {/* Testimonials & Success Cases */}
      <Testimonials />

      {/* Multichannel Contact & Live IndexedDB Form */}
      <ContactSection />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </main>
  );
}
