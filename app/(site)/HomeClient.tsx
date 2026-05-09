"use client";

import AboutSection from "@/components/AboutSection";
import { HeroSection } from "@/components/HeroSection";
import TechSection from "@/components/TechSection";
import { useState } from "react";

export default function HomeClient(data?: any) {
  const [activeTechIndex, setActiveTechIndex] = useState(0);

  return (
    <>
      <HeroSection data={data} />

      <AboutSection data={data} activeTechIndex={activeTechIndex} />

      <TechSection
        activeIndex={activeTechIndex}
        onToggle={(newIndex) => setActiveTechIndex(newIndex)}
      />
    </>
  );
}
