import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatedCard } from "@/components/animated-card";

export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  tags?: string[];
  links?: { label: string; href: string }[];
  year?: number;
}

export function ProjectCard({ project, className }: { project: Project; className?: string }) {
  return (
    <article className={`${className ?? ""} h-full border border-[var(--border)] bg-[var(--card)] hover:bg-[var(--muted)] transition-colors duration-300 flex flex-col group`}>
      <div className="relative w-full h-44 md:h-48 lg:h-48 border-b border-[var(--border)] overflow-hidden bg-[var(--muted)]">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-xs font-medium tracking-widest uppercase text-[var(--muted-foreground)]">
            No image
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1 space-y-4">
        <div className="flex-1 space-y-2">
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.tags?.map((tag) => (
              <span key={tag} className="px-2 py-0.5 text-[0.65rem] font-medium uppercase tracking-widest border border-[var(--border)] text-[var(--muted-foreground)]">
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-lg font-medium text-[var(--foreground)] line-clamp-2 leading-tight">{project.title}</h3>
          <p className="text-sm text-[var(--muted-foreground)] line-clamp-3 leading-relaxed">{project.description}</p>
        </div>

        <div className="pt-4 mt-auto border-t border-[var(--border)] flex flex-wrap gap-4">
          {project.links?.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium tracking-widest uppercase text-[var(--foreground)] hover:opacity-70 transition-opacity flex items-center gap-1"
            >
              {l.label} ↗
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
