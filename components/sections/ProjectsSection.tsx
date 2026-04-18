"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { projects, type Project } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ProjectModal } from "@/components/ui/ProjectModal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function ProjectsSection() {
  const featuredProjects = projects.filter((p) => p.featured);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          badge="Featured Projects"
          title="Selected Work"
          subtitle="A collection of projects that showcase my skills across different technologies and problem domains."
        />

        {/* Featured project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <ProjectCard project={project} onClick={() => setSelectedProject(project)} />
              </motion.div>
            ))}
          </div>

        {/* Bottom actions */}
        <motion.div
          className="mt-16 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Button variant="secondary" href="https://github.com/Tobitap04" external>
            All Projects on GitHub
          </Button>
          <Button variant="ghost" href="#contact">
            Get in Touch
          </Button>
        </motion.div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
