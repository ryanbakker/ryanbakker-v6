"use client";

import { EDUCATION_DATA } from "@/constants";
import EducationCard from "./EducationCard";
import { useRef, useState, useEffect } from "react";

interface StackingCardProps {
  edu: (typeof EDUCATION_DATA)[0];
  index: number;
  total: number;
  progress: number;
}

function StackingCard({ edu, index, total, progress }: StackingCardProps) {
  const isFirst = index === 0;
  const isLast = index === total - 1;

  // For snapping logic:
  // Progress 0.0 -> Card 1 fully visible
  // Progress 0.5 -> Card 2 fully visible
  // Progress 1.0 -> Card 3 fully visible
  // (Assuming 3 cards total)

  const step = 1 / (total - 1);

  // This card starts sliding in relative to the previous card's slot
  const start = (index - 1) * step;
  const slideEnd = start + step * 0.8;

  // This card starts fading out when the next card starts sliding in
  const nextStart = index * step;
  const nextSlideEnd = nextStart + step * 0.8;

  // slideProgress: 0 (offscreen) to 1 (active)
  let slideProgress = 1;
  if (!isFirst) {
    slideProgress = Math.min(
      Math.max((progress - start) / (slideEnd - start), 0),
      1,
    );
  }

  // fadeProgress: 0 (visible) to 1 (faded out)
  let fadeProgress = 0;
  if (!isLast) {
    fadeProgress = Math.min(
      Math.max((progress - nextStart) / (nextSlideEnd - nextStart), 0),
      1,
    );
  }

  // Position: Card 0 stays at 0%, others slide from 110%
  const x = isFirst ? "0%" : `${110 * (1 - slideProgress)}%`;

  // Opacity: stays at low (0.1) until it slides in, then fades to 0 when next card comes
  const baseOpacity = isFirst ? 1 : 0.1 + 0.9 * slideProgress;
  const opacity = baseOpacity * (1 - fadeProgress);

  return (
    <div
      style={{
        transform: `translateX(${x})`,
        opacity,
        zIndex: index,
        willChange: "transform, opacity",
      }}
      className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none"
    >
      <div className="w-full h-full shadow-2xl rounded-4xl bg-[#F0F0F5] pointer-events-auto">
        <EducationCard
          index={index}
          progress={isFirst ? 1 : slideProgress}
          {...edu}
        />
      </div>
    </div>
  );
}

function EducationSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let rafId: number;

    const updateProgress = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalHeight = rect.height;

      const distanceScrolled = -rect.top;
      const totalScrollable = totalHeight - windowHeight;

      const p = Math.min(Math.max(distanceScrolled / totalScrollable, 0), 1);
      setProgress(p);
      rafId = requestAnimationFrame(updateProgress);
    };

    rafId = requestAnimationFrame(updateProgress);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-transparent">
      <div className="sticky top-0 h-screen w-full overflow-hidden radial-blue flex items-center">
        <div className="section-child flex flex-col lg:flex-row justify-between items-center lg:gap-24 w-full h-full py-16">
          {/* Left Side: Content */}
          <div className="lg:max-w-[40%] pb-8 z-10">
            <h3 className="text-xl font-bold mb-3 uppercase tracking-tight text-white">
              Education
            </h3>
            <p className="font-crimson italic text-xl leading-tight text-white">
              &quot;The beautiful thing about learning is that no one
              <br />
              can take it away from you.&quot; &nbsp; &nbsp;{" "}
              <span> — B.B. King</span>
            </p>

            <p className="font-inter mt-12 leading-tight tracking-tight font-light text-white/80">
              Learning is a core part of who I am. The most fundamental
              characteristic I love in a person is a sense of curiosity.
              Learning is a skill I&apos;m actively working on, including
              getting better at asking questions, and optimising the best
              methods for me to learn effectively and efficiently.
              <br /> <br />
              Although I am returning to studies at twenty three, I&apos;m
              loving every second of it, and feel I value it more than I ever
              have in the past.
            </p>
          </div>

          {/* Right Side: Animated Cards */}
          <div className="w-full lg:w-[55%] flex flex-col gap-10">
            <div className="relative w-full h-[450px] flex items-center justify-center overflow-visible">
              {EDUCATION_DATA.map((edu, index) => (
                <StackingCard
                  key={index}
                  edu={edu}
                  index={index}
                  total={EDUCATION_DATA.length}
                  progress={progress}
                />
              ))}
            </div>

            {/* Progress Bar */}
            <div className="w-full flex justify-center mb-4">
              <div className="h-0.5 w-1/4 bg-white/30 rounded-full overflow-hidden">
                <div
                  className="h-full bg-white rounded-full"
                  style={{
                    transform: `scaleX(${progress})`,
                    transformOrigin: "left",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EducationSection;
