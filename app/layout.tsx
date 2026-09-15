import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { AppProviders } from "@/app/components/AppProviders";

// Only Poppins is used by the landing page (as --font-sans). Geist Sans/Mono
// were declared but never rendered, so they're omitted to keep two extra
// font-family downloads off the critical path.
const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ascendio Global | Built to Ascend",
    template: "%s | Ascendio Global",
  },
  description: "Ascendio Global LLP is built to ascend: turning ideas into real-world technology, automation, digital transformation, and enterprise solutions.",
  keywords: [
    "software development",
    "technology solutions",
    "web development",
    "app development",
    "custom software",
    "AI ML automation",
    "UI UX design",
    "Ascendio Global",
    "Aarambh",
    "freelancing services",
  ],
  authors: [{ name: "Ascendio Global" }],
  creator: "Ascendio Global",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Ascendio Global",
    title: "Ascendio Global | Built to Ascend",
    description: "Turning ideas into real-world solutions. Built to Ascend.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ascendio Global | Built to Ascend",
    description: "Technology, automation, digital transformation, and enterprise solutions by Ascendio Global LLP.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // The browser-tab PNG icon (light vs dark) is managed at runtime by
  // <DynamicFavicon> so it follows the SITE theme, including a manual in-page
  // toggle — not just the OS `prefers-color-scheme`. The `app/favicon.ico`
  // (auto-served at /favicon.ico) remains the SSR/crawler/no-JS fallback.
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en" 
      suppressHydrationWarning
      className={`${poppins.variable} h-full antialiased`}
    ><body>
              <AppProviders>{children}</AppProviders>
</body>
    </html>
  );
}
