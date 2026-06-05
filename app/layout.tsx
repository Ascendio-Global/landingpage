import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { AppProviders } from "@/app/components/AppProviders";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: "Aarambh | Premier Student Placement Platform",
    template: "%s | Aarambh",
  },
  description: "Aarambh by Ascendio Global is an end-to-end student placement platform connecting talent with top industry recruiters. Accelerate your career with profile reviews, job opportunities, and placement analytics.",
  keywords: [
    "student placement",
    "career platform",
    "recruiter outreach",
    "profile reviews",
    "placement analytics",
    "Aarambh",
    "Ascendio Global",
    "jobs",
    "internships",
    "career launchpad",
  ],
  authors: [{ name: "Ascendio Global" }],
  creator: "Ascendio Global",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Aarambh",
    title: "Aarambh | Premier Student Placement Platform",
    description: "Accelerate your career with Aarambh. Get placement support, connect with recruiters, and track your progress all in one platform.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aarambh | Premier Student Placement Platform",
    description: "Accelerate your career with Aarambh. Get placement support, connect with recruiters, and track your progress.",
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
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} h-full antialiased`}
    ><body>
              <AppProviders>{children}</AppProviders>
</body>
    </html>
  );
}
