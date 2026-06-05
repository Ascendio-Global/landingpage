"use client";

// Side-effect import: silences console.* in production builds.
// Must be imported before any other code that might log.
// import "@/lib/console-silencer";

import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ThemeProvider } from "@/app/components/ThemeProvider";
import { Toaster } from "@/app/components/sonner";
import { SmoothScrollProvider } from "@/app/components/motion/SmoothScrollProvider";
import { DynamicFavicon } from "@/app/components/DynamicFavicon";

export function AppProviders({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60_000,
            refetchOnWindowFocus: false,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        enableColorScheme
        storageKey="placement-theme"
      >
        <DynamicFavicon />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
        <Toaster />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
