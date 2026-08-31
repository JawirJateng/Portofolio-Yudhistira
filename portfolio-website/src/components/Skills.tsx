"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/portfolio";
import type { LucideIcon } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

function SkillIcon({ name }: { name: string }) {
  const colorMap: Record<string, string> = {
    html: "#E34F26",
    css: "#1572B6",
    js: "#F7DF1E",
    ts: "#3178C6",
    py: "#3776AB",
    php: "#777BB4",
    mysql: "#4479A1",
    react: "#61DAFB",
    next: "#000000",
    laravel: "#FF2D20",
    django: "#092E20",
    git: "#F05032",
    docker: "#2496ED",
    figma: "#F24E1E",
    vscode: "#007ACC",
  };
  const initial = name.charAt(0).toUpperCase();
  return (
    <div
      className="w-14 h-14 rounded-lg flex items-center justify-center text-white font-bold text-sm shrink-0"
      style={{ backgroundColor: colorMap[name] ?? "var(--accent)" }}
    >
      {initial}
    </div>
  );
}

function CategoryCard({
  title,
  description,
  icon: Icon,
  skills,
  index,
}: {
  title: string;
  description: string;
  icon: LucideIcon;
  skills: (typeof skillCategories)[number]["skills"];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-6 sm:p-8 hover:border-[var(--accent)]/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-14 h-14 rounded-xl bg-[var(--muted)] flex items-center justify-center text-[var(--accent)]">
          <Icon size={28} />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[var(--foreground)]">
            {title}
          </h3>
          <p className="text-xs text-[var(--muted-foreground)] mt-0.5">
            {description}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center gap-2 text-center">
            <SkillIcon name={skill.icon} />
            <span className="font-medium text-xs text-[var(--foreground)]">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export function Skills() {
  const { t } = useLanguage();
  return (
    <section id="skills" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-medium text-[var(--accent)] mb-3 tracking-wide uppercase">
            {t.skillsLabel}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--foreground)]">
            {t.skillsTitle}
          </h2>
          <p className="text-[var(--muted-foreground)] mt-4 max-w-2xl mx-auto">
            {t.skillsDesc}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            let description = category.description;
            if (category.title === "Programming") description = t.programmingDesc;
            else if (category.title === "Framework") description = t.frameworkDesc;
            else if (category.title === "Tools") description = t.toolsDesc;

            return (
              <CategoryCard
                key={category.title}
                index={index}
                {...category}
                description={description}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}