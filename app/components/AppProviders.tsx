"use client";

import { ThemeProvider } from "@/app/components/ThemeProvider";
import { SmoothScrollProvider } from "@/app/components/motion/SmoothScrollProvider";
import { DynamicFavicon } from "@/app/components/DynamicFavicon";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      enableColorScheme
      storageKey="placement-theme"
    >
      <DynamicFavicon />
      <SmoothScrollProvider>{children}</SmoothScrollProvider>
    </ThemeProvider>
  );
}
