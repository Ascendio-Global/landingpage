import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';

type Props = {
  size?: 'sm' | 'md';
  showText?: boolean;
  className?: string;
  role?: string | null;
};

export function AnimatedLogoMark({ size = 'md', showText = false, className = '', role }: Props) {
  const sizeClass = size === 'sm' ? 'h-12 w-20 p-0.5' : 'h-16 w-28 p-0.5';

  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme === 'dark' : false;
  const activeRole = role || 'landing';

  let logoSrc = '/aarambh%20logo.png';
  const isFallback = !['student', 'admin', 'rep', 'alumni', 'alumini', 'landing'].includes(activeRole);

  if (activeRole === 'student') {
    logoSrc = isDark ? '/Logos/student-dark.png' : '/Logos/student-light.png';
  } else if (activeRole === 'admin' || activeRole === 'rep') {
    logoSrc = isDark ? '/Logos/admin-dark.png' : '/Logos/admin-light.png';
  } else if (activeRole === 'alumni' || activeRole === 'alumini') {
    logoSrc = isDark ? '/Logos/alumini-dark.png' : '/Logos/alumini-light.png';
  } else if (activeRole === 'landing') {
    logoSrc = isDark ? '/Logos/landing-dark.jpeg' : '/Logos/landing-light.png';
  }

  const imgClass = isFallback
    ? 'object-contain contrast-125 mix-blend-multiply dark:invert dark:contrast-125 dark:mix-blend-screen'
    : 'object-contain';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={`relative ${sizeClass}`}>
        <Image
          src={logoSrc}
          alt={`${activeRole} logo`}
          fill
          priority
          sizes="112px"
          className={imgClass}
        />
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
