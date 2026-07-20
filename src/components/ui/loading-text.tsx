"use client";

import SplitText from "./split-text";

interface LoadingTextProps {
  text?: string;
  className?: string;
}

export function LoadingText({ text = "Wait", className = "" }: LoadingTextProps) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <SplitText
        text={text}
        className="text-4xl font-bold text-gray-900 dark:text-white"
        delay={100}
        duration={0.6}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
      />
    </div>
  );
}

export function WelcomeText({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <SplitText
        text="Welcome NovaMat"
        className="text-6xl md:text-7xl font-bold text-gray-900 dark:text-white"
        delay={80}
        duration={0.8}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 60, rotateX: -90 }}
        to={{ opacity: 1, y: 0, rotateX: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
      />
    </div>
  );
}

export default LoadingText;