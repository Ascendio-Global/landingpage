'use client';
import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import logoDark from '../public/Logos/landing-dark.png';
import logoLight from '../public/Logos/landing-light.png';
type Props = {
  size?: 'sm' | 'md';
  showText?: boolean; // whether to render "Aarambh" text to the right
  className?: string;
  role?: string | null;
};

export function AnimatedLogoMark({ size = 'md', showText = false, className = '', role }: Props) {
  const sizeClass = size === 'sm' ? 'h-12 w-20 p-0.5' : 'h-16 w-28 p-0.5';
  const imgFitClass = 'object-contain';

  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Hydration mismatch prevention: default to light mode on server side
  const isDark = mounted ? resolvedTheme === 'dark' : false;
  const activeRole = role || 'landing';

  const isFallback = !['student', 'admin', 'rep', 'alumni', 'alumini', 'landing'].includes(activeRole);
  let logoSrc = isDark ? logoDark : logoLight;


  const imgClass = isFallback
    ? `h-full w-full ${imgFitClass} contrast-125 mix-blend-multiply dark:invert dark:contrast-125 dark:mix-blend-screen`
    : `h-full w-full ${imgFitClass}`;

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={`relative ${sizeClass}`}>
        <Image
        src={logoSrc}
        alt={`${activeRole} logo`}
        className={imgClass}
        width={size === 'sm' ? 80 : 112}
        height={size === 'sm' ? 48 : 64} />
      </div>

      {showText ? (
        <div className="flex flex-col">
          <span className="text-2xl font-extrabold leading-tight text-foreground">Aarambh</span>
        </div>
      ) : null}
    </div>
  );
}

export default AnimatedLogoMark;

