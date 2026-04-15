"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export function CursorHighlight() {
  const reduceMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 120, damping: 20, mass: 0.2 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 20, mass: 0.2 });
  const cursorBackground = useMotionTemplate`radial-gradient(circle, color-mix(in oklab, var(--accent) 10%, transparent) 0%, transparent 70%)`;

  useEffect(() => {
    if (reduceMotion) {
      return;
    }

    const media = window.matchMedia("(pointer: fine)");
    setEnabled(media.matches);

    const onMove = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    const onMediaChange = (event: MediaQueryListEvent) => {
      setEnabled(event.matches);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    media.addEventListener("change", onMediaChange);

    return () => {
      window.removeEventListener("mousemove", onMove);
      media.removeEventListener("change", onMediaChange);
    };
  }, [mouseX, mouseY, reduceMotion]);

  if (!enabled || reduceMotion) {
    return null;
  }

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-[5] hidden h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full md:block"
      style={{
        left: springX,
        top: springY,
        background: cursorBackground,
      }}
    />
  );
}
