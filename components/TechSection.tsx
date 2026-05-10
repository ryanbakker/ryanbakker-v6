"use client";

import { STACK_DATA, STACK_THEMES } from "@/constants";
import TechCard from "./TechCard";

function TechSection({
  activeIndex,
  onToggle,
}: {
  activeIndex: number;
  onToggle: (newIndex: number) => void;
}) {
  const activeData = STACK_DATA[activeIndex];
  const theme = STACK_THEMES[activeData.theme];

  const handleToggle = () => {
    onToggle((activeIndex + 1) % STACK_DATA.length);
  };

  return (
    <section
      className={`relative w-full py-24 transition-colors duration-700 ease-in-out ${theme.bgClass}`}
    >
      <div className="w-full max-w-6xl mx-auto px-4">
        {/* RELATIVE WRAPPER for Blueprint lines and the Grid */}
        <div className="relative w-full">
          {/* Blueprint lines (z-0) */}
          <div className="absolute top-[33.5%] md:top-[30.6%] left-0 w-[90%] h-px bg-white/20 z-0" />
          <div className="absolute top-[67.8%] md:top-[66%] left-[10%] w-[90%] h-px bg-white/20 z-0" />
          <div className="absolute top-[5%] left-[50%] w-px h-[90%] bg-white/20 z-0" />
          <div className="absolute top-[10%] left-[24.4%] w-px h-[80%] bg-white/20 z-0 hidden md:block" />
          <div className="absolute top-[15%] left-[75.5%] w-px h-[70%] bg-white/20 z-0 hidden md:block" />

          {/* Grid (z-10) */}
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 grid-rows-auto gap-5 md:gap-x-6 md:gap-y-8">
            {/* Cell 1: Header */}
            <div
              className={`flex flex-col justify-center items-center font-bold text-3xl tracking-widest text-white transition-colors duration-500 ${theme.cellClass} py-8 h-full min-h-40`}
            >
              <h4 className="border-t-4 border-b-4 border-white py-1 text-center leading-tight flex flex-col items-center gap-1 font-black">
                TECH <span className="h-1 w-[90%] bg-white rounded-none" />{" "}
                STACK
              </h4>
            </div>

            {/* Cell 2: Button */}
            <div className="flex items-end">
              <button
                onClick={handleToggle}
                className="flex items-center gap-4 bg-[#EBEBEB] w-full justify-between px-3 py-2.5 hover:bg-white transition-colors group cursor-pointer"
                style={{ color: theme.accentColor }}
              >
                <span className="font-bold text-lg">{activeData.name}</span>
                <span
                  className="text-white rounded-full p-1 transform group-hover:translate-x-1 transition-transform"
                  style={{ backgroundColor: theme.accentColor }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </button>
            </div>

            {/* Cell 3 & 4: Empty Grid Slots */}
            <div className="hidden md:block"></div>
            <div className="hidden md:block"></div>

            {/* Render tech cards (2 on mobile, up to 8 on desktop) */}
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className={`w-full h-full ${i >= 4 ? "hidden md:block" : ""}`}
              >
                <TechCard
                  cardIndex={i}
                  cellClass={theme.cellClass}
                  items={activeData.items}
                  icons={activeData.icons}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechSection;
