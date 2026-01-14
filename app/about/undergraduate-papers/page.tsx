"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function UndergraduatePapersPage() {
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
              backgroundImage:
                "url('/data-journalism-writing-laptop-notebook.jpg')",
            }}
          />
        </div>

        <div className="relative z-10 container text-center space-y-4 px-4 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-black rounded-full mb-6">
            <span className="text-sm font-medium text-black">
              📝 Academic Work
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance text-black hover-text-glow transition-all duration-300 font-[family-name:var(--font-adamina)]">
            Undergraduate Papers
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto font-[family-name:var(--font-adamina)]">
            Academic papers and research from university
          </p>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Foundation work in{" "}
            <span className="text-black font-medium">computer science</span>,{" "}
            <span className="text-black font-medium">data structures</span>, and{" "}
            <span className="text-black font-medium">theoretical concepts</span>.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <div className="py-16 md:py-24">
        <div className="container px-4 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Persistent Sidebar Navigation */}
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
                    className="block py-2 text-sm text-muted-foreground hover:text-black dark:hover:text-white transition-all duration-300 uppercase tracking-wide hover:translate-x-2 hover-lift"
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
                    className="block py-2 text-sm text-foreground font-medium hover:text-black dark:hover:text-white transition-all duration-300 uppercase tracking-wide hover:translate-x-2 hover-lift"
                  >
                    UNDERGRADUATE PAPERS
                  </a>
                </nav>
              </div>
            </aside>

            {/* Right Content Area */}
            <div className="lg:col-span-3 space-y-12">
              <div className="space-y-8">
                <p
                  className="text-lg text-center leading-relaxed hover-lift transition-all duration-300"
                  data-animate="fade-up"
                >
                  Selected research papers and projects completed during my
                  undergraduate studies at the University of Kelaniya. These
                  works demonstrate my academic foundation and early research
                  interests in computer science and engineering.
                </p>

                {/* Paper 1: Bridging Linguistic Gaps */}
                <article
                  className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
                  data-animate="fade-up"
                >
                  <div className="md:col-span-1">
                    <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden border-2 border-border hover:border-gray-500/50 transition-all duration-300 group">
                      <img
                        src="/research/up1.webp"
                        alt="Bridging Linguistic Gaps Paper"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>
                  <div className="md:col-span-2 space-y-4 hover-lift transition-all duration-300">
                    <h3 className="text-2xl font-bold hover-text-glow transition-all duration-300">
                      Bridging Linguistic Gaps: A Review of AI-Driven
                      Speech-to-Speech Translation for Sinhala and Tamil in Sri
                      Lanka
                    </h3>
                    <p className="text-base italic text-muted-foreground">
                      8ᵗʰ International Research Conference on Smart Computing
                      and Systems Engineering, University of Kelaniya, Sri Lanka
                    </p>
                    <a
                      href="https://ieeexplore.ieee.org/document/11030975"
                      className="inline-block bg-black dark:bg-gray-800 text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      READ IT HERE
                    </a>
                  </div>
                </article>

                <hr className="border-border" />

                {/* Paper 2: Placeholder */}
                {/*<article
                  className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
                  data-animate="fade-up"
                >
                  <div className="md:col-span-1">
                    <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden border-2 border-border hover:border-purple-500/50 transition-all duration-300 group">
                      <img
                        src="/academic-research-presentation-university.webp"
                        alt="Research Paper 1"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>
                  <div className="md:col-span-2 space-y-4 hover-lift transition-all duration-300">
                    <h3 className="text-2xl font-bold hover-text-glow transition-all duration-300">
                      [Paper Title]
                    </h3>
                    <p className="text-base italic text-muted-foreground">
                      [Conference/Journal Name, Year]
                    </p>
                    <a
                      href="#"
                      className="inline-block bg-purple-600 dark:bg-purple-500 text-white px-6 py-2 rounded-full font-medium hover:bg-purple-700 dark:hover:bg-purple-600 transition-all duration-300 hover:scale-105"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      READ IT HERE
                    </a>
                  </div>
                </article>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
