"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Media } from "@/payload-types";

export interface Inspiration {
  title: string;
  description: string;
  image: Media | number;
  link: string;
}

function InspoSection({
  inspirations,
}: {
  inspirations?: Inspiration[] | null;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Handle responsive check & prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind's 'md' breakpoint is 768px
    };

    // Check on mount
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const displayInspirations = inspirations || [];

  // 3 items + 1 button = 4 on mobile
  // 7 items + 1 button = 8 on md and up
  // Defaulting to 7 for the server render to match desktop first
  const staticCount = mounted && isMobile ? 3 : 7;
  const hasMore = displayInspirations.length > staticCount;

  const staticItems = displayInspirations.slice(0, staticCount);
  const dynamicItems = displayInspirations.slice(staticCount);

  return (
    <section className="section-parent pt-18 pb-28 radial-lavendar overflow-hidden">
      <div className="section-child w-full h-full max-w-7xl mx-auto text-neutral-950">
        <div className="px-4 lg:px-0 w-full flex justify-between items-end">
          <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">
            External Inspiration
          </h3>
        </div>

        {/* Main Container */}
        <div className="flex flex-col h-auto w-full mt-4">
          <motion.ul
            layout
            transition={{ duration: 0.4, ease: "circOut" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full"
          >
            {/* Always visible static items */}
            {staticItems.map((item, index) => {
              const imageUrl =
                typeof item.image === "object"
                  ? item.image?.url
                  : String(item.image);

              return (
                <li
                  key={`static-${index}`}
                  className="group relative overflow-hidden cursor-pointer flex flex-col justify-center items-center transition-all duration-500 bg-white/20 rounded-xl h-62.5 lg:h-[25vh]"
                >
                  <Link
                    href={item.link}
                    target="_blank"
                    className="w-full h-full flex items-center justify-center"
                  >
                    <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                      {imageUrl && (
                        <Image
                          src={imageUrl}
                          alt={item.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 25vw"
                          className="object-cover"
                        />
                      )}
                      <div className="absolute inset-0 bg-black/40" />
                    </div>
                    <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white rounded-full p-1.5">
                      <svg
                        width="14"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-black"
                      >
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </svg>
                    </div>
                    <span className="relative z-10 text-6xl font-light text-neutral-400 group-hover:text-white transition-colors duration-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="absolute left-4 bottom-4 z-10 text-left">
                      <h5 className="text-base font-bold text-neutral-900 group-hover:text-white transition-colors duration-500 tracking-tight">
                        {item.title}
                      </h5>
                      <p className="text-xs tracking-tighter text-neutral-600 group-hover:text-neutral-300 transition-colors duration-500">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                </li>
              );
            })}

            {/* Dynamic Items - Fade only, cascading effect */}
            <AnimatePresence>
              {isExpanded &&
                dynamicItems.map((item, index) => {
                  const imageUrl =
                    typeof item.image === "object"
                      ? item.image?.url
                      : String(item.image);

                  return (
                    <motion.li
                      key={`dynamic-${index}`}
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: {
                          delay: index * 0.04,
                          duration: 0.4,
                        },
                      }}
                      exit={{
                        opacity: 0,
                        transition: { duration: 0.2 },
                      }}
                      className="group relative overflow-hidden cursor-pointer flex flex-col justify-center items-center transition-all duration-500 bg-white/20 rounded-xl h-62.5 lg:h-[25vh]"
                    >
                      <Link
                        href={item.link}
                        className="w-full h-full flex items-center justify-center"
                      >
                        <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                          {imageUrl && (
                            <Image
                              src={imageUrl}
                              alt={item.title}
                              fill
                              sizes="(max-width: 768px) 100vw, 25vw"
                              className="object-cover"
                            />
                          )}
                          <div className="absolute inset-0 bg-black/40" />
                        </div>
                        <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white rounded-full p-1.5">
                          <svg
                            width="14"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-black"
                          >
                            <line x1="7" y1="17" x2="17" y2="7"></line>
                            <polyline points="7 7 17 7 17 17"></polyline>
                          </svg>
                        </div>
                        <span className="relative z-10 text-6xl font-light text-neutral-400 group-hover:text-white transition-colors duration-500">
                          {/* Dynamically assign numbers based on the active static limit */}
                          {String(index + staticCount + 1).padStart(2, "0")}
                        </span>
                        <div className="absolute left-4 bottom-4 z-10 text-left">
                          <h5 className="text-lg font-bold text-neutral-900 group-hover:text-white transition-colors duration-500">
                            {item.title}
                          </h5>
                          <p className="text-xs text-neutral-600 group-hover:text-neutral-300 transition-colors duration-500">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    </motion.li>
                  );
                })}
            </AnimatePresence>

            {/* Persistent Toggle Button - Translates directly down to bottom right */}
            {hasMore && (
              <motion.li
                layout="position"
                key="toggle-button"
                transition={{
                  layout: {
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  },
                }}
                onClick={() => setIsExpanded(!isExpanded)}
                className={cn(
                  "group relative overflow-hidden cursor-pointer flex flex-col justify-between p-6 transition-all duration-300 rounded-xl",
                  "bg-linear-to-br from-[#220B3B] to-[#341159] hover:from-[#2D0D4A] hover:to-[#451875] border border-white/5",
                  "lg:col-start-4", // Ensures it's always in the far right column
                )}
              >
                <motion.h5
                  layout="position"
                  className="text-white text-xl font-bold uppercase tracking-tight"
                >
                  {isExpanded ? "Show Less" : "View More"}
                </motion.h5>

                <motion.div
                  layout="position"
                  className={cn(
                    "flex gap-1 self-end transition-all duration-300",
                    isExpanded
                      ? "rotate-180"
                      : "-translate-x-1 group-hover:translate-x-0",
                  )}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 111 94"
                    fill="none"
                    className="text-white opacity-40 group-hover:opacity-100 transition-opacity"
                  >
                    <path
                      d="M2.4 2.4L49.5 44.7C50.1 45.3 50.5 46.1 50.5 47C50.5 47.8 50.1 48.6 49.5 49.2L6.8 91.5"
                      stroke="currentColor"
                      strokeWidth="12"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 111 94"
                    fill="none"
                    className="text-white"
                  >
                    <path
                      d="M2.4 2.4L49.5 44.7C50.1 45.3 50.5 46.1 50.5 47C50.5 47.8 50.1 48.6 49.5 49.2L6.8 91.5"
                      stroke="currentColor"
                      strokeWidth="12"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.div>
              </motion.li>
            )}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}

export default InspoSection;
