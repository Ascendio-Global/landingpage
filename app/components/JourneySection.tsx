'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent, type MotionValue } from 'motion/react';
import { BlurReveal, StaggerContainer, StaggerItem } from './motion/Animations';
import { useSyncExternalStore } from 'react';
/* ───────── Journey milestone data ───────── */
const JOURNEY_MILESTONES = [
  {
    number: '01',
    category: 'THE VISION',
    heading: 'Starting with a purpose',
    description:
      'Ascendio began with a simple belief: technology should solve real problems and create meaningful opportunities.',
    phase: 'Vision',
  },
  {
    number: '02',
    category: 'BUILDING AARAMBH',
    heading: 'From idea to product',
    description:
      'We designed and developed Aarambh, our first major product, bringing students, institutions, alumni and opportunities together through technology.',
    phase: 'Product',
  },
  {
    number: '03',
    category: 'EXPANDING BEYOND PRODUCTS',
    heading: 'From product to partnerships',
    description:
      'Our experience building Aarambh opened the door to working with educational institutions, businesses and organizations to solve their unique technology needs.',
    phase: 'Growth',
  },
  {
    number: '04',
    category: 'BUILDING WITH CLIENTS',
    heading: 'Turning ideas into real-world solutions',
    description:
      'We began delivering custom software, web, mobile and technology solutions designed around real-world challenges.',
    phase: 'Delivery',
  },
  {
    number: '05',
    category: 'ASCENDING TOGETHER',
    heading: 'Technology built for what comes next',
    description:
      'Today, Ascendio brings products, technology and partnerships together to build scalable solutions that create lasting impact.',
    phase: 'Impact',
  },
];

/* Scroll-progress boundaries for the horizontal timeline phase */
const JRN_START = 0.08;
const JRN_END = 0.60;

/* ───────── Hooks ───────── */
function useMediaQuery(query: string): boolean {
const [matches, setMatches] = useState(() =>
  window.matchMedia(query).matches
);

useEffect(() => {
  const mql = window.matchMedia(query);

  const handler = (event: MediaQueryListEvent) => {
    setMatches(event.matches);
  };

  mql.addEventListener("change", handler);

  return () => {
    mql.removeEventListener("change", handler);
  };
}, [query]);

return matches;
}

/* ───────── Phase indicator pill (fixed top bar) ───────── */
function JourneyPhaseIndicator({
  label,
  index,
  scrollYProgress,
}: {
  label: string;
  index: number;
  scrollYProgress: MotionValue<number>;
}) {
  const n = JOURNEY_MILESTONES.length;
  const seg = (JRN_END - JRN_START) / (n - 1);
  const peak = JRN_START + index * seg;
  const halfSeg = seg / 2;

  // Trapezoidal — fully lit at center, dark elsewhere
  const activation = useTransform(
    scrollYProgress,
    [peak - halfSeg, peak - halfSeg * 0.12, peak + halfSeg * 0.12, peak + halfSeg],
    [0, 1, 1, 0],
  );
  const opacity = useTransform(activation, [0, 1], [0.12, 1]);
  const scale = useTransform(activation, [0, 1], [0.9, 1]);

  return (
    <motion.span
      className="hidden text-[11px] font-bold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400 lg:inline-block"
      style={{ opacity, scale }}
    >
      {label}
    </motion.span>
  );
}

/* ───────── Single milestone card ───────── */
function JourneyMilestone({
  milestone,
  index,
  scrollYProgress,
}: {
  milestone: (typeof JOURNEY_MILESTONES)[number];
  index: number;
  scrollYProgress: MotionValue<number>;
}) {
  const isAbove = index % 2 === 0;
  const n = JOURNEY_MILESTONES.length;
  // Card i peaks exactly when its centre hits viewport centre.
  // Card 0 → JRN_START, card n-1 → JRN_END.
  const seg = (JRN_END - JRN_START) / (n - 1);
  const peak = JRN_START + index * seg;
  const halfSeg = seg / 2;
  const isFirst = index === 0;
  const isLast = index === n - 1;

  // Index-aware trapezoidal activation:
  // • First card – fully bright as soon as timeline appears, then fades out
  // • Last card  – starts brightening early, then HOLDS at 1 until section exits
  // • Others    – symmetric trapezoid; dim everywhere except when centred
  const activationInput = isFirst
    ? [peak, peak + halfSeg * 0.35, peak + halfSeg]
    : isLast
    ? [peak - halfSeg, peak - halfSeg * 0.4, JRN_END + 0.02]
    : [peak - halfSeg, peak - halfSeg * 0.12, peak + halfSeg * 0.12, peak + halfSeg];

  const activationOutput = isFirst
    ? [1, 0.3, 0]
    : isLast
    ? [0, 1, 1]
    : [0, 1, 1, 0];

  const activation = useTransform(scrollYProgress, activationInput, activationOutput);

  /* Derived visual properties */
  const cardOpacity = useTransform(activation, [0, 1], [0.25, 1]);
  const cardScale = useTransform(activation, [0, 1], [0.90, 1.05]);
  const cardY = useTransform(activation, [0, 1], [isAbove ? 20 : -20, 0]);
  const glowOpacity = useTransform(activation, [0, 0.4, 1], [0, 0, 0.85]);
  const dotScale = useTransform(activation, [0, 1], [0.6, 1.5]);
  const dotGlowAlpha = useTransform(activation, [0, 0.5, 1], [0, 0, 1]);
  const dotBorderClr = useTransform(
    activation,
    [0, 1],
    ['rgba(49,85,232,0.15)', 'rgba(49,85,232,1)'],
  );
  const phaseAlpha = useTransform(activation, [0, 1], [0.15, 0.9]);

  return (
    <div className="relative flex h-full w-[40vw] shrink-0 items-center justify-center">
      {/* ── Dot on timeline track ── */}
      <div
        className="absolute left-1/2 -translate-x-1/2"
        style={{ top: '56%' }}
      >
        <motion.div
          className="relative flex items-center justify-center"
          style={{ scale: dotScale }}
        >
          <motion.div
            className="absolute h-8 w-8 rounded-full bg-[#3155e8]"
            style={{ opacity: dotGlowAlpha, filter: 'blur(10px)' }}
            aria-hidden="true"
          />
          <motion.div
            className="relative h-3.5 w-3.5 rounded-full border-2 bg-white dark:bg-[#0c0e1a]"
            style={{ borderColor: dotBorderClr }}
          />
        </motion.div>
        <motion.p
          className="mt-4 whitespace-nowrap text-center text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400 dark:text-slate-600"
          style={{ opacity: phaseAlpha }}
        >
          {milestone.phase}
        </motion.p>
      </div>

      {/* ── Milestone card ── */}
      <motion.div
        className={`absolute left-1/2 w-[90%] max-w-[460px] rounded-[32px] bg-white/95 p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] backdrop-blur-xl dark:bg-[#0c0e1a]/95 dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] border border-slate-100 dark:border-white/5 ${
          isAbove ? 'bottom-[50%] mb-12' : 'top-[56%] mt-16'
        }`}
        style={{
          x: '-50%',
          opacity: cardOpacity,
          scale: cardScale,
          y: cardY,
        }}
      >
        {/* Glow behind the card */}
        <motion.div
          className="absolute -inset-8 -z-20 rounded-[60px] bg-gradient-to-br from-[#3155e8]/20 to-[#8b5cf6]/20 blur-[40px] dark:from-[#3155e8]/15 dark:to-[#8b5cf6]/15"
          style={{ opacity: glowOpacity }}
          aria-hidden="true"
        />

        <div className="relative flex flex-col gap-5">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.3em] text-[#7c3aed] dark:text-[#a78bfa]">
              {milestone.category}
            </p>
            <h3 className="mt-2 text-2xl font-extrabold leading-[1.15] tracking-[-0.02em] text-slate-950 dark:text-white sm:text-[1.7rem]">
              {milestone.heading}
            </h3>
          </div>
          <div>
            <p className="text-[15px] leading-[1.65] text-slate-600 dark:text-slate-300">
              {milestone.description}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ───────── Vertical fallback (mobile / reduced-motion) ───────── */
function JourneyVertical() {
  return (
    <section
      id="journey"
      className="relative overflow-hidden bg-[#f7f8fc] px-5 py-20 dark:bg-[#090a12] md:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 origin-bottom scale-[1.3] bg-cover bg-center dark:hidden md:scale-100"
        style={{ backgroundImage: "url('/386753eb-9701-491d-942f-0baa051ac6bc.webp')" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden origin-bottom scale-[1.3] bg-cover bg-center dark:block md:scale-100"
        style={{ backgroundImage: "url('/1230d583-afb9-4ff1-b585-5a6729601224.webp')" }}
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-white/70 dark:bg-[#090a12]/70" />
      <div className="mx-auto max-w-3xl">
        <StaggerContainer className="mb-14 text-center md:mb-20">
          <StaggerItem>
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.4em] text-[#7c3aed] dark:text-[#c4b5fd]">
              Our Journey
            </p>
          </StaggerItem>
          <StaggerItem>
            <h2 className="text-3xl font-black leading-tight tracking-[-0.03em] text-slate-950 dark:text-white md:text-5xl">
              From vision to impact.
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-slate-500 dark:text-slate-400">
              Every step has shaped what Ascendio is today —{' '}
              and where we&apos;re going next.
            </p>
          </StaggerItem>
        </StaggerContainer>

        <div className="relative">
          <div
            className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-[#3155e8]/30 via-[#8b5cf6]/30 to-transparent md:left-1/2 md:-translate-x-px"
            aria-hidden="true"
          />
          {JOURNEY_MILESTONES.map((m, i) => {
            const isLeft = i % 2 === 0;
            return (
              <BlurReveal
                key={m.number}
                delay={0.1}
                className={`relative mb-12 pl-10 last:mb-0 md:w-1/2 md:pl-0 ${
                  isLeft
                    ? 'md:pr-12 md:text-right'
                    : 'md:ml-auto md:pl-12'
                }`}
              >
                <div
                  className={`absolute left-3 top-1 h-4 w-4 rounded-full border-2 border-[#3155e8] bg-white dark:bg-[#090a12] md:left-auto ${
                    isLeft ? 'md:-right-2' : 'md:-left-2'
                  }`}
                />
                <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#7c3aed] dark:text-[#b49aff]">
                  {m.category}
                </span>
                <h3 className="mt-2 text-xl font-extrabold tracking-tight text-slate-950 dark:text-white">
                  {m.heading}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                  {m.description}
                </p>
              </BlurReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ───────── Desktop horizontal experience ───────── */
/* Isolated into its own component so useScroll always has its ref
   attached — avoids the "target ref defined but not hydrated" error
   that happens when the ref is conditionally rendered. */
function JourneyHorizontal() {
  const sectionRef = useRef<HTMLElement>(null);

  /* Viewport width in a ref for the scroll-linked transform callback */
  const vwRef = useRef(window.innerWidth);
  useEffect(() => {
    const update = () => { vwRef.current = window.innerWidth; };
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  /* ── Scroll tracking ── */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  /* ── Intro overlay — fades out before cards appear ── */
  const [introVisible, setIntroVisible] = useState(true);
  const introOpacity = useTransform(
    scrollYProgress,
    [0, 0.015, 0.04, 1],
    [1, 0.4, 0, 0],
  );
  const introY = useTransform(
    scrollYProgress,
    [0, 0.015, 0.04, 1],
    [0, -20, -60, -60],
  );
  useMotionValueEvent(introOpacity, 'change', (v) => {
    if (v <= 0 && introVisible) setIntroVisible(false);
    if (v > 0 && !introVisible) setIntroVisible(true);
  });

  /* ── Timeline layer — fades in before cards, fades OUT completely before outro starts ── */
  const timelineOpacity = useTransform(
    scrollYProgress,
    [0, 0.04, JRN_START, JRN_END, JRN_END + 0.03, 1],
    [0, 0, 1, 1, 0, 0],
  );

  /* Horizontal translation:
     progress JRN_START → JRN_END  ➜  x: 0 → −(n−1)·vw
     This ensures the last milestone ends centred, not pushed off-screen. */
  const rawTrackX = useTransform(scrollYProgress, (v: number) => {
    const t = Math.max(
      0,
      Math.min(1, (v - JRN_START) / (JRN_END - JRN_START)),
    );
    return t * -((JOURNEY_MILESTONES.length - 1) * vwRef.current * 0.4);
  });
  const trackX = useSpring(rawTrackX, {
    stiffness: 650,
    damping: 65,
    mass: 0.08,
  });

  /* Progress bar (string MotionValue for CSS width) */
  const rawProgress = useTransform(
    scrollYProgress,
    [JRN_START, JRN_END],
    [0, 100],
  );
  const progressPct = useTransform(rawProgress, (v: number) =>
    `${Math.max(0, Math.min(100, v))}%`,
  );

  /* "Scroll to explore" hint */
  const hintOpacity = useTransform(
    scrollYProgress,
    [0, JRN_START, JRN_START + 0.04, JRN_END - 0.04, JRN_END, 1],
    [0, 0, 1, 1, 0, 0],
  );

  /* ── Outro overlay – starts ONLY after timeline is fully gone ── */
  const outroOpacity = useTransform(
    scrollYProgress,
    [0, JRN_END + 0.04, JRN_END + 0.09, 1],
    [0, 0, 1, 1],
  );

  return (
    <section
      ref={sectionRef}
      id="journey"
      className="relative"
      style={{ height: '500vh' }}
    >
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden bg-[#f7f8fc] dark:bg-[#090a12]">
        {/* Background atmosphere */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          <div
            className="absolute inset-0 bg-cover bg-center dark:hidden"
            style={{ backgroundImage: "url('/386753eb-9701-491d-942f-0baa051ac6bc.webp')" }}
          />
          <div
            className="absolute inset-0 hidden bg-cover bg-center dark:block"
            style={{ backgroundImage: "url('/1230d583-afb9-4ff1-b585-5a6729601224.webp')" }}
          />
          <div className="absolute inset-0 bg-white/30 dark:bg-[#090a12]/40" />
          <div className="absolute -left-[15vw] top-[20%] h-[55vh] w-[55vh] rounded-full bg-blue-400/[0.04] blur-[120px] dark:bg-blue-500/[0.06]" />
          <div className="absolute -right-[10vw] bottom-[15%] h-[45vh] w-[45vh] rounded-full bg-violet-400/[0.04] blur-[120px] dark:bg-violet-500/[0.06]" />
        </div>

        {/* ── Intro overlay ── */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-20 flex flex-col items-center justify-center px-8"
          style={{ opacity: introOpacity, visibility: introVisible ? 'visible' : 'hidden', willChange: 'opacity, transform' }}
        >
          <motion.div className="text-center" style={{ y: introY }}>
            <StaggerContainer>
              <StaggerItem>
                <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.4em] text-[#7c3aed] dark:text-[#c4b5fd]">
                  Our Journey
                </p>
              </StaggerItem>
              <StaggerItem>
                <h2 className="mx-auto max-w-3xl text-4xl font-black leading-[1.06] tracking-[-0.035em] text-slate-950 dark:text-white sm:text-5xl md:text-6xl lg:text-[4.5rem]">
                  From vision to{' '}
                  <span className="bg-gradient-to-r from-[#3155e8] to-[#8b5cf6] bg-clip-text text-transparent">
                    impact.
                  </span>
                </h2>
              </StaggerItem>
              <StaggerItem>
                <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-slate-500 dark:text-slate-400 md:text-lg">
                  Every step has shaped what Ascendio is today — and where
                  we&apos;re going next.
                </p>
              </StaggerItem>
            </StaggerContainer>
          </motion.div>
        </motion.div>

        {/* ── Outro overlay – mirrors intro, reappears after last card ── */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-30 flex flex-col items-center justify-center px-8"
          style={{ opacity: outroOpacity }}
        >
          <div className="text-center">
            <StaggerContainer>
              <StaggerItem>
                <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.4em] text-[#7c3aed] dark:text-[#c4b5fd]">
                  Our Journey
                </p>
              </StaggerItem>
              <StaggerItem>
                <h2 className="mx-auto max-w-3xl text-4xl font-black leading-[1.06] tracking-[-0.035em] text-slate-950 dark:text-white sm:text-5xl md:text-6xl lg:text-[4.5rem]">
                  From vision to{' '}
                  <span className="bg-gradient-to-r from-[#3155e8] to-[#8b5cf6] bg-clip-text text-transparent">
                    impact.
                  </span>
                </h2>
              </StaggerItem>
              <StaggerItem>
                <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-slate-500 dark:text-slate-400 md:text-lg">
                  Every step has shaped what Ascendio is today — and where
                  we&apos;re going next.
                </p>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </motion.div>

        {/* ── Timeline layer ── */}
        <motion.div
          className="absolute inset-0 z-10"
          style={{ opacity: timelineOpacity }}
        >
          {/* Horizontal scrolling track */}
          <motion.div
            className="relative flex h-full"
            style={{
              x: trackX,
              paddingLeft: '30vw',
              paddingRight: '30vw',
              width: 'max-content',
            }}
          >
            {/* Thin timeline track line */}
            <div
              className="absolute left-[30vw] right-[30vw] h-px bg-slate-200/70 dark:bg-white/[0.06]"
              style={{ top: '56%' }}
              aria-hidden="true"
            />

            {/* Milestones */}
            {JOURNEY_MILESTONES.map((m, i) => (
              <JourneyMilestone
                key={m.number}
                milestone={m}
                index={i}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </motion.div>

          {/* ── Fixed overlays ── */}

          {/* Phase indicators (top) */}
          <div className="absolute left-0 right-0 top-8 z-20 flex items-center justify-center gap-8 px-8">
            {JOURNEY_MILESTONES.map((m, i) => (
              <JourneyPhaseIndicator
                key={m.phase}
                label={m.phase}
                index={i}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>

          {/* Progress bar (bottom) */}
          <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-3">
            <div className="h-[2px] w-56 overflow-hidden rounded-full bg-slate-200/50 dark:bg-white/[0.05]">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-[#3155e8] to-[#8b5cf6]"
                style={{ width: progressPct }}
              />
            </div>
            <motion.p
              className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-400 dark:text-slate-600"
              style={{ opacity: hintOpacity }}
            >
              Scroll to explore
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   Main export — Thin wrapper that picks between the horizontal
   scroll experience (desktop) and the vertical fallback
   (mobile / reduced-motion / pre-hydration).
   ═══════════════════════════════════════════════════════════════ */
export default function JourneySection() {

  const isMobile = useMediaQuery('(max-width: 1023px)');
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
const mounted = useSyncExternalStore(
  () => () => {}, 
  () => true,     
  () => false    
);
  if (!mounted || isMobile || prefersReducedMotion) {
    return <JourneyVertical />;
  }

  return <JourneyHorizontal />;
}
