import Link from "next/link"
import { Badge } from "@/components/ui/badge"

const techStack = {
  "Programming Languages": [
    "Python", "JavaScript/TypeScript", "R", "SQL", "Java" , "C"
  ],
  "Web Development": [
    "Next.js", "React", "Node.js", "Express", "HTML/CSS", "Tailwind CSS", "Flutter"
  ],
  "Data Science & ML": [
    "TensorFlow", "PyTorch", "scikit-learn", "Pandas", "NumPy", "Keras"
  ],
  "Databases": [
    "PostgreSQL", "MongoDB", "MySQL", "Supabase"
  ],
  "Cloud & DevOps": [
    "Azure", "Docker", "Git"
  ],
  "Design": [
    "Adobe Illustrator", "Adobe Photoshop"
  ],
  "Tools & Platforms": [
    "Jupyter", "VS Code", "Figma", "Power BI"
  ]
}

export default function TechStackPage() {
  return (
    <main>
      <section className="relative h-[80vh] min-h-[550px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
            style={{
              backgroundImage: "url('/academic-research-presentation-university.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-950/30 via-black to-purple-950/20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(80,0,180,0.08),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(50,0,120,0.06),transparent_60%)]" />
        </div>

        <div className="relative z-10 container text-center space-y-4 px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance text-white">Tech Stack</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Technologies, frameworks, and tools I work with
          </p>
        </div>
      </section>

      <div className="py-16 md:py-24">
        <div className="container px-4 max-w-6xl mx-auto">
          <div className="mb-12">
            <Link href="/" className="text-primary hover:underline mb-8 inline-block">
              ← Back to Start
            </Link>
            
            <h2 className="text-3xl font-bold mb-6">The Tools Behind My Work</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Over the years, I've worked with a diverse range of technologies across different domains - from web 
              development and data science to cloud infrastructure and design tools. Here's a comprehensive overview 
              of my technical toolkit.
            </p>

            <div className="space-y-10">
              {Object.entries(techStack).map(([category, technologies]) => (
                <div key={category} className="space-y-4">
                  <h3 className="text-xl font-semibold border-b pb-2 border-border/50">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="px-4 py-2 text-sm font-normal hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
