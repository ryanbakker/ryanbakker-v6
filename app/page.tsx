"use client";

import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import Footer from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import InspoSection from "@/components/InspoSection";
import ProjectSection from "@/components/ProjectSection";
import SocialSection from "@/components/SocialSection";
import TechSection from "@/components/TechSection";
import { useState } from "react";

export default function Home() {
  const [activeTechIndex, setActiveTechIndex] = useState(0);

  return (
    <main className="w-full">
      {/* Easter Egg Buffer (Top) */}
      <div className="h-[20vh] pointer-events-none" />

      <div className="snap-start">
        <HeroSection />
      </div>

      <AboutSection activeTechIndex={activeTechIndex} />

      <TechSection
        activeIndex={activeTechIndex}
        onToggle={(newIndex) => setActiveTechIndex(newIndex)}
      />

      <ProjectSection />
      <EducationSection />
      <InspoSection />
      <SocialSection />

      <div className="snap-end">
        <Footer />
      </div>

      {/* Easter Egg Buffer (Bottom) */}
      <div className="h-[20vh] pointer-events-none" />
    </main>
  );
}
