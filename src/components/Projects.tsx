"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { projects } from "@/data/portfolio";
import { useLanguage } from "@/contexts/LanguageContext";

const accentMap = {
  neutral: { 
    bg: "from-neutral-500/20 to-neutral-500/5",
    text: "text-neutral-900 dark:text-neutral-100",
    border: "hover:border-neutral-500/50",
  },
  slate: { 
    bg: "from-slate-500/20 to-slate-500/5",
    text: "text-slate-900 dark:text-slate-100",
    border: "hover:border-slate-500/50",
  },
  zinc: { 
    bg: "from-zinc-500/20 to-zinc-500/5",
    text: "text-zinc-900 dark:text-zinc-100",
    border: "hover:border-zinc-500/50",
  },
};

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const { t } = useLanguage();
  const accent = accentMap[project.accent as keyof typeof accentMap];
  const translated = t.projects[project.id as keyof typeof t.projects];

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      className={`group bg-[var(--card)] border border-[var(--border)] rounded-2xl overflow-hidden ${accent.border} transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
    >
      <div
        className={`relative aspect-video bg-gradient-to-br ${accent.bg} overflow-hidden`}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className={`w-20 h-20 rounded-2xl bg-[var(--card)]/80 backdrop-blur-sm flex items-center justify-center text-3xl font-bold ${accent.text} border border-[var(--border)]`}
          >
            {translated.name.charAt(0)}
          </div>
        </div>
        <div className="absolute inset-0 bg-[var(--background)]/0 group-hover:bg-[var(--background)]/10 transition-colors" />
      </div>

      <div className="p-6 sm:p-7">
        <h3 className="text-lg sm:text-xl font-semibold text-[var(--foreground)] mb-2 group-hover:text-[var(--accent)] transition-colors">
          {translated.name}
        </h3>
        <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-5">
          {translated.desc}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 text-xs font-medium bg-[var(--muted)] text-[var(--muted-foreground)] rounded-full"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
            >
              <Github size={16} />
              GitHub
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--muted-foreground)] hover:text-[var(--accent)] transition-colors"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  const { t } = useLanguage();
  return (
    <section id="projects" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[var(--muted)]/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-medium text-[var(--accent)] mb-3 tracking-wide uppercase">
            {t.projectsLabel}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--foreground)]">
            {t.projectsTitle}
          </h2>
          <p className="text-[var(--muted-foreground)] mt-4 max-w-2xl mx-auto">
            {t.projectsDesc}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
