"use client";

import {
  motion,
  useScroll,
  useVelocity,
  useSpring,
  useTransform,
} from "framer-motion";
import AboutBento from "./AboutBento";
import { STACK_DATA } from "@/constants";

function AboutSection({ activeTechIndex = 0 }: { activeTechIndex?: number }) {
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  // 1. THE MIDDLE GROUND SPRING: Balanced friction and snap-back
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 40,
    stiffness: 300,
  });

  const activeTechData = STACK_DATA[activeTechIndex];

  // 2. THE PRONOUNCED BEND: 0.07 multiplier, max stretch of 150px, with a 90px base curve
  const topPath = useTransform(smoothVelocity, (v) => {
    const bend = Math.max(Math.min(v * 0.07, 150), -150);
    // Bulge DOWN into About (Concave Down / Peak for Hero)
    return `M0,300 L1440,300 L1440,0 Q720,${90 + bend} 0,0 Z`;
  });

  const bottomPath = useTransform(smoothVelocity, (v) => {
    const bend = Math.max(Math.min(v * 0.07, 150), -150);
    // Bulge UP into About (Concave Up / Valley for Tech)
    return `M0,-300 L1440,-300 L1440,0 Q720,${-90 - bend} 0,0 Z`;
  });

  return (
    <section className="section-parent z-0 bg-[#FFF4EB] relative py-24 md:py-32 overflow-visible">
      {/* TOP DIVIDER */}
      <svg
        viewBox="0 -150 1440 450"
        className="w-full h-[100px] md:h-[150px] absolute -top-[32px] md:-top-[49px] left-0 overflow-visible z-50 pointer-events-none radial-blue bg-fixed"
        preserveAspectRatio="none"
      >
        <motion.path d={topPath} fill="#FFF4EB" />
      </svg>

      <AboutBento />

      {/* BOTTOM DIVIDER */}
      <svg
        viewBox="0 -300 1440 450"
        className={`w-full h-[100px] md:h-[150px] absolute -bottom-[32px] md:-bottom-[49px] left-0 overflow-visible z-50 pointer-events-none ${activeTechData.bgClass} bg-fixed transition-colors duration-700`}
        preserveAspectRatio="none"
      >
        <motion.path d={bottomPath} fill="#FFF4EB" />
      </svg>
    </section>
  );
}

export default AboutSection;
