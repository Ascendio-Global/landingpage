"use client";

import Lenis from "lenis";
import { createContext, useContext, useEffect, useMemo, useRef } from "react";
import type { ReactNode } from "react";
import { useReducedMotion } from "motion/react";

type SmoothScrollContextValue = {
  lenis: Lenis | null;
  scrollTo: (target: string | HTMLElement | number, options?: Parameters<Lenis["scrollTo"]>[1]) => void;
};

const SmoothScrollContext = createContext<SmoothScrollContextValue>({
  lenis: null,
  scrollTo: () => {},
});

export function useSmoothScroll() {
  return useContext(SmoothScrollContext);
}

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const prefersReducedMotion = useReducedMotion();
  const lenisRef = useRef<Lenis | null>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    if (prefersReducedMotion || typeof window === "undefined") {
      document.documentElement.classList.add("reduced-motion");
      return;
    }

    document.documentElement.classList.remove("reduced-motion");

    const lenis = new Lenis({
      duration: 1.4,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.2,
    });

    lenisRef.current = lenis;

    const raf = (time: number) => {
      lenis.raf(time);
      frameRef.current = requestAnimationFrame(raf);
    };

    frameRef.current = requestAnimationFrame(raf);

    const handleAnchorClick = (event: MouseEvent) => {
      const anchor = (event.target as Element | null)?.closest<HTMLAnchorElement>("a[href^='#']");
      if (!anchor) return;

      const hash = anchor.getAttribute("href");
      if (!hash || hash === "#") return;

      const target = document.querySelector(hash);
      if (!target) return;

      event.preventDefault();
      lenis.scrollTo(target as HTMLElement, {
        offset: -88,
        duration: 1.2,
        easing: (t) => 1 - Math.pow(1 - t, 3),
      });
      history.pushState(null, "", hash);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const isEditable = target?.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(target?.tagName ?? "");
      if (isEditable || event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey) return;

      const page = window.innerHeight * 0.86;
      const keyMap: Record<string, number> = {
        ArrowDown: 96,
        ArrowUp: -96,
        PageDown: page,
        PageUp: -page,
        Home: -window.scrollY,
        End: document.documentElement.scrollHeight,
      };

      const delta = keyMap[event.key];
      if (delta === undefined) return;

      event.preventDefault();
      const destination = event.key === "End" ? delta : window.scrollY + delta;
      lenis.scrollTo(destination, { duration: 1.05 });
    };

    document.addEventListener("click", handleAnchorClick);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      window.removeEventListener("keydown", handleKeyDown);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [prefersReducedMotion]);

  const value = useMemo<SmoothScrollContextValue>(
    () => ({
      lenis: null,
      scrollTo: (target, options) => {
        if (prefersReducedMotion || !lenisRef.current) {
          if (typeof target === "number") window.scrollTo({ top: target, behavior: "smooth" });
          else if (typeof target === "string") document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
          else target.scrollIntoView({ behavior: "smooth" });
          return;
        }

        lenisRef.current.scrollTo(target, options);
      },
    }),
    [prefersReducedMotion],
  );

  return <SmoothScrollContext.Provider value={value}>{children}</SmoothScrollContext.Provider>;
}
