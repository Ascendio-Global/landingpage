"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";

const LIGHT_ICON = "/Logos/landing-light.png"; // black "A" — for light backgrounds
const DARK_ICON = "/Logos/landing-dark.jpeg"; // white "A" — for dark backgrounds

/**
 * Keeps the browser-tab favicon in sync with the SITE theme (next-themes
 * `resolvedTheme`), covering BOTH the OS `prefers-color-scheme` and a manual
 * in-page theme toggle.
 *
 * The static `<link rel="icon" media="(prefers-color-scheme: ...)">` tags in
 * layout.tsx are correct for SSR / first paint (defaultTheme is "system", so
 * OS == site theme before JS runs). Once hydrated, this component takes over:
 * it strips the scheme-conditional PNG links (which only track the OS) and
 * installs a single resolved-theme PNG link as the LAST icon in <head> so it
 * wins the browser's "last matching icon" rule.
 *
 * The `/favicon.ico` (black/purple brand mark) is left untouched as the
 * universal fallback for crawlers and no-JS clients.
 */
export function DynamicFavicon() {
    const { resolvedTheme } = useTheme();

    useEffect(() => {
        if (!resolvedTheme) return;
        const href = resolvedTheme === "dark" ? DARK_ICON : LIGHT_ICON;

        // Drop the OS-scheme-conditional PNG links so they can't win over us.
        document
            .querySelectorAll<HTMLLinkElement>('link[rel~="icon"][media]')
            .forEach((el) => el.remove());

        // Reuse (or create) our managed link, and re-append it so it is the
        // last <link rel="icon"> in document order — the one browsers honor.
        let link = document.querySelector<HTMLLinkElement>("link[data-dynamic-favicon]");
        if (!link) {
            link = document.createElement("link");
            link.rel = "icon";
            link.setAttribute("data-dynamic-favicon", "");
        }
        link.type = href.endsWith(".png") ? "image/png" : "image/jpeg";
        link.href = href;
        document.head.appendChild(link); // move to end if it already existed
    }, [resolvedTheme]);

    return null;
}
