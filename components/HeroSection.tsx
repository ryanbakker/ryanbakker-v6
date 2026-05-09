"use client";

import { Button } from "@/components/ui/button";
import { socialLinks } from "@/constants";
import { ChevronsDown, GalleryVerticalEnd } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
} from "react";

/** Longer edge of this size (px) maps to ~1× base tilt; smaller assets tilt more. */
const TILT_REFERENCE_PX = 560;
const TILT_BASE_ROTATE_Y = 5.25;
const TILT_BASE_ROTATE_X = 3.95;
/** Clamp so tiny icons do not spin out of control and huge panels still tilt a bit. */
const TILT_SIZE_FACTOR_MIN = 0.42;
const TILT_SIZE_FACTOR_MAX = 3.15;
/** Stronger vertical (rotateX) response for every tilted piece except the main large blob. */
const TILT_VERTICAL_SCALE_NON_MAIN = 1.55;

function clamp(n: number, lo: number, hi: number) {
  return Math.min(hi, Math.max(lo, n));
}

function sizeFactorFromLongEdge(longEdgePx: number): number {
  const d = Math.max(longEdgePx, 1);
  return clamp(
    TILT_REFERENCE_PX / d,
    TILT_SIZE_FACTOR_MIN,
    TILT_SIZE_FACTOR_MAX,
  );
}

function buildTiltTransform(
  nx: number,
  ny: number,
  rotateYMax: number,
  rotateXMax: number,
  perspectivePx: number,
): string {
  return `perspective(${perspectivePx}px) rotateY(${nx * rotateYMax}deg) rotateX(${-ny * rotateXMax}deg)`;
}

type TiltLayerProps = {
  nx: number;
  ny: number;
  tracking: boolean;
  /** Scales only vertical tilt (`rotateX`); default `1` (used for the main hero blob). */
  verticalTiltScale?: number;
  /** Overall tilt intensity; default `1`. */
  intensity?: number;
  /** Whether the parent state is paused (e.g. hovering interactive content). */
  isPaused?: boolean;
  /** Optional scale factor to apply when paused; e.g. 1.02 for a subtle pop. */
  scaleOnPause?: number;
  className?: string;
  style?: CSSProperties;
  children: React.ReactNode;
};

function TiltLayer({
  nx,
  ny,
  tracking,
  verticalTiltScale = 1,
  intensity = 1,
  isPaused = false,
  scaleOnPause = 1,
  className,
  style,
  children,
}: TiltLayerProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [longEdgePx, setLongEdgePx] = useState<number | null>(null);

  useLayoutEffect(() => {
    const el = rootRef.current;
    if (!el || typeof ResizeObserver === "undefined") return;

    const measure = () => {
      const r = el.getBoundingClientRect();
      setLongEdgePx(Math.max(r.width, r.height));
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const dim = longEdgePx == null ? TILT_REFERENCE_PX : Math.max(longEdgePx, 1);
  const factor = sizeFactorFromLongEdge(dim);
  const rotateYMax = TILT_BASE_ROTATE_Y * factor * intensity;
  const rotateXMax =
    TILT_BASE_ROTATE_X * factor * verticalTiltScale * intensity;
  const perspectivePx = Math.min(
    980,
    Math.max(500, Math.round(360 + dim * 0.72)),
  );

  const s = isPaused ? scaleOnPause : 1;
  const hasTilt = intensity > 0;
  const hasScale = s !== 1;

  const transform = hasTilt
    ? `${buildTiltTransform(
        nx,
        ny,
        rotateYMax,
        rotateXMax,
        perspectivePx,
      )} scale(${s})`
    : hasScale
      ? `scale(${s})`
      : "none";

  return (
    <div
      ref={rootRef}
      className={className}
      style={{
        ...style,
        transform,
        transformStyle: hasTilt ? "preserve-3d" : "flat",
        transition:
          tracking && !isPaused
            ? "transform 75ms linear, filter 420ms cubic-bezier(0.22, 1, 0.36, 1)"
            : "transform 420ms cubic-bezier(0.22, 1, 0.36, 1), filter 420ms cubic-bezier(0.22, 1, 0.36, 1)",
        willChange: hasTilt ? "transform" : "auto",
        WebkitFontSmoothing: "antialiased",
      }}
    >
      {children}
    </div>
  );
}

export function HeroSection({ data }: { data?: any }) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [tilt, setTilt] = useState({ nx: 0, ny: 0, tracking: false });
  const [isPaused, setIsPaused] = useState(false);

  const heroData = data.data;

  const onSectionPointerMove = useCallback(
    (e: ReactPointerEvent<HTMLElement>) => {
      if (isPaused) return;
      const el = sectionRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const w = Math.max(r.width, 1);
      const h = Math.max(r.height, 1);
      const nx = Math.min(1, Math.max(-1, ((e.clientX - r.left) / w) * 2 - 1));
      const ny = Math.min(1, Math.max(-1, ((e.clientY - r.top) / h) * 2 - 1));
      setTilt({ nx, ny, tracking: true });
    },
    [isPaused],
  );

  const onSectionPointerLeave = useCallback(() => {
    setTilt({ nx: 0, ny: 0, tracking: false });
    setIsPaused(false);
  }, []);

  const onButtonPointerMove = useCallback(
    (e: ReactPointerEvent<HTMLButtonElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      e.currentTarget.style.setProperty("--x", `${x}%`);
      e.currentTarget.style.setProperty("--y", `${y}%`);
    },
    [],
  );

  return (
    <section
      ref={sectionRef}
      onPointerMove={onSectionPointerMove}
      onPointerLeave={onSectionPointerLeave}
      className="section-parent w-full min-h-[50vh] radial-blue bg-fixed flex items-center justify-center pr-1.5 md:pr-4 p-4 mx-auto overflow-hidden"
    >
      <TiltLayer
        nx={tilt.nx}
        ny={tilt.ny}
        tracking={tilt.tracking}
        intensity={0}
        className="flex flex-col md:flex-row w-full items-center justify-between md:gap-8"
      >
        <div
          onPointerEnter={() => setIsPaused(true)}
          onPointerLeave={() => setIsPaused(false)}
          className="@container relative w-full max-w-173.75 aspect-695/607 mt-10 md:mt-14 mb-10 mx-auto"
        >
          {/* Decorative blobs sit under the main card + copy so the card can tilt as one layer */}
          {/* LAYER 2: Top-Left Blob (Middle Layer) */}
          <div className="absolute top-[-7%] left-[-3%] md:left-[-6%] z-20 w-[33%]">
            <TiltLayer
              nx={tilt.nx}
              ny={tilt.ny}
              tracking={tilt.tracking}
              verticalTiltScale={TILT_VERTICAL_SCALE_NON_MAIN}
              intensity={0.6}
              className="w-full"
            >
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
                    shapeRendering="crispEdges"
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
            </TiltLayer>
          </div>

          {/* LAYER 2: Bottom-Right Blob (Middle Layer) */}
          <div className="absolute bottom-[3%] right-[2%] z-20 w-[39%] hidden md:block">
            <TiltLayer
              nx={tilt.nx}
              ny={tilt.ny}
              tracking={tilt.tracking}
              verticalTiltScale={TILT_VERTICAL_SCALE_NON_MAIN}
              className="w-full"
            >
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
                    shapeRendering="crispEdges"
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
            </TiltLayer>
          </div>
          {/* Main hero shape (Background Blob) */}
          <TiltLayer
            nx={tilt.nx}
            ny={tilt.ny}
            tracking={tilt.tracking}
            intensity={0.6}
            isPaused={isPaused}
            scaleOnPause={1.015}
            style={{
              filter: isPaused
                ? "drop-shadow(0 0 45px rgba(200, 100, 255, 0.18))"
                : "drop-shadow(0 0 0px rgba(200, 100, 255, 0))",
            }}
            className="absolute inset-0 z-10 pointer-events-none"
          >
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
          </TiltLayer>

          {/* Foreground Copy (Independent Tilt) */}
          <TiltLayer
            nx={tilt.nx}
            ny={tilt.ny}
            tracking={tilt.tracking}
            intensity={0}
            isPaused={isPaused}
            scaleOnPause={1}
            className="absolute inset-0 z-20 pointer-events-none"
          >
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
                      onPointerMove={onButtonPointerMove}
                      iconLeft={<GalleryVerticalEnd />}
                      className="w-fit py-2 px-6"
                    >
                      View Projects
                    </Button>
                  </Link>
                  <Link href="/#continue">
                    <Button
                      variant="refined-outline"
                      onPointerMove={onButtonPointerMove}
                      iconLeft={<ChevronsDown />}
                      className="w-fit"
                    >
                      Continue Reading
                    </Button>
                  </Link>
                </div>
                <div className="hidden md:flex flex-row items-center gap-4 mt-1">
                  {socialLinks.map(({ href, label, Icon }) => (
                    <Link
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="text-white transition-all hover:text-[#ebcffb]"
                    >
                      <Button variant="glass-icon" size="icon">
                        <Icon aria-hidden />
                      </Button>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </TiltLayer>
        </div>

        <div className="max-w-[55vw] md:max-w-81.25 w-full ml-auto mr-[8%] mt-[-28%] md:mt-0 md:mx-auto z-30">
          <TiltLayer
            nx={tilt.nx}
            ny={tilt.ny}
            tracking={tilt.tracking}
            verticalTiltScale={TILT_VERTICAL_SCALE_NON_MAIN}
            className="block translate-x-[-11%]"
          >
            <Image
              src="/hero/hero-slice-top.svg"
              height={800}
              width={800}
              alt="Hero Slice Top"
            />
          </TiltLayer>

          <TiltLayer
            nx={tilt.nx}
            ny={tilt.ny}
            tracking={tilt.tracking}
            verticalTiltScale={TILT_VERTICAL_SCALE_NON_MAIN}
            className="block"
          >
            <Image
              src="/hero/hero-slice-mid.svg"
              height={800}
              width={800}
              alt="Hero Slice Middle"
            />
          </TiltLayer>

          <TiltLayer
            nx={tilt.nx}
            ny={tilt.ny}
            tracking={tilt.tracking}
            verticalTiltScale={TILT_VERTICAL_SCALE_NON_MAIN}
            className="block translate-x-[-6%]"
          >
            <Image
              src="/hero/hero-slice-bot.svg"
              height={800}
              width={800}
              alt="Hero Slice Bottom"
            />
          </TiltLayer>
        </div>

        {/* Mobile Buttons & Social  */}
        <div
          onPointerEnter={() => setIsPaused(true)}
          onPointerLeave={() => setIsPaused(false)}
          className="mt-6 w-full flex md:hidden flex-col items-center gap-5 pr-2"
        >
          <div className="flex flex-col lg:flex-row lg:items-center gap-4 w-full">
            <Link href="/projects">
              <Button
                size="lg"
                variant="rainbow"
                onPointerMove={onButtonPointerMove}
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
                onPointerMove={onButtonPointerMove}
                iconLeft={<ChevronsDown />}
                className="w-full px-10"
              >
                Continue Reading
              </Button>
            </Link>
          </div>
          <div className="flex md:hidden flex-row items-center gap-5 mt-3 mb-8 scale-135">
            {socialLinks.map(({ href, label, Icon }) => (
              <Link
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-white transition-all hover:text-[#ebcffb]"
              >
                <Icon aria-hidden />
              </Link>
            ))}
          </div>
        </div>
      </TiltLayer>
    </section>
  );
}
