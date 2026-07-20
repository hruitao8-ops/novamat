"use client";

import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

/**
 * GlobalThemeToggle — fixed-position theme toggle button
 * that floats in the top-right corner on all pages.
 *
 * Place this inside layout.tsx (inside the ThemeProvider).
 */
export function GlobalThemeToggle() {
  return (
    <div
      className="fixed top-16 right-4 z-[100] flex items-center justify-center
                 w-10 h-10 rounded-full
                 bg-gray-200/60 backdrop-blur-md border border-gray-300/50
                 dark:bg-white/10 dark:border-white/10
                 transition-colors duration-300
                 hover:scale-110 active:scale-95"
      style={{ WebkitTapHighlightColor: "transparent" } as React.CSSProperties}
    >
      <AnimatedThemeToggler sound={true} size={18} />
    </div>
  );
}
