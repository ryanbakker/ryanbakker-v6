"use client";

import { useState } from "react";
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
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

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
    <div className="relative">
      <Button size="lg" onClick={() => setIsOpen(!isOpen)}>
        <Funnel strokeWidth={3} />
        &nbsp; Filter Projects
      </Button>

      {isOpen && (
        <div className="absolute top-15 right-0 min-h-25 w-93 z-50 rounded-lg bg-neutral-900/95 border border-neutral-800 p-4 shadow-2xl backdrop-blur-sm">
          <div className="flex flex-col h-full">
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
                        : "bg-neutral-800 text-white hover:bg-neutral-700"
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
