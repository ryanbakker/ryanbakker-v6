"use client";

import {
  motion,
  useScroll,
  useVelocity,
  useSpring,
  useTransform,
} from "framer-motion";
import AboutBento from "./AboutBento";
import { STACK_DATA, STACK_THEMES } from "@/constants";

function AboutSection({
  activeTechIndex = 0,
  data,
}: {
  activeTechIndex?: number;
  data?: any;
}) {
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  // 1. THE MIDDLE GROUND SPRING: Balanced friction and snap-back
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 40,
    stiffness: 300,
  });

  const activeTechData = STACK_DATA[activeTechIndex];
  const theme = STACK_THEMES[activeTechData.theme];

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
    <section
      id="continue"
      className="section-parent z-0 bg-[#FFF4EB] relative py-24 md:py-32 overflow-visible"
    >
      {/* TOP DIVIDER */}
      <svg
        viewBox="0 -150 1440 450"
        className="w-full h-25 md:h-37.5 absolute -top-8 md:-top-12.25 left-0 overflow-visible z-50 pointer-events-none radial-blue bg-fixed"
        preserveAspectRatio="none"
      >
        <motion.path d={topPath} fill="#FFF4EB" />
      </svg>

      <AboutBento data={data} />

      {/* BOTTOM DIVIDER */}
      <svg
        viewBox="0 -300 1440 450"
        className={`w-full h-25 md:h-37.5 absolute -bottom-8 md:-bottom-12.25 left-0 overflow-visible z-50 pointer-events-none ${theme.bgClass} bg-fixed transition-colors duration-700`}
        preserveAspectRatio="none"
      >
        <motion.path d={bottomPath} fill="#FFF4EB" />
      </svg>
    </section>
  );
}

export default AboutSection;
