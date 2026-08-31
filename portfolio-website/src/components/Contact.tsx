"use client";

import { motion } from "framer-motion";
import { Mail, Github, Instagram, type LucideIcon } from "lucide-react";
import { socialLinks, siteConfig } from "@/data/portfolio";
import { useLanguage } from "@/contexts/LanguageContext";

const iconMap: Record<string, LucideIcon> = {
  GitHub: Github,
  Instagram: Instagram,
};

const emailContact = {
  name: "Email",
  url: `mailto:${siteConfig.email}`,
  icon: Mail,
  username: siteConfig.email,
};

const allContacts = [
  emailContact,
  ...socialLinks.map((s) => ({ ...s, icon: iconMap[s.name] ?? Mail })),
];

export function Contact() {
  const { t } = useLanguage();
  return (
    <section
      id="contact"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-medium text-[var(--accent)] mb-3 tracking-wide uppercase">
            {t.contactLabel}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--foreground)]">
            {t.contactTitle}
          </h2>
          <p className="text-[var(--muted-foreground)] mt-4 max-w-xl mx-auto">
            {t.contactDesc}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h3 className="text-lg font-semibold text-[var(--foreground)] text-center">
            {t.contactInfo}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {allContacts.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target={link.name === "Email" ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3.5 bg-[var(--card)] border border-[var(--border)] rounded-xl hover:border-[var(--accent)]/50 hover:bg-[var(--muted)]/50 transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--muted)] flex items-center justify-center text-[var(--accent)] group-hover:scale-110 transition-transform">
                  <link.icon size={18} />
                </div>
                <div>
                  <p className="text-sm font-medium text-[var(--foreground)]">
                    {link.name}
                  </p>
                  <p className="text-xs text-[var(--muted-foreground)] truncate">
                    {link.username}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}