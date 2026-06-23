"use client";

import { useCallback, useEffect, useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "dark" | "light";

/* Module-level store synced with localStorage + <html> class.
   Default mode is the Teracle base surface (black). */
let currentTheme: Theme = "dark";
const THEME_EVENT = "teracle-theme-change";

function applyTheme(theme: Theme) {
  currentTheme = theme;
  if (typeof document !== "undefined") {
    document.documentElement.classList.toggle("teracle-light", theme === "light");
  }
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(THEME_EVENT));
  }
}

function subscribe(cb: () => void) {
  window.addEventListener(THEME_EVENT, cb);
  return () => window.removeEventListener(THEME_EVENT, cb);
}

function getSnapshot(): Theme {
  return currentTheme;
}

function getServerSnapshot(): Theme {
  return "dark";
}

/**
 * Teracle theme toggle. Switches between surface.base (black, default) and
 * surface.muted (cream) by toggling `.teracle-light` on <html>. Both modes
 * are fully token-driven, so every component re-skins without code changes.
 */
export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  // Hydrate from localStorage once on mount (no setState in render path).
  useEffect(() => {
    const stored = window.localStorage.getItem("teracle-theme");
    if (stored === "light" && currentTheme !== "light") {
      applyTheme("light");
    }
  }, []);

  const toggle = useCallback(() => {
    const next: Theme = theme === "light" ? "dark" : "light";
    window.localStorage.setItem("teracle-theme", next);
    applyTheme(next);
  }, [theme]);

  const isLight = theme === "light";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isLight ? "Switch to dark surface" : "Switch to light surface"}
      aria-pressed={isLight}
      className="inline-flex h-10 w-10 items-center justify-center border border-hairline text-ink-primary transition-colors duration-150 hover:bg-surface-muted hover:text-ink-secondary focus-visible:outline-2 focus-visible:outline-offset-2"
    >
      {isLight ? (
        <Sun className="h-4 w-4" aria-hidden />
      ) : (
        <Moon className="h-4 w-4" aria-hidden />
      )}
    </button>
  );
}
