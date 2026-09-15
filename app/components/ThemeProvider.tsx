"use client";

import * as React from "react";

type Theme = "light" | "dark" | "system";

type ThemeContextValue = {
    theme: Theme;
    resolvedTheme: "light" | "dark";
    setTheme: (theme: Theme) => void;
};

const ThemeContext = React.createContext<ThemeContextValue>({
    theme: "system",
    resolvedTheme: "light",
    setTheme: () => undefined,
});

export function useTheme() {
    return React.useContext(ThemeContext);
}

export function ThemeProvider({
    children,
}: { children: React.ReactNode }) {
    const [theme, setThemeState] = React.useState<Theme>("system");
    const [systemTheme, setSystemTheme] = React.useState<"light" | "dark">("light");

    React.useEffect(() => {
        const storedTheme = window.localStorage.getItem("placement-theme") as Theme | null;
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        setThemeState(storedTheme ?? "system");
        setSystemTheme(mediaQuery.matches ? "dark" : "light");

        const handleSystemThemeChange = (event: MediaQueryListEvent) => {
            setSystemTheme(event.matches ? "dark" : "light");
        };
        mediaQuery.addEventListener("change", handleSystemThemeChange);
        return () => mediaQuery.removeEventListener("change", handleSystemThemeChange);
    }, []);

    const resolvedTheme = theme === "system" ? systemTheme : theme;

    React.useEffect(() => {
        document.documentElement.classList.toggle("dark", resolvedTheme === "dark");
        document.documentElement.style.colorScheme = resolvedTheme;
    }, [resolvedTheme]);

    const setTheme = (nextTheme: Theme) => {
        setThemeState(nextTheme);
        window.localStorage.setItem("placement-theme", nextTheme);
    };

    return <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme }}>{children}</ThemeContext.Provider>;
}
