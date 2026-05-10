"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Funnel, X } from "lucide-react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface ProjectFiltersProps {
  availableTags: string[];
  activeTags: string[];
}

export function ProjectFilters({
  availableTags,
  activeTags,
}: ProjectFiltersProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
    }
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen]);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      window.addEventListener("mousedown", handleClickOutside);
    }
    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const onButtonPointerMove = (e: React.PointerEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    e.currentTarget.style.setProperty("--x", `${x}%`);
    e.currentTarget.style.setProperty("--y", `${y}%`);
  };

  const toggleTag = (tag: string) => {
    const params = new URLSearchParams(searchParams.toString());
    let currentTags = params.get("tags")?.split(",").filter(Boolean) || [];

    if (currentTags.includes(tag)) {
      currentTags = currentTags.filter((t) => t !== tag);
    } else {
      currentTags.push(tag);
    }

    if (currentTags.length > 0) {
      params.set("tags", currentTags.join(","));
    } else {
      params.delete("tags");
    }

    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const clearFilters = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("tags");
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="relative w-full z-100" ref={containerRef}>
      <Button
        size="lg"
        variant="refined-outline"
        className="w-full md:w-fit"
        onPointerMove={onButtonPointerMove}
        onClick={() => setIsOpen(!isOpen)}
        iconLeft={<Funnel strokeWidth={2} />}
      >
        Filter Projects
      </Button>

      {isOpen && (
        <div className="absolute top-15 right-0 min-h-25 w-full md:w-93 z-100 rounded-lg bg-neutral-900 border border-neutral-800 p-4 shadow-2xl backdrop-blur-sm animate-in fade-in zoom-in-95 duration-200">
          <div className="flex flex-col h-full relative z-90">
            <div className="flex flex-wrap gap-2 mb-4">
              {availableTags.map((tag) => {
                const isActive = activeTags.includes(tag);
                return (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={cn(
                      "py-1 px-3 text-sm rounded-md transition-colors cursor-pointer",
                      isActive
                        ? "bg-white text-black font-medium"
                        : "bg-neutral-800 text-white hover:bg-neutral-700",
                    )}
                  >
                    {tag}
                  </button>
                );
              })}
            </div>

            {activeTags.length > 0 && (
              <button
                onClick={clearFilters}
                className="text-xs text-neutral-400 hover:text-white flex items-center gap-1 self-end mt-auto transition-colors"
              >
                <X size={12} />
                Clear All
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
