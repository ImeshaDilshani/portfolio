"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
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
    <article data-animate="fade-up" className={`${className ?? ""} h-full`}>
      <AnimatedCard className="overflow-hidden h-full flex flex-col">
        <div className="relative w-full h-44 md:h-48 lg:h-48">
          {project.image ? (
            // use next/image for better performance where available
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          ) : (
            <div className="w-full h-full bg-muted flex items-center justify-center text-sm text-muted-foreground">
              No image
            </div>
          )}
        </div>

        <div className="p-4 md:p-6 flex flex-col flex-1">
          <div className="flex-1">
            <h3 className="text-lg md:text-xl font-semibold mb-1 line-clamp-2">{project.title}</h3>
            <p className="text-sm text-muted-foreground max-h-[6rem] overflow-hidden">{project.description}</p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.links?.map((l) => (
              <Button key={l.href} asChild size="sm" variant={l.label.toLowerCase().includes("github") ? "ghost" : "outline"}>
                <a href={l.href} target="_blank" rel="noopener noreferrer">
                  {l.label}
                </a>
              </Button>
            ))}
          </div>
        </div>
      </AnimatedCard>
    </article>
  );
}

export default ProjectCard;
