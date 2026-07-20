"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SplitText from "./split-text";

interface WelcomeScreenProps {
  onComplete: () => void;
  duration?: number;
}

export function WelcomeScreen({ onComplete, duration = 2500 }: WelcomeScreenProps) {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
      setTimeout(onComplete, 600);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onComplete]);

  return (
    <AnimatePresence>
      {showWelcome && (
        <motion.div
          className="fixed inset-0 z-[100] bg-white dark:bg-black flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
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
        </motion.div>
      )}
    </AnimatePresence>
  );
}