"use client";

import { useState, useEffect, useRef } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    
    // Initial check on mount
    const checkIsDark = () => document.documentElement.classList.contains("dark");
    setIsDark(checkIsDark());

    // Observe class changes in case of outside modifications
    const observer = new MutationObserver(() => {
      if (isMounted.current) {
        setIsDark(checkIsDark());
      }
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      isMounted.current = false;
      observer.disconnect();
    };
  }, []);

  const toggle = () => {
    const isCurrentlyDark = document.documentElement.classList.contains("dark");
    const next = !isCurrentlyDark;
    if (next) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", next ? "dark" : "light");
    setIsDark(next);
  };

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="relative p-2.5 rounded-xl bg-transparent hover:bg-[var(--muted)] transition-all duration-200 overflow-hidden"
    >
      <div className="relative w-5 h-5">
        <Sun
          className={`absolute inset-0 w-5 h-5 text-[var(--foreground)] transition-all duration-300 ${
            isDark
              ? "opacity-0 rotate-90 scale-0"
              : "opacity-100 rotate-0 scale-100"
          }`}
        />
        <Moon
          className={`absolute inset-0 w-5 h-5 text-[var(--foreground)] transition-all duration-300 ${
            isDark
              ? "opacity-100 rotate-0 scale-100"
              : "opacity-0 -rotate-90 scale-0"
          }`}
        />
      </div>
    </button>
  );
}