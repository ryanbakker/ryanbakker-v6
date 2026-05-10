import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  // Added cursor-pointer here
  "group/button cursor-pointer inline-flex shrink-0 items-center justify-center rounded-md border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-5",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/80 active:translate-y-px",
        outline:
          "border-border bg-background shadow-xs hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50 active:translate-y-px",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground active:translate-y-px",
        ghost:
          "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50 active:translate-y-px",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40 active:translate-y-px",
        link: "text-primary underline-offset-4 hover:underline active:translate-y-px",

        // --- THE RULE BREAKERS --- //

        // Starts as a ghost button, on hover it inverts, lights up with your brand purple, and spreads
        phantom:
          "bg-transparent text-white font-bold uppercase tracking-widest border border-white/20 shadow-none hover:border-transparent hover:bg-white hover:text-[#442A55] hover:tracking-[0.2em] hover:shadow-[0_0_40px_-10px_rgba(215,142,255,0.7)] hover:-translate-y-1 active:scale-90 duration-300 ease-out",

        // From Uiverse.io by AlimurtuzaCodes - Dark button with a magical purple glow on hover
        sparkle:
          "w-[15em] h-[5em] rounded-[3em] bg-[#1C1A1C] text-[#AAAAAA] font-semibold text-base border-none shadow-none hover:bg-linear-to-t hover:from-[#683FEA] hover:to-[#A47CF3] hover:text-white hover:-translate-y-[2px] hover:shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.4),inset_0px_-4px_0px_0px_rgba(0,0,0,0.2),0px_0px_0px_4px_rgba(255,255,255,0.2),0px_0px_180px_0px_#9917FF] transition-all duration-450 ease-in-out [&_svg]:fill-[#AAAAAA] [&_svg]:transition-all [&_svg]:duration-800 hover:[&_svg]:fill-white hover:[&_svg]:scale-120",

        // The high-impact button used in the Hero Section with a dynamic radial cursor glow
        rainbow:
          "bg-[radial-gradient(circle_at_var(--x,50%)_var(--y,50%),rgba(255,197,142,0.8)_0%,transparent_100%),linear-gradient(65deg,#FFFFFF_0%,#FED5FF_25%,#D9C6FE_50%,#FED5FF_75%,#FFFFFF_100%)] bg-size-[100%_100%,200%_auto] text-black font-semibold rounded-[7px] transition-all duration-500 hover:bg-position-[0%_0%,right_center] hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(217,198,254,0.5)] active:scale-95 gap-3 [&_svg:not([class*='size-'])]:size-4",

        // A sophisticated outline variant with a subtle border and elegant hover transition
        "refined-outline":
          "bg-transparent bg-[radial-gradient(circle_at_var(--x,50%)_var(--y,50%),rgba(255,255,255,0.15)_0%,transparent_100%)] text-white border border-white/20 rounded-[7px] hover:border-white/40 hover:bg-white/5 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.5),0_0_20px_rgba(255,255,255,0.1)] active:translate-y-0 transition-all duration-300",

        // From Uiverse.io by vinodjangid07 - A glass-like icon button with a rotating background layer
        "glass-icon":
          "relative bg-transparent border-none p-0 overflow-visible isolate before:absolute before:inset-0 before:bg-[#F7E9FF] before:rounded-[7px] before:z-[-1] before:transition-all before:duration-300 hover:before:rotate-[35deg] hover:before:origin-bottom hover:before:bg-[#FFE2C7] [&>div]:border [&>div]:border-purple-400/20 [&>div]:rounded-[7px] [&>div]:transition-all [&>div]:duration-300 hover:[&>div]:bg-purple-400/10 hover:[&>div]:backdrop-blur-[4px] [&_svg]:transition-all",
      },
      size: {
        default:
          "h-9 gap-1.5 px-2.5 in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),8px)] px-2 text-xs in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-4",
        sm: "h-8 gap-1 rounded-[min(var(--radius-md),10px)] px-2.5 in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-[18px]",
        lg: "h-12 gap-1.5 px-6 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&_svg:not([class*='size-'])]:size-6", // Beefed up the 'lg' size slightly for more impact
        icon: "size-9 [&_svg:not([class*='size-'])]:size-5.5",
        "icon-xs":
          "size-6 rounded-[min(var(--radius-md),8px)] in-data-[slot=button-group]:rounded-md [&_svg:not([class*='size-'])]:size-4",
        "icon-sm":
          "size-8 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-md [&_svg:not([class*='size-'])]:size-[18px]",
        "icon-lg": "size-10 [&_svg:not([class*='size-'])]:size-7",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  iconLeft,
  iconRight,
  children,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
  }) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      <div className="relative z-10 flex items-center justify-center gap-[inherit] w-full h-full">
        {iconLeft && <span className="shrink-0">{iconLeft}</span>}
        {children}
        {iconRight && <span className="shrink-0">{iconRight}</span>}
      </div>
    </Comp>
  );
}

export { Button, buttonVariants };
