"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--border)] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-xs text-[var(--muted-foreground)]">
          &copy; {year} Yudhistira. {t.copyright}
        </p>
      </div>
    </footer>
  );
}