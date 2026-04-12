"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 backdrop-blur-md ${scrolled
        ? "bg-surface/90 border-b border-border/50 shadow-xl"
        : "bg-surface/80 border-b border-border/20"
        }`}
    >
      {/* Solid black safe-area cover — prevents content bleeding on tall phones (9:18, 9:21) */}
      <div
        className="absolute top-0 left-0 right-0 md:hidden bg-background pointer-events-none"
        style={{ height: "env(safe-area-inset-top)" }}
        aria-hidden
      />

      <nav className="max-w-6xl mx-auto px-6 h-[calc(4rem+env(safe-area-inset-top))] pt-[env(safe-area-inset-top)] md:h-16 md:pt-0 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-text-primary font-semibold text-lg tracking-tight hover:text-accent transition-colors duration-200"
        >
          Tobias Tappe
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-4 py-2 text-sm rounded-full transition-colors duration-150 cursor-pointer ${activeSection === link.href
                ? "text-text-primary bg-surface"
                : "text-text-secondary hover:text-text-primary"
                }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden glass border-t border-border/50">
          <div className="px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-4 py-3 text-sm rounded-lg transition-colors duration-150 ${activeSection === link.href
                  ? "text-text-primary bg-surface"
                  : "text-text-secondary hover:text-text-primary hover:bg-surface/50"
                  }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
