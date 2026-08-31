"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type Lang = "id" | "en";

export interface Translations {
  greeting: string;
  skillsLabel: string;
  skillsTitle: string;
  skillsDesc: string;
  projectsLabel: string;
  projectsTitle: string;
  projectsDesc: string;
  projects: Record<string, { name: string; desc: string }>;
  contactLabel: string;
  contactTitle: string;
  contactDesc: string;
  contactInfo: string;
  copyright: string;
  description: string;
  navHome: string;
  navSkills: string;
  navProjects: string;
  navContact: string;
  programmingDesc: string;
  frameworkDesc: string;
  toolsDesc: string;
}

const translations: Record<Lang, Translations> = {
  id: {
    greeting: "Hallo, Saya",
    skillsLabel: "Keahlian",
    skillsTitle: "Teknologi yang saya gunakan",
    skillsDesc:
      "Kumpulan teknologi dan tools yang saya gunakan untuk membangun produk digital yang modern, performant, dan mudah digunakan.",
    projectsLabel: "Proyek",
    projectsTitle: "Proyek Pilihan",
    projectsDesc:
      "Beberapa project yang telah saya kerjakan, mulai dari aplikasi web, e-commerce, hingga platform berbasis AI.",
    projects: {
      taskly: {
        name: "Taskly - Manajemen Tugas",
        desc: "Aplikasi manajemen tugas modern dengan drag-and-drop, kolaborasi real-time, dan notifikasi pintar."
      },
      nexcommerce: {
        name: "NexCommerce Store",
        desc: "Platform e-commerce dengan performa tinggi, checkout mulus, dan dashboard admin lengkap."
      },
      devblog: {
        name: "DevBlog Platform",
        desc: "Blog untuk developer dengan Markdown support, code highlighting, dan sistem tag yang fleksibel."
      },
      fittrack: {
        name: "FitTrack Dashboard",
        desc: "Dashboard analitik kebugaran dengan visualisasi data interaktif dan pelacakan progres harian."
      },
      aichat: {
        name: "AI Chat Assistant",
        desc: "Asisten chat berbasis AI dengan respons cepat, multi-bahasa, dan integrasi API yang mudah."
      },
      cloudnotes: {
        name: "CloudNotes",
        desc: "Aplikasi catatan berbasis cloud dengan sinkronisasi real-time, rich-text editor, dan sharing publik."
      }
    },
    contactLabel: "Kontak",
    contactTitle: "Mari bekerja sama",
    contactDesc:
      "Punya pertanyaan, kolaborasi, atau kesempatan kerja? Jangan ragu untuk menghubungi saya.",
    contactInfo: "Info Kontak",
    copyright: "Hak cipta dilindungi.",
    description:
      "Hallo, Saya seorang Full Stack Developer yang mulai mengenal dunia coding sejak kelas 10 SMK. Berawal dari rasa penasaran terhadap bagaimana sebuah aplikasi dan website dibuat, saya terus belajar dan mengembangkan kemampuan dalam membangun aplikasi dari sisi frontend hingga backend. Saya menikmati proses mengubah ide menjadi sebuah produk digital yang interaktif, fungsional, dan memiliki pengalaman pengguna yang baik.",
    navHome: "Beranda",
    navSkills: "Keahlian",
    navProjects: "Proyek",
    navContact: "Kontak",
    programmingDesc: "Bahasa pemrograman yang saya gunakan sehari-hari.",
    frameworkDesc: "Framework modern untuk membangun aplikasi web.",
    toolsDesc: "Tools pendukung workflow development.",
  },
  en: {
    greeting: "Hello, I'm",
    skillsLabel: "Skills",
    skillsTitle: "Technologies I work with",
    skillsDesc:
      "A collection of technologies and tools I use to build modern, performant, and user-friendly digital products.",
    projectsLabel: "Projects",
    projectsTitle: "Selected Work",
    projectsDesc:
      "Some projects I have worked on, from web apps, e-commerce, to AI-based platforms.",
    projects: {
      taskly: {
        name: "Taskly - Task Management",
        desc: "Modern task management app with drag-and-drop, real-time collaboration, and smart notifications."
      },
      nexcommerce: {
        name: "NexCommerce Store",
        desc: "High-performance e-commerce platform with smooth checkout and complete admin dashboard."
      },
      devblog: {
        name: "DevBlog Platform",
        desc: "Developer blog with Markdown support, code highlighting, and a flexible tagging system."
      },
      fittrack: {
        name: "FitTrack Dashboard",
        desc: "Fitness analytics dashboard with interactive data visualization and daily progress tracking."
      },
      aichat: {
        name: "AI Chat Assistant",
        desc: "AI-powered chat assistant with fast response, multi-language, and easy API integration."
      },
      cloudnotes: {
        name: "CloudNotes",
        desc: "Cloud-based note-taking app with real-time synchronization, rich-text editor, and public sharing."
      }
    },
    contactLabel: "Contact",
    contactTitle: "Let's work together",
    contactDesc:
      "Have questions, collaboration, or job opportunities? Don't hesitate to reach out.",
    contactInfo: "Contact Info",
    copyright: "All rights reserved.",
    description:
      "Hello, I'm a Full Stack Developer who started getting into coding since 10th grade of vocational school. Starting from curiosity about how applications and websites are built, I continuously learn and develop my skills in building applications from frontend to backend. I enjoy the process of turning ideas into interactive, functional digital products with great user experience.",
    navHome: "Home",
    navSkills: "Skills",
    navProjects: "Projects",
    navContact: "Contact",
    programmingDesc: "Programming languages I use daily.",
    frameworkDesc: "Modern frameworks for building web apps.",
    toolsDesc: "Tools that support the development workflow.",
  },
};

const LanguageContext = createContext<{
  lang: Lang;
  t: Translations;
  toggle: () => void;
}>({
  lang: "id",
  t: translations.id,
  toggle: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("id");

  const toggle = () => setLang((prev) => (prev === "id" ? "en" : "id"));

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
