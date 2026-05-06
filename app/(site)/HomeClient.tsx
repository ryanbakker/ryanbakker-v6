"use client";

import AboutSection from "@/components/AboutSection";
import { HeroSection } from "@/components/HeroSection";
import TechSection from "@/components/TechSection";
import { useState } from "react";

export default function HomeClient() {
  const [activeTechIndex, setActiveTechIndex] = useState(0);

  return (
    <>
      <HeroSection />

      <AboutSection activeTechIndex={activeTechIndex} />

      <TechSection
        activeIndex={activeTechIndex}
        onToggle={(newIndex) => setActiveTechIndex(newIndex)}
      />
    </>
  );
}
