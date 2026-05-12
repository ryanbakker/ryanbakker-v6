"use client";

import EducationCard from "./EducationCard";
import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

export interface EducationItem {
  title: string;
  completionYears: string;
  focus: string;
  providerLogo:
    | string
    | {
        url?: string | null;
        alt?: string | null;
      }
    | null;
  primarySubject: string;
  secondarySubject: string;
  tertiarySubject: string;
  mission: string | React.ReactNode;
}

interface StackingCardProps {
  edu: EducationItem;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

function StackingCard({ edu, index, total, progress }: StackingCardProps) {
  const isFirst = index === 0;
  const isLast = index === total - 1;

  const step = total > 1 ? 1 / (total - 1) : 1;

  // This card starts sliding in relative to the previous card's slot
  const start = (index - 1) * step;
  const slideEnd = start + step * 0.8;

  // This card starts fading out when the next card starts sliding in
  const nextStart = index * step;
  const nextSlideEnd = nextStart + step * 0.8;

  // slideProgress: 0 (offscreen) to 1 (active)
  const slideProgress = useTransform(progress, [start, slideEnd], [0, 1], {
    clamp: true,
  });

  // fadeProgress: 0 (visible) to 1 (faded out)
  const fadeProgress = useTransform(
    progress,
    [nextStart, nextSlideEnd],
    [0, 1],
    { clamp: true },
  );

  // For isFirst, slideProgress is always 1
  // For isLast, fadeProgress is always 0

  const x = useTransform(slideProgress, (v) =>
    isFirst ? "0%" : `${110 * (1 - v)}%`,
  );

  const opacity = useTransform([slideProgress, fadeProgress], ([s, f]) => {
    const base = isFirst ? 1 : 0.1 + 0.9 * (s as number);
    const fade = isLast ? 0 : (f as number);
    return base * (1 - fade);
  });

  return (
    <motion.div
      style={{
        x,
        opacity,
        zIndex: index,
      }}
      className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none"
    >
      <div className="w-full h-full shadow-2xl rounded-4xl bg-[#F0F0F5] pointer-events-auto">
        <EducationCard
          index={index}
          progress={isFirst ? 1 : slideProgress}
          title={edu.title}
          years={edu.completionYears}
          focus={edu.focus}
          subjects={{
            primary: edu.primarySubject,
            secondary: edu.secondarySubject,
            tertiary: edu.tertiarySubject,
          }}
          mission={edu.mission}
          logo={edu.providerLogo}
          provider={edu.title}
        />
      </div>
    </motion.div>
  );
}

interface EducationSectionProps {
  quote?: string | null;
  quoteAuthor?: string | null;
  bodyText?: string | React.ReactNode | null;
  items?: EducationItem[] | null;
  extracurricularActivities?: { activityName: string }[] | null;
}

function EducationSection({
  quote,
  quoteAuthor,
  bodyText,
  items,
  extracurricularActivities,
}: EducationSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const educationItems = items || [];

  return (
    <section
      ref={containerRef}
      className="relative h-[500vh] lg:h-[300vh] bg-transparent"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden radial-blue flex items-center">
        <div className="section-child flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-6 lg:gap-24 w-full h-full py-2 md:py-16">
          {/* Left Side: Content */}
          <div className="lg:max-w-[40%] pb-2 lg:pb-8 z-10 text-left">
            <h3 className="text-xl font-bold mb-1.5 lg:mb-3 uppercase tracking-tight text-white">
              Education
            </h3>
            {quote && (
              <p className="font-crimson italic text-base md:text-xl leading-tight text-white max-w-100">
                &quot;{quote}&quot; &nbsp; &nbsp; &nbsp; &mdash;&nbsp;{" "}
                {quoteAuthor}
              </p>
            )}

            <div className="font-inter mt-3 md:mt-8 text-xs! md:text-base leading-5 md:leading-5.5 tracking-tight font-light text-white/80 [&_p]:mb-3 last:[&_p]:mb-0">
              {bodyText}
            </div>

            {extracurricularActivities &&
              extracurricularActivities.length > 0 && (
                <div className="mt-6 md:mt-12 hidden md:block">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-white/60 mb-3">
                    Extracurricular
                  </h4>
                  <ul className="flex flex-col gap-1.5">
                    {extracurricularActivities.map((activity, index) => (
                      <li
                        key={index}
                        className="text-white text-sm! md:text-base font-light font-inter list-inside list-disc"
                      >
                        {activity.activityName}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
          </div>

          {/* Right Side: Animated Cards */}
          <div className="w-full lg:w-[55%] flex flex-col gap-4 md:gap-10">
            <div className="relative w-full h-110 sm:h-112.5 flex items-center justify-center overflow-visible">
              {educationItems.map((edu, index) => (
                <StackingCard
                  key={index}
                  edu={edu}
                  index={index}
                  total={educationItems.length}
                  progress={scrollYProgress}
                />
              ))}
            </div>

            {/* Progress Bar */}
            <div className="w-full flex justify-center mb-2">
              <div className="h-0.5 w-1/4 bg-white/30 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-white rounded-full"
                  style={{
                    scaleX: scrollYProgress,
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
