import { Ghost } from "lucide-react";
import { cn } from "@/lib/utils";

interface NoProjectsBannerProps {
  className?: string;
  message?: string;
  title?: string;
  theme?: "light" | "dark";
}

export function NoProjectsBanner({
  className,
  title = "Nothing to see here... yet!",
  message = "Oops! My projects are currently playing hide and seek. (I'm winning, but check back soon!)",
  theme = "dark",
}: NoProjectsBannerProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center py-20 px-6 text-center backdrop-blur-md rounded-[2.5rem] border w-full animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out",
        isDark
          ? "bg-white/5 border-white/10"
          : "bg-slate-50/60 border-slate-200 shadow-sm",
        className,
      )}
    >
      <div className="relative mb-6">
        {/* Glow Effect */}
        <div
          className={cn(
            "absolute inset-0 blur-2xl rounded-full",
            isDark ? "bg-purple-500/20" : "bg-purple-400/30",
          )}
        />

        {/* Icon Container */}
        <div
          className={cn(
            "relative p-6 rounded-3xl border",
            isDark
              ? "bg-[#220B3B]/50 border-purple-500/20"
              : "bg-white/80 border-purple-200",
          )}
        >
          <Ghost
            className={cn(
              "w-12 h-12 animate-bounce",
              isDark ? "text-purple-400" : "text-purple-600",
            )}
          />
        </div>
      </div>

      {/* Text Content */}
      <h3
        className={cn(
          "text-2xl md:text-4xl font-extrabold mb-3 tracking-tight uppercase",
          isDark ? "text-white" : "text-slate-900",
        )}
      >
        {title}
      </h3>
      <p
        className={cn(
          "max-w-lg mx-auto text-base md:text-lg font-light leading-relaxed",
          isDark ? "text-purple-200/60" : "text-slate-600",
        )}
      >
        {message}
      </p>
    </div>
  );
}
