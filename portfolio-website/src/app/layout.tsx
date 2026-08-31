import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wira.dev"),
  title: "Yudhistira - Full Stack Developer",
  description:
    "Personal portfolio showcasing skills, projects, and experience as a Full Stack Developer.",
  keywords: [
    "portfolio",
    "full stack developer",
    "react",
    "next.js",
    "web developer",
    "typescript",
  ],
  authors: [{ name: "Wira" }],
  openGraph: {
    title: "Wira - Full Stack Developer",
    description:
      "Personal portfolio showcasing skills, projects, and experience as a Full Stack Developer.",
    type: "website",
    locale: "en_US",
    siteName: "Wira Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wira - Full Stack Developer",
    description:
      "Personal portfolio showcasing skills, projects, and experience as a Full Stack Developer.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <template
          dangerouslySetInnerHTML={{
            __html: `(function(){try{
              var t=localStorage.getItem('theme');
              if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){
                document.documentElement.classList.add('dark')
              } else {
                document.documentElement.classList.remove('dark')
              }
            }catch(e){}})()`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}