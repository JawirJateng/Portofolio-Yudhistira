import { Code, Palette, Wrench, type LucideIcon } from "lucide-react";

export const siteConfig = {
  name: "Yudhistira",
  role: "Full Stack Developer",
  tagline:
    "Membuat website modern dengan fokus pada performa dan pengalaman pengguna.",
  description:
    "Hallo, Saya seorang Full Stack Developer yang mulai mengenal dunia coding sejak kelas 10 SMK. Berawal dari rasa penasaran terhadap bagaimana sebuah aplikasi dan website dibuat, saya terus belajar dan mengembangkan kemampuan dalam membangun aplikasi dari sisi frontend hingga backend. Saya menikmati proses mengubah ide menjadi sebuah produk digital yang interaktif, fungsional, dan memiliki pengalaman pengguna yang baik.",
  email: "wirayudhistira18@gmail.com",
  phone: "+62 812-3456-7890",
  location: "Indonesia",
  cvUrl: "/cv-wira.pdf",
  avatarUrl: "/avatar.svg",
} as const;

export type Skill = {
  name: string;
  level: number;
  description: string;
  icon: string;
};

export type SkillCategory = {
  title: string;
  description: string;
  icon: LucideIcon;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    description: "Bahasa pemrograman yang saya gunakan sehari-hari.",
    icon: Code,
    skills: [
      {
        name: "HTML",
        level: 95,
        description: "Semantic markup & accessibility.",
        icon: "html",
      },
      {
        name: "CSS",
        level: 90,
        description: "Modern layout, animation, design systems.",
        icon: "css",
      },
      {
        name: "JavaScript",
        level: 92,
        description: "ES2024, async patterns, DOM APIs.",
        icon: "js",
      },
      {
        name: "TypeScript",
        level: 88,
        description: "Type-safe development & generics.",
        icon: "ts",
      },
      {
        name: "Python",
        level: 75,
        description: "Scripting, automation, data tooling.",
        icon: "py",
      },
      {
        name: "PHP",
        level: 80,
        description: "Server-side scripting language.",
        icon: "php",
      },
      {
        name: "MySQL",
        level: 80,
        description: "Relational database management.",
        icon: "mysql",
      },
    ],
  },
  {
    title: "Framework",
    description: "Framework modern untuk membangun aplikasi web.",
    icon: Palette,
    skills: [
      {
        name: "React",
        level: 92,
        description: "Hooks, context, performance tuning.",
        icon: "react",
      },
      {
        name: "Next.js",
        level: 88,
        description: "App router, SSR, server components.",
        icon: "next",
      },
      {
        name: "Laravel",
        level: 82,
        description: "PHP framework, Eloquent, queue system.",
        icon: "laravel",
      },
      {
        name: "Django",
        level: 78,
        description: "Python framework, ORM, admin panel.",
        icon: "django",
      },
    ],
  },
  {
    title: "Tools",
    description: "Tools pendukung workflow development.",
    icon: Wrench,
    skills: [
      {
        name: "Git",
        level: 90,
        description: "Version control & collaboration.",
        icon: "git",
      },
      {
        name: "Docker",
        level: 78,
        description: "Containerization & deployment.",
        icon: "docker",
      },
      {
        name: "Figma",
        level: 85,
        description: "UI design, prototyping, design tokens.",
        icon: "figma",
      },
      {
        name: "VS Code",
        level: 95,
        description: "Productivity, extensions, debug tools.",
        icon: "vscode",
      },
    ],
  },
];

export type Project = {
  id: string;
  name: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  accent: "neutral" | "slate" | "zinc";
};

export const projects: Project[] = [
  {
    id: "taskly",
    name: "Taskly - Task Management",
    description:
      "Aplikasi manajemen tugas modern dengan drag-and-drop, kolaborasi real-time, dan notifikasi pintar.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/JawirJateng",
    demo: "https://vercel.com/",
    accent: "neutral",
  },
  {
    id: "nexcommerce",
    name: "NexCommerce Store",
    description:
      "Platform e-commerce dengan performa tinggi, checkout mulus, dan dashboard admin lengkap.",
    tech: ["Next.js", "Laravel", "PostgreSQL", "Stripe"],
    github: "https://github.com/JawirJateng",
    demo: "https://vercel.com/",
    accent: "slate",
  },
  {
    id: "devblog",
    name: "DevBlog Platform",
    description:
      "Blog untuk developer dengan Markdown support, code highlighting, dan sistem tag yang fleksibel.",
    tech: ["Next.js", "MDX", "Tailwind CSS", "Prisma"],
    github: "https://github.com/JawirJateng",
    accent: "zinc",
  },
  {
    id: "fittrack",
    name: "FitTrack Dashboard",
    description:
      "Dashboard analitik kebugaran dengan visualisasi data interaktif dan pelacakan progres harian.",
    tech: ["React", "D3.js", "Node.js", "MongoDB"],
    github: "https://github.com/JawirJateng",
    demo: "https://vercel.com/",
    accent: "neutral",
  },
  {
    id: "aichat",
    name: "AI Chat Assistant",
    description:
      "Asisten chat berbasis AI dengan respons cepat, multi-bahasa, dan integrasi API yang mudah.",
    tech: ["Next.js", "TypeScript", "OpenAI", "Tailwind CSS"],
    github: "https://github.com/JawirJateng",
    demo: "https://vercel.com/",
    accent: "slate",
  },
  {
    id: "cloudnotes",
    name: "CloudNotes",
    description:
      "Aplikasi catatan berbasis cloud dengan sinkronisasi real-time, rich-text editor, dan sharing publik.",
    tech: ["React", "Firebase", "Tailwind CSS", "TipTap"],
    github: "https://github.com/JawirJateng",
    accent: "zinc",
  },
];

export type SocialLink = {
  name: string;
  url: string;
  username: string;
};

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/JawirJateng",
    username: "@JawirJateng",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/wirayudhistira18",
    username: "@wirayudhistira18",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
