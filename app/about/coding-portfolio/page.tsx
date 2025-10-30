"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CodingPortfolioPage() {
  useEffect(() => {
    // Initialize scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, observerOptions);

    // Observe all elements with data-animate attribute
    const animatedElements = document.querySelectorAll("[data-animate]");
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      {/* Cover Section */}
      <section className="relative h-[80vh] min-h-[550px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
            style={{
              backgroundImage: "url('/modern-ecommerce-dashboard.png')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-950/30 via-black to-purple-950/20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(80,0,180,0.08),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(50,0,120,0.06),transparent_60%)]" />
        </div>

        <div className="relative z-10 container text-center space-y-4 px-4 animate-fadeInUp">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance text-white hover-text-glow transition-all duration-300">
            Coding Portfolio
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <div className="py-16 md:py-24">
        <div className="container px-4 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <aside className="lg:col-span-1" data-animate="fade-right">
              <div className="sticky top-24 space-y-2">
                <a href="/about" className="block">
                  <h2 className="text-xl font-bold mb-6 text-purple-600 dark:text-purple-400 hover-text-glow">
                    About
                  </h2>
                </a>
                <nav className="space-y-1">
                  <a
                    href="/about/work-experience"
                    className="block py-2 text-sm text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 uppercase tracking-wide hover:translate-x-2 hover-lift"
                  >
                    WORK EXPERIENCE
                  </a>
                  <a
                    href="/about/ai-research"
                    className="block py-2 text-sm text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 uppercase tracking-wide hover:translate-x-2 hover-lift"
                  >
                    MY RESEARCH
                  </a>
                  <a
                    href="/about/presentations"
                    className="block py-2 text-sm text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 uppercase tracking-wide hover:translate-x-2 hover-lift"
                  >
                    PRESENTATIONS
                  </a>
                  <a
                    href="/about/data-portfolio"
                    className="block py-2 text-sm text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 uppercase tracking-wide hover:translate-x-2 hover-lift"
                  >
                    DATA PORTFOLIO
                  </a>
                  <a
                    href="/about/coding-portfolio"
                    className="block py-2 text-sm text-foreground font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 uppercase tracking-wide hover:translate-x-2 hover-lift"
                  >
                    CODING PORTFOLIO
                  </a>
                  <a
                    href="/about/moocs"
                    className="block py-2 text-sm text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 uppercase tracking-wide hover:translate-x-2 hover-lift"
                  >
                    MOOCS
                  </a>
                  <a
                    href="/about/undergraduate-papers"
                    className="block py-2 text-sm text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 uppercase tracking-wide hover:translate-x-2 hover-lift"
                  >
                    UNDERGRADUATE PAPERS
                  </a>
                </nav>
              </div>
            </aside>

            {/* Right Content Area */}
            <div className="lg:col-span-3 space-y-8">
              <div className="space-y-12">
                <p className="text-lg text-center leading-relaxed">
                  A list of my top code projects, including web development and
                  mobile development. Most projects are available fully
                  open-sourced on GitHub, with a MIT license.
                </p>

                {/* Project Cards */}
                <div className="space-y-8">
                  {/* Project 1: Web Development */}
                  <article className="group cursor-pointer">
                    <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden border-2 border-border hover:border-primary transition-colors">
                      <img
                        src="/modern-ecommerce-dashboard.png"
                        alt="Web Development Project"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent flex items-end p-6">
                        <div className="text-white">
                          <h3 className="text-2xl md:text-3xl font-bold mb-2">
                            [WEB PROJECT TITLE]
                          </h3>
                          <p className="text-sm md:text-base opacity-90">
                            [Project description - technologies and features]
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-center gap-4">
                      <a
                        href="#"
                        className="text-purple-600 dark:text-purple-400 hover:underline font-medium hover-highlight"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        [View Project]
                      </a>
                      <span className="text-muted-foreground">|</span>
                      <a
                        href="#"
                        className="text-purple-600 dark:text-purple-400 hover:underline font-medium hover-highlight"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        [GitHub]
                      </a>
                    </div>
                  </article>

                  {/* Project 2: Mobile Development */}
                  <article className="group cursor-pointer">
                    <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden border-2 border-border hover:border-primary transition-colors">
                      <img
                        src="/modern-task-management-app-interface.jpg"
                        alt="Mobile Development Project"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent flex items-end p-6">
                        <div className="text-white">
                          <h3 className="text-2xl md:text-3xl font-bold mb-2">
                            [MOBILE PROJECT TITLE]
                          </h3>
                          <p className="text-sm md:text-base opacity-90">
                            [Project description - platform and features]
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-center gap-4">
                      <a
                        href="#"
                        className="text-purple-600 dark:text-purple-400 hover:underline font-medium hover-highlight"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        [View Project]
                      </a>
                      <span className="text-muted-foreground">|</span>
                      <a
                        href="#"
                        className="text-purple-600 dark:text-purple-400 hover:underline font-medium hover-highlight"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        [GitHub]
                      </a>
                    </div>
                  </article>

                  {/* Project 3: Full Stack Application */}
                  <article className="group cursor-pointer">
                    <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden border-2 border-border hover:border-primary transition-colors">
                      <img
                        src="/modern-tech-workspace-with-laptop-and-code.jpg"
                        alt="Full Stack Project"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent flex items-end p-6">
                        <div className="text-white">
                          <h3 className="text-2xl md:text-3xl font-bold mb-2">
                            [FULL STACK PROJECT TITLE]
                          </h3>
                          <p className="text-sm md:text-base opacity-90">
                            [Project description - tech stack and purpose]
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-center gap-4">
                      <a
                        href="#"
                        className="text-purple-600 dark:text-purple-400 hover:underline font-medium hover-highlight"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        [View Project]
                      </a>
                      <span className="text-muted-foreground">|</span>
                      <a
                        href="#"
                        className="text-purple-600 dark:text-purple-400 hover:underline font-medium hover-highlight"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        [GitHub]
                      </a>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
