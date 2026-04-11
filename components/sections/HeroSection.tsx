"use client";

import { motion } from "framer-motion";
import { Mouse } from "lucide-react";
import { VideoBackground } from "@/components/ui/VideoBackground";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      <VideoBackground variant="hero" />

      <div className="relative z-30 max-w-4xl mx-auto px-6 text-center">
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-text-primary"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Tobias{" "}
          <span className="text-gradient font-normal">Tappe</span>
        </motion.h1>

        <motion.p
          className="mt-6 text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          CS Master&apos;s Student at Paderborn University · AI &amp; Software Dev at dSPACE ·
          Building agentic systems, RAG pipelines &amp; LLM tooling.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button variant="primary" size="lg" href="#projects">
            See Projects
          </Button>
          <Button variant="secondary" size="lg" href="#contact">
            Get in Touch
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-0 right-0 flex items-center justify-center gap-4 z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <span className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-transparent to-border" />
        <div className="flex flex-col items-center gap-2 text-text-muted text-xs">
          <span>Scroll down</span>
          <Mouse size={18} className="animate-bounce" />
        </div>
        <span className="h-px flex-1 max-w-[120px] bg-gradient-to-l from-transparent to-border" />
      </motion.div>
    </section>
  );
}
