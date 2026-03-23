import Link from "next/link";

const techStack = {
  "Programming Languages": ["Python", "JavaScript/TypeScript", "R", "SQL", "Java", "C"],
  "Full Stack Engineering": ["Next.js", "React", "Node.js", "Express", "Django", "Spring Boot", "HTML/CSS", "Tailwind CSS"],
  "Mobile Application Development": ["Flutter", "React Native", "Supabase", "Firebase"],
  "Data Science & ML": ["TensorFlow", "PyTorch", "scikit-learn", "Pandas", "NumPy", "Keras"],
  "Databases": ["PostgreSQL", "MongoDB", "MySQL", "Supabase", "Firebase"],
  "Cloud & DevOps": ["Azure", "Docker", "AWS", "Git"],
  "Design": ["Adobe Illustrator", "Adobe Photoshop"],
  "Tools & Platforms": ["Jupyter", "Google Colab", "VS Code", "Figma", "Power BI"],
};

export default function TechStackPage() {
  return (
    <main>
      {/* ── HEADER ──────────────────────────────────────── */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-10">
            <p className="text-xs font-medium tracking-widest uppercase text-[var(--muted-foreground)] pt-1">
              Technology
            </p>
            <div className="space-y-4 max-w-2xl">
              <h1 className="text-4xl md:text-5xl text-[var(--foreground)]">Tech Stack</h1>
              <p className="text-[var(--muted-foreground)] leading-relaxed">
                Technologies, frameworks, and tools I use to build scalable software and deploy machine learning models.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTENT ───────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="max-w-3xl ml-auto lg:mx-auto">
          <Link href="/myworks" className="text-xs font-medium tracking-widest uppercase text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors mb-12 inline-block">
            ← Back to My Works
          </Link>

          <h2 className="text-3xl text-[var(--foreground)] mb-6">The Tools Behind My Work</h2>
          <p className="text-[var(--muted-foreground)] leading-relaxed mb-16 border-l-2 border-[var(--border)] pl-6">
            Over the years, I've worked with a diverse range of technologies across different domains - from web development and data science to cloud infrastructure and design tools. Here's a comprehensive overview of my technical toolkit.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {Object.entries(techStack).map(([category, technologies]) => (
              <div key={category} className="space-y-6">
                <h3 className="text-sm font-medium tracking-widest uppercase text-[var(--foreground)] border-b border-[var(--border)] pb-3">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-xs text-[var(--muted-foreground)] border border-[var(--border)] bg-[var(--card)] hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
