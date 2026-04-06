"use client";

import { motion } from "framer-motion";
import { VideoBackground } from "@/components/ui/VideoBackground";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Button } from "@/components/ui/Button";
import { socialProfiles } from "@/data/social";
import { SocialLink } from "@/components/ui/SocialLink";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative min-h-[80vh] flex flex-col items-center justify-center overflow-hidden"
    >
      <VideoBackground variant="cta" />

      <div className="relative z-30 max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <StatusBadge />
        </motion.div>

        <motion.h2
          className="mt-8 text-3xl sm:text-4xl md:text-5xl font-semibold text-text-primary tracking-tight leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Curious about what we can create together? Let&apos;s bring something
          extraordinary to life!
        </motion.h2>

        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <Button
            variant="primary"
            size="lg"
            href="mailto:ttappe@gmx.net"
          >
            Email Me
          </Button>
          <Button
            variant="secondary"
            size="lg"
            href="tel:017676650275"
          >
            Call Me
          </Button>
        </motion.div>

        <motion.div
          className="mt-8 flex items-center justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {socialProfiles.map((profile, index) => (
            <SocialLink
              key={profile.name}
              profile={profile}
              showDivider={index < socialProfiles.length - 1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
