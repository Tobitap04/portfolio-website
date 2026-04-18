"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight, Code, ExternalLink } from "lucide-react";
import Image from "next/image";
import type { Project } from "@/data/projects";
import { SkillTag } from "./SkillTag";
import { useEffect, useState } from "react";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<string | null>(null);

  // Prevent body scroll when modal is open or lightbox is active
  useEffect(() => {
    if (isOpen || selectedGalleryImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, selectedGalleryImage]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center px-4 pb-4 pt-24 sm:px-6 sm:pb-6 sm:pt-24 md:px-12 md:pb-12 md:pt-24">
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
            className="relative w-full max-w-4xl max-h-[calc(100vh-8rem)] bg-surface-elevated border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden z-10"
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
              <div className="relative w-full aspect-video bg-surface">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 896px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-elevated from-[0%] via-surface-elevated/20 via-[30%] to-transparent to-[50%]" />
              </div>

              {/* Content Body */}
              <div className="p-5 md:p-8 space-y-5 -mt-8 relative z-10">
                {/* Title & Tags */}
                <div>
                  <h2 className="text-xl md:text-3xl font-bold text-text-primary mb-3 drop-shadow-md">
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
                        {project.linkText || "View Source"}
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
                        {project.linkText || "View live website"}
                      </a>
                    )}
                  </div>
                )}

                {/* Description Text */}
                <div className="prose prose-invert max-w-none text-text-secondary">
                  {project.longDescription ? (
                    Array.isArray(project.longDescription) ? (
                      project.longDescription.map((p, i) => (
                        <p key={i} className="leading-relaxed mb-3 text-sm md:text-base">
                          {p}
                        </p>
                      ))
                    ) : (
                      <p className="leading-relaxed whitespace-pre-line text-sm md:text-base">
                        {project.longDescription}
                      </p>
                    )
                  ) : (
                    <p className="leading-relaxed text-sm md:text-base">
                      {project.description}
                    </p>
                  )}
                </div>

                {/* Additional Gallery Images */}
                {project.gallery && project.gallery.length > 0 && (
                  <div className="pt-8 space-y-6">
                    <h3 className="text-2xl font-semibold text-text-primary">Gallery & Screenshots</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {project.gallery.map((img, i) => (
                        <div key={i} className="space-y-3">
                          <button 
                            onClick={() => setSelectedGalleryImage(img.url)}
                            className="relative w-full rounded-xl overflow-hidden border border-border bg-surface shadow-lg group/img cursor-zoom-in"
                          >
                            <Image
                              src={img.url}
                              alt={img.caption || `${project.title} screenshot ${i + 1}`}
                              width={800}
                              height={1200}
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                              className="w-full h-auto group-hover/img:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-accent/0 group-hover/img:bg-accent/5 transition-colors duration-300" />
                          </button>
                          {img.caption && (
                            <p className="text-sm text-text-secondary px-1 font-medium italic border-l-2 border-accent pl-3">
                              {img.caption}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Lightbox / Fullscreen Image Overlay */}
          <AnimatePresence>
            {selectedGalleryImage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[300] flex items-center justify-center p-4 md:p-12"
              >
                <div 
                  className="absolute inset-0 bg-black/90 backdrop-blur-sm cursor-zoom-out" 
                  onClick={() => setSelectedGalleryImage(null)} 
                />
                
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="relative max-w-5xl max-h-[90vh] z-10"
                >
                  <button
                    onClick={() => setSelectedGalleryImage(null)}
                    className="absolute -top-12 right-0 p-2 text-white/70 hover:text-white transition-colors"
                  >
                    <X size={28} />
                  </button>
                  <div className="relative w-full h-full rounded-lg overflow-hidden border border-white/10 shadow-2xl">
                    <img 
                      src={selectedGalleryImage} 
                      alt="Enlarged view" 
                      className="max-w-full max-h-[80vh] object-contain"
                    />
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </AnimatePresence>
  );
}
