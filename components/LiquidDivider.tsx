"use client";

import {
  motion,
  useScroll,
  useVelocity,
  useSpring,
  useTransform,
} from "framer-motion";

export default function LiquidDivider() {
  // 1. Track the scroll position of the entire window
  const { scrollY } = useScroll();

  // 2. Extract the raw velocity (speed and direction) of the scroll
  const scrollVelocity = useVelocity(scrollY);

  // 3. Apply spring physics so the curve snaps back like an elastic band
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50, // How fast it settles (friction)
    stiffness: 400, // How tight the elastic is
  });

  // 4. Map the smoothed velocity to SVG path coordinates
  const pathData = useTransform(smoothVelocity, (velocity) => {
    // Multiply velocity by a small fraction to control sensitivity.
    // Clamp it between -80 and 80 so the curve doesn't break the layout on wild scrolls.
    const bend = Math.max(Math.min(velocity * 0.04, 80), -80);

    // SVG Path Breakdown:
    // M 0 0        -> Start at top-left
    // L 1000 0     -> Draw straight line to top-right
    // L 1000 50    -> Draw straight line down to bottom-right
    // Q 500 (50+B) 0 50 -> Draw a quadratic curve to bottom-left. The control point is in the dead center (500) and moves up/down by the 'bend' amount.
    // Z            -> Close the shape back to the start
    return `M 0 0 L 1000 0 L 1000 50 Q 500 ${50 + bend} 0 50 Z`;
  });

  return (
    // We use a negative top margin (-mt-1) to prevent the dreaded 1px gap
    // that sometimes appears between DOM elements.
    <div className="w-full h-24 sm:h-32 -mt-1 overflow-visible relative z-10 text-black">
      {/* preserveAspectRatio="none" ensures the SVG stretches to fill 
        the width of the screen regardless of device size.
      */}
      <svg
        viewBox="0 0 1000 120"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        <motion.path d={pathData} fill="currentColor" />
      </svg>
    </div>
  );
}
