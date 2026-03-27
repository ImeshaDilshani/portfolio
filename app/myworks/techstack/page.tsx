"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Code2,
  Layers,
  Smartphone,
  Brain,
  Database,
  Cloud,
  Palette,
  Wrench,
  ArrowLeft,
  ChevronRight
} from "lucide-react";

const techStack = [
  {
    category: "Programming Languages",
    icon: <Code2 className="w-5 h-5" />,
    description: "The foundations of my logic and system building.",
    technologies: ["Python", "JavaScript", "TypeScript", "R", "SQL", "Java", "C"],
  },
  {
    category: "Full Stack Engineering",
    icon: <Layers className="w-5 h-5" />,
    description: "Building scalable, end-to-end web architectures.",
    technologies: ["Next.js", "React", "Node.js", "Express", "Django", "Spring Boot", "Tailwind CSS"],
  },
  {
    category: "Data Science & AI",
    icon: <Brain className="w-5 h-5" />,
    description: "Deep learning, NLP research, and predictive modelling.",
    technologies: ["TensorFlow", "PyTorch", "scikit-learn", "Pandas", "NumPy", "Keras"],
  },
  {
    category: "Mobile Dev",
    icon: <Smartphone className="w-5 h-5" />,
    description: "Cross-platform mobile experiences with modern backends.",
    technologies: ["Flutter", "React Native", "Supabase", "Firebase"],
  },
  {
    category: "Databases",
    icon: <Database className="w-5 h-5" />,
    description: "Managing and optimizing large-scale data storage.",
    technologies: ["PostgreSQL", "MongoDB", "MySQL", "Supabase", "Firebase"],
  },
  {
    category: "Cloud & DevOps",
    icon: <Cloud className="w-5 h-5" />,
    description: "Deployment, CI/CD, and cloud infrastructure.",
    technologies: ["Azure", "Docker", "AWS", "Git"],
  },
  {
    category: "Design",
    icon: <Palette className="w-5 h-5" />,
    description: "Visual identity and creative asset generation.",
    technologies: ["Adobe Illustrator", "Adobe Photoshop", "Figma"],
  },
  {
    category: "Tools & Analytics",
    icon: <Wrench className="w-5 h-5" />,
    description: "Development environments and business intelligence.",
    technologies: ["Jupyter", "VS Code", "Power BI", "Google Colab"],
  },
];

export default function TechStackPage() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      {/* ── HEADER ──────────────────────────────────────── */}

      <section className="border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-10">
            <p className="text-xs font-medium tracking-widest uppercase text-[var(--muted-foreground)] pt-1">
              Tech
            </p>
            <div className="space-y-4 max-w-2xl">
              <h1 className="text-4xl md:text-5xl text-[var(--foreground)]">Tech Stack & Tools</h1>
              <p className="text-[var(--muted-foreground)] leading-relaxed">
                Technologies, frameworks, and tools I work with
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TOOLKIT GRID ───────────────────────────── */}

      <section className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-[var(--border)]">
          {techStack.map((item, index) => (
            <div
              key={item.category}
              className="group border-r border-b border-[var(--border)] bg-[var(--card)] hover:bg-[var(--muted)] transition-colors p-6 md:p-8 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 border border-[var(--border)] bg-[var(--muted)] group-hover:bg-[var(--foreground)] group-hover:text-[var(--background)] transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-lg font-medium text-[var(--foreground)] leading-tight">
                  {item.category}
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Tech list */}
              <div className="mt-auto pt-4 border-t border-[var(--border)]">
                <div className="flex flex-wrap gap-x-3 gap-y-2">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-medium tracking-widest uppercase text-[var(--muted-foreground)] group-hover:text-[var(--foreground)] transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTINUOUS LEARNING ─────────────────────── */}
      <section className="bg-[var(--foreground)] text-[var(--background)] py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-16 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl border-b border-[var(--background)]/20 pb-6">Continuous Improvement</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div className="space-y-4">
                <h4 className="text-lg opacity-90 flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-[var(--muted-foreground)]" />
                  Currently Exploring
                </h4>
                <p className="text-sm opacity-60 leading-relaxed">
                  Diving deeper into Large Language Model (LLM) orchestration and vector databases for more context-aware AI agents.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg opacity-90 flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-[var(--muted-foreground)]" />
                  Future Aspirations
                </h4>
                <p className="text-sm opacity-60 leading-relaxed">
                  Scaling data pipelines with Rust for high-performance processing and exploring real-time analytics at scale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER CALL TO ACTION ──────────────────── */}
      <section className="py-20 md:py-32 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl text-[var(--foreground)] mb-8">Have a project in mind using these tools?</h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-[var(--foreground)] text-[var(--background)] text-sm font-medium tracking-[0.2em] uppercase transition-all hover:gap-5"
          >
            Start a Conversation →
          </Link>
        </div>
      </section>
    </main>
  );
}


