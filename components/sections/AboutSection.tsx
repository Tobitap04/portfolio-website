"use client";

import { motion } from "framer-motion";
import { socialProfiles } from "@/data/social";
import { experience } from "@/data/experience";
import { SocialLink } from "@/components/ui/SocialLink";
import { SkillTag } from "@/components/ui/SkillTag";
import { ExperienceItem } from "@/components/ui/ExperienceItem";
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
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left column — Photo card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-surface border border-border rounded-2xl p-6 space-y-6">
              {/* Photo placeholder */}
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-surface-elevated">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-8xl font-bold text-border/20">TT</div>
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

              {/* Social links */}
              <div className="flex items-center border-t border-border-subtle pt-4">
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
            className="space-y-8"
          >
            {/* Bio */}
            <div className="bg-surface border border-border rounded-2xl p-6">
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
              <div className="mt-6 flex flex-wrap gap-2">
                {aboutSkills.map((skill) => (
                  <SkillTag key={skill} name={skill} />
                ))}
              </div>
            </div>

            {/* Experience table */}
            <div className="bg-surface border border-border rounded-2xl p-6">
              <div className="space-y-0">
                {experience.map((entry, index) => (
                  <ExperienceItem
                    key={entry.id}
                    entry={entry}
                    isLast={index === experience.length - 1}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
