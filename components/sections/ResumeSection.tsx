"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import { experience } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillTag } from "@/components/ui/SkillTag";
import { GraduationCap, Briefcase } from "lucide-react";

export function ResumeSection() {
  const education = experience.filter((e) => e.type === "education");
  const work = experience.filter((e) => e.type === "work");

  return (
    <section id="resume" className="py-24 md:py-32 bg-surface/30">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          badge="Resume"
          title="Education & Skills"
          subtitle="My academic background, professional journey, and technical expertise."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left — Education & Experience */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            {/* Education */}
            <div>
              <h3 className="text-lg font-semibold text-text-primary mb-6 flex items-center gap-3">
                <GraduationCap size={20} className="text-accent" />
                Education
              </h3>
              <div className="space-y-4">
                {education.map((entry) => (
                  <div
                    key={entry.id}
                    className="bg-surface border border-border rounded-xl p-5 hover:border-text-muted transition-colors duration-200"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="font-medium text-text-primary">
                          {entry.role}
                        </h4>
                        <p className="text-sm text-text-secondary mt-1">
                          {entry.company}
                        </p>
                        {entry.description && (
                          <p className="text-sm text-text-muted mt-2">
                            {entry.description}
                          </p>
                        )}
                      </div>
                      <span className="text-sm font-mono text-text-muted whitespace-nowrap">
                        {entry.year}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Work Experience */}
            <div>
              <h3 className="text-lg font-semibold text-text-primary mb-6 flex items-center gap-3">
                <Briefcase size={20} className="text-accent" />
                Experience
              </h3>
              <div className="space-y-4">
                {work.map((entry) => (
                  <div
                    key={entry.id}
                    className="bg-surface border border-border rounded-xl p-5 hover:border-text-muted transition-colors duration-200"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="font-medium text-text-primary">
                          {entry.role}
                        </h4>
                        <p className="text-sm text-text-secondary mt-1">
                          {entry.company}
                        </p>
                        {entry.description && (
                          <p className="text-sm text-text-muted mt-2">
                            {entry.description}
                          </p>
                        )}
                      </div>
                      <span className="text-sm font-mono text-text-muted whitespace-nowrap">
                        {entry.year}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="space-y-8">
              {skillCategories.map((category) => (
                <div key={category.name}>
                  <h3 className="text-sm font-medium uppercase tracking-wider text-text-muted mb-4">
                    {category.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <SkillTag key={skill} name={skill} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
