"use client";

import { useEffect, useState } from "react";

const techStack = [
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    name: "HTML5",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  },
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Express",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
  },
  {
    name: "Tailwind CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Python",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  {
    name: "Django",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "MySQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  },
  {
    name: "PostgreSQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  },
  {
    name: "Docker",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  },
  {
    name: "AWS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },
  {
    name: "Figma",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
  },
  {
    name: "VS Code",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
  },
];

export function TechStackRow() {
  return (
    <section className="relative py-12 border-y border-purple-500/20 bg-gradient-to-r from-purple-950/20 via-violet-950/20 to-purple-950/20 overflow-hidden">
      {/* Gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

      {/* Animated Logo Rows */}
      <div className="relative space-y-2">
        {/* First Row - Left to Right */}
        <div className="flex gap-3 animate-scroll-left">
          {[...techStack, ...techStack].map((tech, index) => (
            <div key={`tech-1-${index}`} className="flex-shrink-0 group">
              <div className="relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-xl bg-transparent border border-purple-500/20 backdrop-blur-sm transition-all duration-500 hover:scale-110 hover:rotate-3 hover:border-purple-400/40 hover:shadow-lg hover:shadow-purple-500/30 cursor-pointer p-3">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-600/0 to-violet-600/0 group-hover:from-purple-600/5 group-hover:to-violet-600/5 transition-all duration-500"></div>

                {/* Logo Image */}
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="relative w-full h-full object-contain transition-all duration-500 group-hover:scale-110 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Second Row - Right to Left */}
        <div className="flex gap-3 animate-scroll-right">
          {[...techStack.slice().reverse(), ...techStack.slice().reverse()].map(
            (tech, index) => (
              <div key={`tech-2-${index}`} className="flex-shrink-0 group">
                <div className="relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-xl bg-transparent border border-violet-500/20 backdrop-blur-sm transition-all duration-500 hover:scale-110 hover:-rotate-3 hover:border-violet-400/40 hover:shadow-lg hover:shadow-violet-500/30 cursor-pointer p-3">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-violet-600/0 to-purple-600/0 group-hover:from-violet-600/5 group-hover:to-purple-600/5 transition-all duration-500"></div>

                  {/* Logo Image */}
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="relative w-full h-full object-contain transition-all duration-500 group-hover:scale-110 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100"
                  />
                </div>
              </div>
            ),
          )}
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-violet-600/5 rounded-full blur-3xl pointer-events-none"></div>
    </section>
  );
}
