"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/portfolio";
import { useLanguage } from "@/contexts/LanguageContext";

export function Hero() {
  const { t } = useLanguage();
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
    >
      <div className="max-w-4xl mx-auto w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.p
              className="text-sm font-medium text-[var(--accent)] mb-4 tracking-wide uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {t.greeting}
            </motion.p>

            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <span className="text-[var(--foreground)]">
                {siteConfig.name}
              </span>
            </motion.h1>

            <motion.p
              className="text-xl sm:text-2xl font-medium mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <span className="gradient-text">{siteConfig.role}</span>
            </motion.p>

            <motion.p
              className="text-base sm:text-lg text-[var(--muted-foreground)] max-w-xl mx-auto lg:mx-0 mt-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {t.description}
            </motion.p>
          </motion.div>

          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="relative">
              <motion.div
                className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-emerald-500 p-1 animate-float"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="w-full h-full rounded-full bg-[var(--background)] flex items-center justify-center overflow-hidden">
                  <svg
                    viewBox="0 0 200 200"
                    className="w-full h-full"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient
                        id="avatarGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="var(--accent)" />
                        <stop offset="100%" stopColor="#10b981" />
                      </linearGradient>
                    </defs>
                    <circle
                      cx="100"
                      cy="80"
                      r="35"
                      fill="url(#avatarGradient)"
                    />
                    <ellipse
                      cx="100"
                      cy="160"
                      rx="55"
                      ry="35"
                      fill="url(#avatarGradient)"
                    />
                  </svg>
                </div>
              </motion.div>
              <div className="absolute -inset-4 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-emerald-500/20 rounded-full blur-2xl -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}