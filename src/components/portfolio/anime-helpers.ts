"use client";

import { useEffect, useRef } from "react";
import { animate, set, stagger } from "animejs";

/**
 * Checks if the user prefers reduced motion.
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Hook for Hero staggered text reveal on page load.
 */
export function useHeroAnime() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || prefersReducedMotion()) return;

    const targets = containerRef.current.querySelectorAll(".anime-hero-item");
    if (!targets.length) return;

    // Reset initial state to ensure clean start
    set(targets, {
      opacity: 0,
      translateY: 24,
    });

    animate(targets, {
      opacity: [0, 1],
      translateY: [24, 0],
      duration: 800,
      ease: "outCubic",
      delay: stagger(140, { start: 100 }),
    });
  }, []);

  return containerRef;
}

/**
 * Hook for scroll-triggered IntersectionObserver reveal animations.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(options?: {
  delay?: number;
  staggerDelay?: number;
}) {
  const elementRef = useRef<T>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      el.style.opacity = "1";
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const targets = el.querySelectorAll(".anime-reveal-child");
            const animateTargets = targets.length > 0 ? targets : el;

            set(animateTargets, { opacity: 0, translateY: 20 });

            animate(animateTargets, {
              opacity: [0, 1],
              translateY: [20, 0],
              duration: 700,
              ease: "outCubic",
              delay: options?.staggerDelay ? stagger(options.staggerDelay, { start: options?.delay ?? 0 }) : (options?.delay ?? 0),
            });

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [options?.delay, options?.staggerDelay]);

  return elementRef;
}

/**
 * Hook for staggering tags into view when container scrolls into viewport.
 */
export function useStaggerTags() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      const tags = el.querySelectorAll(".anime-tag");
      tags.forEach((tag) => ((tag as HTMLElement).style.opacity = "1"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const tags = el.querySelectorAll(".anime-tag");
            if (tags.length) {
              set(tags, { opacity: 0, scale: 0.9, translateY: 10 });
              animate(tags, {
                opacity: [0, 1],
                scale: [0.9, 1],
                translateY: [10, 0],
                duration: 450,
                ease: "outBack",
                delay: stagger(40),
              });
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return containerRef;
}

/**
 * Hook for magnetic CTA button hover effect.
 */
export function useMagneticButton<T extends HTMLElement = HTMLAnchorElement>(strength = 0.25) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const button = ref.current;
    if (!button || prefersReducedMotion()) return;

    // Check touch screen
    if (window.matchMedia("(hover: none)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - centerX) * strength;
      const deltaY = (e.clientY - centerY) * strength;

      animate(button, {
        translateX: deltaX,
        translateY: deltaY,
        duration: 300,
        ease: "outQuad",
      });
    };

    const handleMouseLeave = () => {
      animate(button, {
        translateX: 0,
        translateY: 0,
        duration: 450,
        ease: "outElastic(1, 0.4)",
      });
    };

    button.addEventListener("mousemove", handleMouseMove);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      button.removeEventListener("mousemove", handleMouseMove);
      button.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [strength]);

  return ref;
}
