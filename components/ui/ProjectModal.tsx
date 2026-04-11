"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight, Code, ExternalLink } from "lucide-react";
import Image from "next/image";
import type { Project } from "@/data/projects";
import { SkillTag } from "./SkillTag";
import { useEffect } from "react";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12">
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-[4px]"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300, duration: 0.3 }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-surface-elevated border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden z-10"
          >
            {/* Header / Sticky Close Button */}
            <div className="absolute top-4 right-4 z-20">
              <button
                onClick={onClose}
                className="p-2.5 bg-black/50 hover:bg-black/80 backdrop-blur-md rounded-full text-white transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto w-full h-full flex-1">
              {/* Cover Image */}
              <div className="relative w-full aspect-video md:aspect-[21/9] bg-surface">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-elevated via-surface-elevated/40 to-transparent" />
              </div>

              {/* Content Body */}
              <div className="p-6 md:p-10 space-y-8 -mt-16 relative z-10">
                {/* Title & Tags */}
                <div>
                  <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6 drop-shadow-md">
                    {project.title}
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <SkillTag key={tag} name={tag} />
                    ))}
                  </div>
                </div>

                {/* Links */}
                {(project.githubUrl || project.liveUrl) && (
                  <div className="flex flex-wrap gap-6 py-4 border-y border-border-subtle">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-text-primary hover:text-accent transition-colors"
                      >
                        <Code size={20} />
                        View Source
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-text-primary hover:text-accent transition-colors"
                      >
                        <ExternalLink size={20} />
                        Live Demo
                      </a>
                    )}
                  </div>
                )}

                {/* Description Text */}
                <div className="prose prose-invert max-w-none text-text-secondary">
                  {project.longDescription ? (
                    Array.isArray(project.longDescription) ? (
                      project.longDescription.map((p, i) => (
                        <p key={i} className="leading-relaxed mb-4 text-base md:text-lg">
                          {p}
                        </p>
                      ))
                    ) : (
                      <p className="leading-relaxed whitespace-pre-line text-base md:text-lg">
                        {project.longDescription}
                      </p>
                    )
                  ) : (
                    <p className="leading-relaxed text-base md:text-lg">
                      {project.description}
                    </p>
                  )}
                </div>

                {/* Additional Gallery Images */}
                {project.images && project.images.length > 0 && (
                  <div className="pt-8 space-y-6">
                    <h3 className="text-2xl font-semibold text-text-primary">Gallery & Screenshots</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {project.images.map((img, i) => (
                        <div key={i} className="relative aspect-video rounded-xl overflow-hidden border border-border bg-surface">
                          <Image
                            src={img}
                            alt={`${project.title} screenshot ${i + 1}`}
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-500 cursor-pointer"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
