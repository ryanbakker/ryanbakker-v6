"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import { cn } from "@/lib/utils";

declare global {
  interface Window {
    VANTA: any;
  }
}

interface VantaBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  // Added color props that accept standard hex strings
  foreground?: string;
  background?: string;
}

// Helper to convert standard CSS hex ("#ff0000") to Vanta's required number format (0xff0000)
const hexToNumber = (hex: string) => parseInt(hex.replace("#", "0x"), 16);

export function VantaBackground({
  children,
  className,
  // Set your default colors here so it doesn't break if you forget to pass the props
  foreground = "#2d7cb6",
  background = "#03132d",
}: VantaBackgroundProps) {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  const initVanta = () => {
    if (!vantaEffect && window.VANTA && vantaRef.current) {
      setVantaEffect(
        window.VANTA.TOPOLOGY({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          // Apply the parsed colors
          color: hexToNumber(foreground),
          backgroundColor: hexToNumber(background),
        }),
      );
    }
  };

  // 1. Destroy Vanta on unmount
  useEffect(() => {
    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };
  }, [vantaEffect]);

  // 2. Dynamically update colors if the props change without reloading the canvas
  useEffect(() => {
    if (vantaEffect) {
      vantaEffect.setOptions({
        color: hexToNumber(foreground),
        backgroundColor: hexToNumber(background),
      });
    }
  }, [foreground, background, vantaEffect]);

  return (
    <>
      <Script src="/scripts/p5.min.js" strategy="afterInteractive" />
      <Script
        src="/scripts/vanta.topology.min.js"
        strategy="afterInteractive"
        onLoad={initVanta}
      />

      <div
        ref={vantaRef}
        className={cn(
          "overflow-hidden",
          children ? "relative w-full min-h-screen" : "block",
          className,
        )}
      >
        {children && (
          <div className="relative z-10 h-full w-full">{children}</div>
        )}
      </div>
    </>
  );
}
