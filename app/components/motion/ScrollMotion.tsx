"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import type { MotionValue, Variants } from "motion/react";
import { useRef } from "react";
import type { CSSProperties, ElementType, ReactNode } from "react";
import { cn } from "@/app/components/utils";

export type RevealVariant = "fadeUp" | "fadeDown" | "fadeLeft" | "fadeRight" | "scaleIn" | "blurReveal";

const premiumEase = [0.22, 1, 0.36, 1] as const;

export const revealVariants: Record<RevealVariant, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0 },
  },
  fadeDown: {
    hidden: { opacity: 0, y: -28 },
    visible: { opacity: 1, y: 0 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: 34 },
    visible: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: -34 },
    visible: { opacity: 1, x: 0 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.96, y: 16 },
    visible: { opacity: 1, scale: 1, y: 0 },
  },
  blurReveal: {
    hidden: { opacity: 0, y: 24, filter: "blur(14px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
};

type RevealOnScrollProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  amount?: number;
};

export function RevealOnScroll({
  as: _as = "div",
  children,
  className,
  variant = "fadeUp",
  delay = 0,
  duration = 0.7,
  amount = 0.24,
  style,
}: RevealOnScrollProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className} style={style}>{children}</div>;
  }

  return (
    <motion.div
      variants={revealVariants[variant]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount, margin: "0px 0px -8% 0px" }}
      transition={{ duration, delay, ease: premiumEase }}
      style={style}
      className={cn("will-change-transform", className)}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  as: _as = "div",
  children,
  className,
  delayChildren = 0.08,
  staggerChildren = 0.08,
  amount = 0.2,
}: {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  delayChildren?: number;
  staggerChildren?: number;
  amount?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount, margin: "0px 0px -8% 0px" }}
      variants={{
        hidden: {},
        visible: {
          transition: { delayChildren, staggerChildren },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ParallaxSection({
  children,
  className,
  speed = 36,
}: {
  children: (motionY: MotionValue<number>) => ReactNode;
  className?: string;
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 26, mass: 0.35 });
  const y = useTransform(smoothProgress, [0, 1], shouldReduceMotion ? [0, 0] : [speed, -speed]);

  return (
    <div ref={ref} className={className}>
      {children(y)}
    </div>
  );
}

export function AnimatedHeading({
  eyebrow,
  title,
  copy,
  className,
  align = "center",
}: {
  eyebrow: string;
  title: ReactNode;
  copy?: ReactNode;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <RevealOnScroll variant="blurReveal" className={cn(align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl", className)}>
      <p className="text-xs font-black uppercase tracking-[0.28em] text-(--landing-accent)">{eyebrow}</p>
      <h2 className="mt-3 md:mt-4 text-[26px] font-black uppercase leading-[1.1] md:text-6xl md:leading-[0.95]">{title}</h2>
      {copy ? <p className={cn("mt-3 md:mt-5 text-[14px] md:text-base leading-relaxed md:leading-7 text-zinc-600 dark:text-zinc-400")}>{copy}</p> : null}
    </RevealOnScroll>
  );
}

export function AnimatedCard({
  as: _as = "div",
  children,
  className,
  variant = "scaleIn",
  style,
}: {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  variant?: RevealVariant;
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) return <div className={className} style={style}>{children}</div>;

  return (
    <motion.div
      variants={revealVariants[variant]}
      transition={{ duration: 0.72, ease: premiumEase }}
      style={style}
      className={cn("will-change-transform", className)}
    >
      {children}
    </motion.div>
  );
}
