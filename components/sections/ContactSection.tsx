"use client";

import { motion } from "framer-motion";
import { VideoBackground } from "@/components/ui/VideoBackground";
import { Button } from "@/components/ui/Button";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative min-h-[80vh] flex flex-col items-center justify-center overflow-hidden"
    >
      <VideoBackground variant="cta" />

      <div className="relative z-30 max-w-3xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-semibold text-text-primary tracking-tight leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          Managed to catch your interest?
          Let&apos;s build something great together.
        </motion.h2>

        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Button
            variant="primary"
            size="lg"
            href="mailto:ttappe@gmx.net"
          >
            Email Me
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
