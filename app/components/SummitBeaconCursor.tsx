'use client';

import { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import { useTheme } from 'next-themes';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
}

interface Point {
  x: number;
  y: number;
  timestamp: number;
}

export default function SummitBeaconCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();
  const [isCapable, setIsCapable] = useState(false);
const mounted = useSyncExternalStore(
  () => () => {}, // subscribe function
  () => true,     // browser value
  () => false     // server value
);
  useEffect(() => {
 
    // Disable on touch devices and if prefers-reduced-motion is true
    const isTouch = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!isTouch && !isReducedMotion) {
      setIsCapable(true);
      document.documentElement.classList.add('custom-cursor-enabled');
    }

    return () => {
      document.documentElement.classList.remove('custom-cursor-enabled');
    };
  }, []);

  useEffect(() => {
    if (!isCapable || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    // State
    const mouse = { x: width / 2, y: height / 2 };
    const cursor = { x: width / 2, y: height / 2 };
    let trail: Point[] = [];
    let particles: Particle[] = [];
    let isHovering = false;
    let isVisible = false;
    let clickHaloScale = 0;

    // Constants
    const TRAIL_LIFETIME = 700; // ms
    const LERP_FACTOR = 0.35; // Cursor tracking speed

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    resize();
    window.addEventListener('resize', resize);

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      isVisible = true;

      // Add to trail
      if (trail.length === 0) {
        trail.push({ x: mouse.x, y: mouse.y, timestamp: Date.now() });
      } else {
        const last = trail[trail.length - 1];
        const dist = Math.hypot(last.x - mouse.x, last.y - mouse.y);
        // Only push if moved a tiny bit, prevents buildup when still
        if (dist > 1.5) {
          trail.push({ x: mouse.x, y: mouse.y, timestamp: Date.now() });
        }
      }

      // Check hover state (subtle brightness increase on interactive elements)
      const target = e.target as HTMLElement;
      isHovering = !!target.closest('a, button, input, select, textarea, [role="button"]');
    };

    const onMouseDown = () => {
      clickHaloScale = 1; // Trigger halo expansion
      
      // Spawn 6 tiny particles
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI * 2 * i) / 6 + (Math.random() * 0.5);
        const speed = 1.5 + Math.random() * 2;
        particles.push({
          x: cursor.x,
          y: cursor.y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 250 + Math.random() * 150, // 250-400ms life
          maxLife: 400
        });
      }
    };

    const onMouseLeave = () => {
      isVisible = false;
    };

    const onMouseEnter = () => {
      isVisible = true;
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    const draw = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      const now = Date.now();

      // Lerp cursor position
      cursor.x += (mouse.x - cursor.x) * LERP_FACTOR;
      cursor.y += (mouse.y - cursor.y) * LERP_FACTOR;

      // Theme Colors
      const isDark = resolvedTheme === 'dark';
      const coreColor = isDark ? '#ffffff' : '#7C3AED';
      const auraColor = isDark ? '124, 58, 237' : '124, 58, 237';
      const trailColor = isDark ? '219, 228, 255' : '124, 58, 237';
      
      const hoverMultiplier = isHovering ? 1.4 : 1;

      // 1. Draw Trail
      trail = trail.filter(p => now - p.timestamp < TRAIL_LIFETIME);
      
      if (isVisible && trail.length > 1) {
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        
        for (let i = 0; i < trail.length - 1; i++) {
          const p1 = trail[i];
          const p2 = trail[i + 1];
          const age = now - p1.timestamp;
          const progress = Math.max(0, 1 - age / TRAIL_LIFETIME); // 1 (new) to 0 (old)
          
          if (progress > 0) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            // Trail is thin and fades out smoothly
            ctx.lineWidth = 1.2 * progress;
            ctx.strokeStyle = `rgba(${trailColor}, ${progress * 0.5})`;
            ctx.stroke();
          }
        }
      }

      // 2. Draw Particles
      particles = particles.filter(p => p.life > 0);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 16.6; // approx 60fps deduction
        p.vx *= 0.92; // friction
        p.vy *= 0.92;
        
        const alpha = Math.max(0, p.life / p.maxLife);
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(124, 58, 237, ${alpha})`;
        ctx.fill();
      });

      // 3. Draw Main Cursor (if visible)
      if (isVisible) {
        // Outer Glow / Aura
        const auraRadius = 24;
        const gradient = ctx.createRadialGradient(cursor.x, cursor.y, 0, cursor.x, cursor.y, auraRadius);
        gradient.addColorStop(0, `rgba(${auraColor}, ${0.15 * hoverMultiplier})`);
        gradient.addColorStop(1, `rgba(${auraColor}, 0)`);
        
        ctx.beginPath();
        ctx.arc(cursor.x, cursor.y, auraRadius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Middle Thin Halo
        ctx.beginPath();
        ctx.arc(cursor.x, cursor.y, 12, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${auraColor}, ${0.4 * hoverMultiplier})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Click Expand Ring
        if (clickHaloScale > 0) {
          ctx.beginPath();
          ctx.arc(cursor.x, cursor.y, 12 + (1 - clickHaloScale) * 10, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(${auraColor}, ${clickHaloScale * 0.5})`;
          ctx.lineWidth = 1;
          ctx.stroke();
          clickHaloScale -= 0.08;
        }

        // Core Dot
        ctx.beginPath();
        ctx.arc(cursor.x, cursor.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = coreColor;
        ctx.fill();
        
        // Slight core glow
        ctx.shadowColor = coreColor;
        ctx.shadowBlur = 4;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isCapable, resolvedTheme]);

  if (!mounted || !isCapable) return null;

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[9999]"
      style={{ mixBlendMode: 'normal' }}
      aria-hidden="true"
    />
  );
}
