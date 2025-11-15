import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform built with Next.js, featuring product management, shopping cart, and payment integration.",
    image: "/modern-ecommerce-dashboard.png",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    github: "https://github.com/imeshadilshani/ecommerce-platform",
    demo: "https://ecommerce-demo.vercel.app",
  },
  {
    title: "AI Content Generator",
    description:
      "An AI-powered content generation tool that helps writers create engaging blog posts and articles using advanced language models.",
    image: "/ai-writing-assistant-interface.png",
    tags: ["React", "OpenAI", "Node.js", "MongoDB"],
    github: "https://github.com/imeshadilshani/ai-content-generator",
    demo: "https://ai-content-gen.vercel.app",
  },
  {
    title: "Data Visualization Dashboard",
    description:
      "Interactive dashboard for visualizing complex datasets with real-time updates and customizable charts.",
    image: "/data-analytics-dashboard.png",
    tags: ["React", "D3.js", "Python", "FastAPI"],
    github: "https://github.com/imeshadilshani/data-viz-dashboard",
    demo: "https://dataviz-demo.vercel.app",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, team collaboration features, and project tracking.",
    image: "/modern-task-management-app-interface.jpg",
    tags: ["Next.js", "Supabase", "Tailwind CSS", "WebSocket"],
    github: "https://github.com/imeshadilshani/task-manager",
    demo: "https://taskmanager-demo.vercel.app",
  },
]

export default function MyWorksPage() {
  return (
    <main>
      <section className="relative h-[80vh] min-h-[550px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
            style={{
              backgroundImage: "url('/data-science-code-on-multiple-monitors.jpg')",
            }}
          />
        </div>

        <div className="relative z-10 container text-center space-y-4 px-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-black rounded-full mb-6">
            <span className="text-sm font-medium text-black">
              🚀 My Projects
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance text-black font-[family-name:var(--font-adamina)]">Here's What I've Done</h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto font-[family-name:var(--font-adamina)]">
            Showcase of my projects and creative work
          </p>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            A collection of{" "}
            <span className="text-black font-medium">innovative solutions</span>,{" "}
            <span className="text-black font-medium">creative experiments</span>, and{" "}
            <span className="text-black font-medium">real-world applications</span>{" "}
            I've built.
          </p>
        </div>
      </section>

      <div className="py-16 md:py-24">
        <div className="container px-4 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="leading-relaxed">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </Link>
                    </Button>
                    <Button size="sm" asChild>
                      <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
