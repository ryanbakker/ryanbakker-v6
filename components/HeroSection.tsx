"use client";

import { Button } from "@/components/ui/button";
import { HERO_SOCIAL_LINKS } from "@/constants";
import { ChevronsDown, GalleryVerticalEnd } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { DotPattern } from "@/components/DotPattern";

export function HeroSection({ data }: { data?: any }) {
  const heroData = data.data;

  return (
    <DotPattern
      className="radial-blue bg-transparent"
      baseColor="#1e293b"
      glowColor="#3b82f6"
      glowIntensity={1.2}
    >
      <section className="section-parent w-full min-h-[50vh] flex items-center justify-center pr-1.5 md:pr-4 p-4 mx-auto overflow-hidden">
        <div className="flex flex-col md:flex-row w-full items-center justify-between md:gap-8 relative z-10">
          <div className="relative w-full max-w-173.75 aspect-695/607 mt-10 md:mt-14 mb-10 mx-auto">
            {/* Decorative blobs */}
            {/* LAYER 2: Top-Left Blob */}
            <div className="absolute top-[-7%] left-[-3%] md:left-[-6%] z-20 w-[33%]">
              <svg
                className="w-full h-auto"
                viewBox="0 0 233 99"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_diif_25_315)">
                  <path
                    d="M225.222 44.5686C214.147 66.7247 192.162 81.3549 167.448 83.0158L51.9526 90.7775C26.0058 92.5212 3.99998 71.9446 3.99998 45.9393C3.99998 21.12 24.12 1.00002 48.9393 1.00002L198.292 1C220.671 1 235.228 24.5505 225.222 44.5686Z"
                    fill="url(#paint0_linear_25_315)"
                    shapeRendering="geometricPrecision"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_diif_25_315"
                    x="0"
                    y="0"
                    width="232.438"
                    height="98.8806"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_25_315"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_25_315"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="-0.5" dy="-0.8" />
                    <feGaussianBlur stdDeviation="0.25" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"
                    />
                    <feBlend
                      mode="screen"
                      in2="shape"
                      result="effect2_innerShadow_25_315"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="0.3" dy="0.8" />
                    <feGaussianBlur stdDeviation="0.25" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.9 0"
                    />
                    <feBlend
                      mode="screen"
                      in2="effect2_innerShadow_25_315"
                      result="effect3_innerShadow_25_315"
                    />
                    <feGaussianBlur
                      stdDeviation="0.5"
                      result="effect4_foregroundBlur_25_315"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_25_315"
                    x1="22.1716"
                    y1="92.6364"
                    x2="74.5077"
                    y2="-63.4008"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#D78EFF" />
                    <stop
                      offset="0.0384615"
                      stopColor="#B37AF0"
                      stopOpacity="0.8"
                    />
                    <stop
                      offset="0.336538"
                      stopColor="#253268"
                      stopOpacity="0.8"
                    />
                    <stop offset="0.721154" stopColor="#290046" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* LAYER 2: Bottom-Right Blob */}
            <div className="absolute bottom-[3%] right-[2%] z-20 w-[39%] hidden md:block">
              <svg
                className="w-full h-auto"
                viewBox="0 0 271 162"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_diif_25_314)">
                  <path
                    d="M8.4139 85.5621C22.2466 45.1627 58.3958 16.5614 100.894 12.392L214.677 1.22897C242.315 -1.48259 266.266 20.2333 266.266 48.0044V106.168C266.266 132.125 245.223 153.168 219.266 153.168L51.0373 153.168C18.7961 153.168 -3.87249 121.445 6.57162 90.9427L8.4139 85.5621Z"
                    fill="url(#paint0_linear_25_314)"
                    shapeRendering="geometricPrecision"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_diif_25_314"
                    x="0"
                    y="0"
                    width="270.266"
                    height="161.168"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_25_314"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_25_314"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="-0.5" dy="-0.8" />
                    <feGaussianBlur stdDeviation="0.25" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"
                    />
                    <feBlend
                      mode="screen"
                      in2="shape"
                      result="effect2_innerShadow_25_314"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="0.3" dy="0.8" />
                    <feGaussianBlur stdDeviation="0.25" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.9 0"
                    />
                    <feBlend
                      mode="screen"
                      in2="effect2_innerShadow_25_314"
                      result="effect3_innerShadow_25_314"
                    />
                    <feGaussianBlur
                      stdDeviation="0.5"
                      result="effect4_foregroundBlur_25_314"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_25_314"
                    x1="245.253"
                    y1="-1.53029"
                    x2="129.509"
                    y2="234.847"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#D78EFF" />
                    <stop
                      offset="0.0384615"
                      stopColor="#B37AF0"
                      stopOpacity="0.8"
                    />
                    <stop
                      offset="0.336538"
                      stopColor="#253268"
                      stopOpacity="0.8"
                    />
                    <stop offset="0.721154" stopColor="#290046" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Main hero shape (Background Blob) */}
            <div className="absolute inset-0 z-10 pointer-events-none">
              <svg
                className="absolute inset-0 z-0 w-full h-full"
                viewBox="0 0 695 607"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid meet"
              >
                <g filter="url(#filter0_diif_25_313)">
                  <path
                    d="M604.206 444.086C594.495 488.085 558.713 521.573 514.168 528.353L58.072 597.77C29.6245 602.1 4.00006 580.081 4.00006 551.306L4.00001 48.0001C4.00001 22.0427 25.0426 1.00006 51 1.00006L643.495 1.00001C673.536 1 695.865 28.7952 689.391 58.1296L604.206 444.086Z"
                    fill="url(#paint0_linear_25_313)"
                    shapeRendering="crispEdges"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_diif_25_313"
                    x="0"
                    y="0"
                    width="694.514"
                    height="606.315"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_25_313"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_25_313"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="-0.5" dy="-0.8" />
                    <feGaussianBlur stdDeviation="0.25" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"
                    />
                    <feBlend
                      mode="screen"
                      in2="shape"
                      result="effect2_innerShadow_25_313"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="0.3" dy="0.8" />
                    <feGaussianBlur stdDeviation="0.25" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.9 0"
                    />
                    <feBlend
                      mode="screen"
                      in2="effect2_innerShadow_25_313"
                      result="effect3_innerShadow_25_313"
                    />
                    <feGaussianBlur
                      stdDeviation="0.5"
                      result="effect4_foregroundBlur_25_313"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_25_313"
                    x1="56.1965"
                    y1="597.129"
                    x2="600.146"
                    y2="-118.951"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#D78EFF" />
                    <stop
                      offset="0.0384615"
                      stopColor="#B37AF0"
                      stopOpacity="0.8"
                    />
                    <stop
                      offset="0.336538"
                      stopColor="#253268"
                      stopOpacity="0.8"
                    />
                    <stop offset="0.721154" stopColor="#290046" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Foreground Copy */}
            <div className="absolute inset-0 z-20 pointer-events-none">
              <div className="relative z-10 flex h-full w-full flex-col justify-center p-4 sm:p-10 text-white md:p-16 pointer-events-auto">
                <h6 className="text-white/80 font-bold text-sm md:text-base">
                  Hello, I&apos;m
                </h6>

                <h1 className="font-bold uppercase tracking-[2%] text-[clamp(2.5rem,10.5cqw,4.5rem)] -ml-0.5 line-clamp-1 -mt-2">
                  Ryan Bakker
                </h1>

                <div className="flex flex-row items-center gap-0.5 -mt-0.5 text-[clamp(1.4rem,4.75cqw,2.25rem)]">
                  <h2 className="font-black uppercase text-[#150024] bg-white w-fit">
                    {heroData.heroCreativeLabel}
                  </h2>

                  <svg
                    className="block h-[1em] w-[1em] shrink-0"
                    viewBox="0 0 44 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid meet"
                    aria-hidden
                  >
                    <path
                      d="M31.1667 40.3334H29.3333C27.3884 40.3334 25.5232 39.5607 24.1479 38.1855C22.7726 36.8102 22 34.9449 22 33V11C22 9.0551 22.7726 7.18984 24.1479 5.81457C25.5232 4.4393 27.3884 3.66669 29.3333 3.66669H31.1667"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.8333 40.3334H14.6666C16.6115 40.3334 18.4768 39.5607 19.852 38.1855C21.2273 36.8102 21.9999 34.9449 21.9999 33V31.1667"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.8333 3.66669H14.6666C16.6115 3.66669 18.4768 4.4393 19.852 5.81457C21.2273 7.18984 21.9999 9.0551 21.9999 11V12.8334"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div className="flex flex-col gap-5 mt-6">
                  <p className="text-xs md:text-sm text-[#F7E9FF] max-w-[88%] pb-10 md:pb-0">
                    {heroData.heroDescription}
                  </p>
                  <div className="hidden md:flex flex-col lg:flex-row lg:items-center gap-2">
                    <Link href="/projects">
                      <Button
                        variant="rainbow"
                        iconLeft={<GalleryVerticalEnd />}
                        className="w-fit py-2 px-6"
                      >
                        View Projects
                      </Button>
                    </Link>
                    <Link href="/#continue">
                      <Button
                        variant="refined-outline"
                        iconLeft={<ChevronsDown />}
                        className="w-fit"
                      >
                        Continue Reading
                      </Button>
                    </Link>
                  </div>
                  <div className="hidden md:flex flex-row items-center gap-4 mt-1">
                    {HERO_SOCIAL_LINKS.map(({ href, label, Icon }) => (
                      <Link
                        key={href}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="text-[#1A0E35] transition-all hover:text-[#442A55]"
                      >
                        <Button variant="glass-icon" size="icon">
                          <Icon aria-hidden />
                        </Button>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-[65vw] md:max-w-100 w-full ml-auto mr-[8%] mt-[-32%] md:mt-0 md:mx-auto z-30">
            <div className="block">
              <Image
                src="/hero_img.png"
                height={1000}
                width={1000}
                alt="Hero Image"
                unoptimized
                priority
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Mobile Buttons & Social  */}
          <div className="mt-6 w-full flex md:hidden flex-col items-center gap-5 pr-2 relative z-30">
            <div className="flex flex-col lg:flex-row lg:items-center gap-4 w-full">
              <Link href="/projects">
                <Button
                  size="lg"
                  variant="rainbow"
                  iconLeft={<GalleryVerticalEnd />}
                  className="w-full py-2 px-10"
                >
                  View Projects
                </Button>
              </Link>
              <Link href="/#continue">
                <Button
                  size="lg"
                  variant="refined-outline"
                  iconLeft={<ChevronsDown />}
                  className="w-full px-10"
                >
                  Continue Reading
                </Button>
              </Link>
            </div>
            <div className="flex md:hidden flex-row items-center gap-5 mt-3 mb-8 scale-135">
              {HERO_SOCIAL_LINKS.map(({ href, label, Icon }) => (
                <Link
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-white transition-all hover:text-[#ebcffb]"
                >
                  <Icon aria-hidden className="h-7 w-7" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </DotPattern>
  );
}
