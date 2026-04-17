"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export function CursorHighlight() {
  const reduceMotion = useReducedMotion();
  const [isPointerFine, setIsPointerFine] = useState(false);
  const [mounted, setMounted] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 120, damping: 20, mass: 0.2 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 20, mass: 0.2 });
  const cursorBackground = useMotionTemplate`radial-gradient(circle, color-mix(in oklab, var(--accent) 10%, transparent) 0%, transparent 70%)`;

  useEffect(() => {
    setMounted(true);

    if (reduceMotion) {
      return;
    }

    const media = window.matchMedia("(pointer: fine)");
    setIsPointerFine(media.matches);

    const onMove = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    const onMediaChange = (event: MediaQueryListEvent) => {
      setIsPointerFine(event.matches);
    };

    if (media.matches) {
      window.addEventListener("mousemove", onMove, { passive: true });
    }

    media.addEventListener("change", onMediaChange);

    return () => {
      window.removeEventListener("mousemove", onMove);
      media.removeEventListener("change", onMediaChange);
    };
  }, [mouseX, mouseY, reduceMotion]);

  if (!mounted || reduceMotion) {
    return null;
  }

  if (!isPointerFine) {
    return (
      <motion.div
        aria-hidden
        className="pointer-events-none fixed bottom-16 right-6 z-[5] h-24 w-24 rounded-full"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--accent) 14%, transparent) 0%, transparent 72%)",
        }}
        animate={{ opacity: [0.16, 0.28, 0.16], scale: [0.96, 1.04, 0.96] }}
        transition={{ duration: 4.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
    );
  }

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-[5] h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full"
      style={{
        left: springX,
        top: springY,
        background: cursorBackground,
      }}
    />
  );
}
