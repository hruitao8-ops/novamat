"use client";

import { LoadingText } from "@/components/ui/loading-text";

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 bg-white dark:bg-black flex items-center justify-center">
      <LoadingText text="Wait" className="animate-pulse" />
    </div>
  );
}

export function LoadingOverlay({ show = false }: { show?: boolean }) {
  if (!show) return null;
  
  return (
    <div className="fixed inset-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-sm flex items-center justify-center">
      <LoadingText text="Wait" />
    </div>
  );
}

export default LoadingScreen;