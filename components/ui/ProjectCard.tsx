"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { SkillTag } from "./SkillTag";

interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  const isCompleted = project.status === "completed";

  return (
    <div
      onClick={onClick}
      className={`group relative rounded-xl overflow-hidden border transition-[border-color,box-shadow,transform] duration-150 ${isCompleted
          ? "border-border hover:border-white/10 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-primary/5 hover:-translate-y-1 bg-surface cursor-pointer"
          : "border-border-subtle bg-surface/50 opacity-70"
        }`}
    >
      {/* Image area */}
      <div className="relative aspect-video overflow-hidden bg-surface-elevated">
        <div
          className={`absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-surface/90 z-10 ${isCompleted
              ? "group-hover:from-background/20 group-hover:via-background/40 group-hover:to-background/80"
              : ""
            } transition-[background] duration-200`}
        />

        {/* Project image */}
        <Image
          src={project.image}
          alt={project.title}
          fill
          className={`object-cover transition-[filter,transform] duration-200 ${isCompleted
              ? "grayscale group-hover:grayscale-0 group-hover:scale-105"
              : "grayscale opacity-50"
            }`}
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        {/* Glassmorphic overlay button on hover */}
        {isCompleted && (
          <div className="absolute inset-0 flex items-end justify-center pb-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (onClick) onClick();
              }}
              className="glass px-6 py-2.5 rounded-full text-sm text-text-primary flex items-center gap-2 hover:bg-surface-elevated/60 transition-colors cursor-pointer"
            >
              Learn More <ArrowUpRight size={14} />
            </button>
          </div>
        )}

        {/* Status badge for non-completed */}
        {!isCompleted && (
          <div className="absolute top-3 right-3 z-20">
            <span className="px-3 py-1 text-xs font-mono rounded-full bg-surface border border-border text-text-muted">
              {project.status === "in-progress" ? "In Progress" : "Planned"}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-text-primary mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-text-secondary mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 4).map((tag) => (
            <SkillTag key={tag} name={tag} />
          ))}
        </div>
      </div>
    </div>
  );
}
