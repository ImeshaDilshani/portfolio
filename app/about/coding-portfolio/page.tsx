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
              backgroundImage: "url('/about-bg.jpg')",
            }}
          />
        </div>

        <div className="relative z-10 container text-center space-y-4 px-4 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-black rounded-full mb-6">
            <span className="text-sm font-medium text-black">
              💻 Software Projects
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance text-black hover-text-glow transition-all duration-300 font-[family-name:var(--font-adamina)]">
            Coding Portfolio
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto font-[family-name:var(--font-adamina)]">
            Software development projects and applications
          </p>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Building solutions with{" "}
            <span className="text-black font-medium">modern frameworks</span>,{" "}
            <span className="text-black font-medium">clean code practices</span>, and{" "}
            <span className="text-black font-medium">user-centered design</span>.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <div className="py-16 md:py-24">
        <div className="container px-4 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <aside className="lg:col-span-1" data-animate="fade-right">
              <div className="sticky top-24 space-y-2">
                <a href="/about" className="block">
                  <h2 className="text-xl font-bold mb-6 text-black dark:text-white hover-text-glow">
                    About
                  </h2>
                </a>
                <nav className="space-y-1">
                  <a
                    href="/about/work-experience"
                    className="block py-2 text-sm text-muted-foreground hover:text-black dark:hover:text-white transition-all duration-300 uppercase tracking-wide hover:translate-x-2 hover-lift"
                  >
                    WORK EXPERIENCE
                  </a>
                  <a
                    href="/about/ai-research"
                    className="block py-2 text-sm text-muted-foreground hover:text-black dark:hover:text-white transition-all duration-300 uppercase tracking-wide hover:translate-x-2 hover-lift"
                  >
                    MY RESEARCH
                  </a>
                  <a
                    href="/about/presentations"
                    className="block py-2 text-sm text-muted-foreground hover:text-black dark:hover:text-white transition-all duration-300 uppercase tracking-wide hover:translate-x-2 hover-lift"
                  >
                    PRESENTATIONS
                  </a>
                  <a
                    href="/about/data-portfolio"
                    className="block py-2 text-sm text-muted-foreground hover:text-black dark:hover:text-white transition-all duration-300 uppercase tracking-wide hover:translate-x-2 hover-lift"
                  >
                    DATA PORTFOLIO
                  </a>
                  <a
                    href="/about/coding-portfolio"
                    className="block py-2 text-sm text-foreground font-medium hover:text-black dark:hover:text-white transition-all duration-300 uppercase tracking-wide hover:translate-x-2 hover-lift"
                  >
                    CODING PORTFOLIO
                  </a>
                  <a
                    href="/about/moocs"
                    className="block py-2 text-sm text-muted-foreground hover:text-black dark:hover:text-white transition-all duration-300 uppercase tracking-wide hover:translate-x-2 hover-lift"
                  >
                    MOOCS
                  </a>
                  <a
                    href="/about/undergraduate-papers"
                    className="block py-2 text-sm text-muted-foreground hover:text-black dark:hover:text-white transition-all duration-300 uppercase tracking-wide hover:translate-x-2 hover-lift"
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
                  <article>
                    <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden border-2 border-border">
                      <img
                        src="/c-1.png"
                        alt="Web Development Project"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent flex items-end p-6">
                        <div className="text-black">
                          <h3 className="text-2xl md:text-3xl font-bold mb-2">
                            Airline Reservation Management System
                          </h3>
                          <p className="text-sm md:text-base opacity-90">
                            The Airline Reservation Management System is a
                            web-based application that streamlines the process
                            of flight booking and reservation management.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-center gap-4">
                      <a
                        href="https://github.com/ImeshaDilshani/Airline-Reservation-Management-System"
                        className="text-black dark:text-white hover:underline font-medium hover-highlight"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        [GitHub]
                      </a>
                      {/*<span className="text-muted-foreground">|</span>
                      <a
                        href="#"
                        className="text-purple-600 dark:text-purple-400 hover:underline font-medium hover-highlight"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        [GitHub]
                      </a>*/}
                    </div>
                  </article>

                  {/* Project 2: Mobile Development */}
                  <article>
                    <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden border-2 border-border">
                      <img
                        src="/c-2.png"
                        alt="Mobile Development Project"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent flex items-end p-6">
                        <div className="text-black">
                          <h3 className="text-2xl md:text-3xl font-bold mb-2">
                            Fishsnap Mobile application (Identify Fish Species)
                          </h3>
                          <p className="text-sm md:text-base opacity-90">
                            Fishsnap Frontend is a mobile application developed
                            using the Flutter framework with Dart. It is
                            designed to work seamlessly with the Fishsnap
                            Backend, providing a user-friendly interface for
                            users to classify fish species in images.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-center gap-4">
                      <a
                        href="https://github.com/FishSnap-2023/Fishsnap-mobile-app"
                        className="text-black dark:text-white hover:underline font-medium hover-highlight"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        [GitHub]
                      </a>
                      {/*<span className="text-muted-foreground">|</span>
                      <a
                        href="#"
                        className="text-purple-600 dark:text-purple-400 hover:underline font-medium hover-highlight"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        [GitHub]
                      </a>*/}
                    </div>
                  </article>

                  {/* Project 3: Full Stack Application */}
                  {/*<article className="group cursor-pointer">
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
                  </article>*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
