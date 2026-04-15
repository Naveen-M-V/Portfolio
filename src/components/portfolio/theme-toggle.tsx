"use client";

import { MoonStar, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const THEME_KEY = "naveen-theme";

type Theme = "dark" | "light";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") {
    return "dark";
  }

  const stored = localStorage.getItem(THEME_KEY) as Theme | null;
  if (stored === "dark" || stored === "light") {
    return stored;
  }

  const attrTheme = document.documentElement.getAttribute("data-theme");
  return attrTheme === "light" ? "light" : "dark";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  };

  return (
    <button
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-elevated)] text-[var(--foreground)] transition-colors hover:border-[var(--accent)]/70"
    >
      {theme === "dark" ? <Sun className="h-4 w-4" /> : <MoonStar className="h-4 w-4" />}
    </button>
  );
}
