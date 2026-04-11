import type { Metadata } from "next";
import { Syne, DM_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const syne = Syne({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tobias Tappe — AI & Software Developer",
  description:
    "Portfolio of Tobias Tappe, a CS Master's student at Paderborn University and AI Software Developer at dSPACE. Explore projects, skills, and experience in agentic AI, LLMs, and software engineering.",
  keywords: [
    "Tobias Tappe",
    "AI developer",
    "software engineer",
    "LLM",
    "agentic AI",
    "RAG",
    "MCP",
    "portfolio",
    "Paderborn University",
  ],
  authors: [{ name: "Tobias Tappe" }],
  openGraph: {
    title: "Tobias Tappe — AI & Software Developer",
    description:
      "Portfolio showcasing projects, skills, and experience in agentic AI and software engineering.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tobias Tappe — AI & Software Developer",
    description:
      "Portfolio showcasing projects, skills, and experience in agentic AI and software engineering.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
