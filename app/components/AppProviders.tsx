"use client";

import { ThemeProvider } from "@/app/components/ThemeProvider";
import { SmoothScrollProvider } from "@/app/components/motion/SmoothScrollProvider";
import { DynamicFavicon } from "@/app/components/DynamicFavicon";
import SummitBeaconCursor from "@/app/components/SummitBeaconCursor";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <DynamicFavicon />
      <SmoothScrollProvider>
        {children}
        <SummitBeaconCursor />
      </SmoothScrollProvider>
    </ThemeProvider>
  );
}
