"use client";

import { motion } from "framer-motion";
import { socialProfiles } from "@/data/social";
import { experience } from "@/data/experience";
import { SocialLink } from "@/components/ui/SocialLink";
import { SkillTag } from "@/components/ui/SkillTag";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const aboutSkills = [
  "Python",
  "LLMs",
  "Agentic AI",
  "RAG",
  "MCP",
  "Machine Learning",
  "IT Security",
];

export function AboutSection() {
  return (
    <section id="about" className="py-12 md:py-16 bg-surface/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-8">
          <SectionHeading
            badge="About Me"
            title="Who I am"
            subtitle="A brief introduction to my background and technical journey."
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
          {/* Left column — Photo card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 h-full flex flex-col"
          >
            <div className="bg-surface border border-border rounded-2xl p-5 flex-1 flex flex-col">
              {/* Photo placeholder */}
              <div className="relative aspect-[4/5] w-3/4 mx-auto rounded-xl overflow-hidden bg-surface-elevated mb-5">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-4xl font-bold text-border/20">TT</div>
                </div>
              </div>

              {/* Name and role */}
              <div>
                <h3 className="text-xl font-semibold text-text-primary">
                  Hello, I&apos;m <span className="text-gradient">Tobias Tappe</span>
                </h3>
                <p className="text-sm text-text-secondary mt-1">
                  CS Master&apos;s Student &amp; AI Software Developer
                </p>
              </div>

              <div className="flex-1 flex items-center justify-center py-4">
                <div className="w-full h-px bg-border-subtle" />
              </div>

              {/* Social links */}
              <div className="flex items-center mb-5">
                {socialProfiles.map((profile, index) => (
                  <SocialLink
                    key={profile.name}
                    profile={profile}
                    showDivider={index < socialProfiles.length - 1}
                  />
                ))}
              </div>

              {/* Connect button */}
              <Button variant="secondary" href="#contact" className="w-full">
                Connect with me
              </Button>
            </div>
          </motion.div>

          {/* Right column — Bio, skills, experience */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-8 h-full flex flex-col space-y-4"
          >
            {/* Bio */}
            <div className="bg-surface border border-border rounded-2xl p-5 flex-1 flex flex-col justify-center">
              <p className="text-text-secondary leading-relaxed">
                I&apos;m a Computer Science Master&apos;s student at Paderborn University with a
                focus on Machine Learning and IT Security, currently working as a Software
                Developer in Research &amp; Pre-Development at dSPACE. My work sits at the
                intersection of applied AI and software engineering — from building agentic
                systems with CrewAI and MCP to RAG pipelines and LLM evaluation frameworks.
                I&apos;m drawn to problems where AI moves from prototype to something that
                actually works in practice.
              </p>

              {/* Skill tags */}
              <div className="mt-5 flex flex-wrap gap-2">
                {aboutSkills.map((skill) => (
                  <SkillTag key={skill} name={skill} />
                ))}
              </div>
            </div>

            {/* Current Focus summary */}
            <div className="bg-surface border border-border rounded-2xl p-5 flex-1 flex flex-col justify-center">
              <h3 className="text-base font-semibold text-text-primary mb-5 flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
                </span>
                What I&apos;m doing currently
              </h3>
              <div className="flex flex-col gap-5">
                {experience.slice(0, 2).map((entry) => (
                  <div key={entry.id} className="flex flex-col gap-1.5 pb-5 border-b border-border/50 last:border-0 last:pb-0">
                    <span className="text-base font-medium text-text-primary">{entry.role}</span>
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-sm text-text-secondary">{entry.company}</span>
                      <span className="text-xs font-mono text-text-muted shrink-0 bg-surface-elevated px-2.5 py-1 rounded-md border border-border-subtle">
                        {entry.year.replace(/ /g, "\u00A0")}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
