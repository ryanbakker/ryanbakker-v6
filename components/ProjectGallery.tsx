"use client";

import { useState } from "react";
import Image from "next/image";
import { Media } from "@/payload-types";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectGalleryProps {
  images?:
    | {
        image: number | Media;
        id?: string | null;
      }[]
    | null;
}

export function ProjectGallery({ images }: ProjectGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const currentImageData = images[currentIndex].image;
  const imageUrl =
    typeof currentImageData === "object" ? currentImageData.url : "";
  const altText =
    typeof currentImageData === "object"
      ? currentImageData.alt
      : "Project image";

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl bg-neutral-800/50 max-h-125">
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={altText}
            fill
            className="object-cover p-2 rounded-4xl"
            priority
          />
        )}
      </div>

      <div className="flex items-center justify-center gap-4">
        <Button
          variant="glass-icon"
          size="icon"
          onClick={prevImage}
          disabled={images.length <= 1}
          className="rotate-180"
        >
          <ChevronRight className="text-[#220B3B]" />
        </Button>

        <span className="text-sm font-medium text-white/60">
          {currentIndex + 1} / {images.length}
        </span>

        <Button
          variant="glass-icon"
          size="icon"
          onClick={nextImage}
          disabled={images.length <= 1}
          className="text-[#220B3B]"
        >
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
}
