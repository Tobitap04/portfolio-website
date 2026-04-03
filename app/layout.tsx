import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tobias Tappe — Software Developer & CS Student",
  description:
    "Portfolio of Tobias Tappe, a computer science student specializing in full-stack development, AI/ML, and modern web technologies. Explore projects, skills, and experience.",
  keywords: [
    "Tobias Tappe",
    "software developer",
    "computer science",
    "portfolio",
    "full-stack",
    "web development",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "Tobias Tappe" }],
  openGraph: {
    title: "Tobias Tappe — Software Developer & CS Student",
    description:
      "Portfolio showcasing projects, skills, and experience in software development.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tobias Tappe — Software Developer",
    description:
      "Portfolio showcasing projects, skills, and experience in software development.",
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
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
