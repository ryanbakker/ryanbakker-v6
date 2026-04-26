"use client";

import AboutSection from "@/components/AboutSection";
import { HeroSection } from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectSection";
import TechSection from "@/components/TechSection";
import { useState } from "react";

export default function Home() {
  const [activeTechIndex, setActiveTechIndex] = useState(0);

  return (
    <main className="w-full">
      <HeroSection />
      <AboutSection activeTechIndex={activeTechIndex} />
      <TechSection
        activeIndex={activeTechIndex}
        onToggle={(newIndex) => setActiveTechIndex(newIndex)}
      />
      <ProjectSection />
    </main>
  );
}
