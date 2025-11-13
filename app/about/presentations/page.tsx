"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PresentationsPage() {
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
                "url('/academic-research-presentation-university.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-950/30 via-black to-gray-950/20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,0,0,0.08),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(0,0,0,0.06),transparent_60%)]" />
        </div>

        <div className="relative z-10 container text-center space-y-4 px-4 animate-fadeInUp">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance text-white hover-text-glow transition-all duration-300">
            Presentations
          </h1>
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
                    className="block py-2 text-sm text-foreground font-medium hover:text-black dark:hover:text-white transition-all duration-300 uppercase tracking-wide hover:translate-x-2 hover-lift"
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
                <p
                  className="text-lg text-center text-muted-foreground hover-lift transition-all duration-300"
                  data-animate="fade-up"
                >
                  These are academic and industry presentations that I have
                  given.
                </p>

                {/* Master's Thesis Defense */}
                <section className="space-y-6" data-animate="fade-up">
                  <div className="border-l-4 border-purple-500 dark:border-purple-400 pl-4 hover:border-purple-600 dark:hover:border-purple-300 transition-colors duration-300">
                    <h2 className="text-2xl font-bold hover-text-glow transition-all duration-300">
                      TEXT CLASSIFICATION
                    </h2>
                    <p className="text-muted-foreground mt-2">
                      Academic Presentation
                    </p>
                  </div>
                  <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden border-2 border-border hover:border-gray-500/50 transition-all duration-300 group">
                    <img
                      src="/presentation-1.png"
                      alt="Master's Thesis Defense Slides"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="flex justify-center">
                    <a
                      href="https://drive.google.com/file/d/1QUDfTq7X8h0tbaBz9FUOrDf0vcXEGbHs/view?usp=sharing"
                      className="text-black dark:text-white hover:underline font-medium hover-highlight"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      [View Slides]
                    </a>
                  </div>
                </section>

                {/* PhD Research Defense */}
                <section className="space-y-6" data-animate="fade-up">
                  <div className="border-l-4 border-black dark:border-gray-400 pl-4 hover:border-gray-800 dark:hover:border-gray-300 transition-colors duration-300">
                    <h2 className="text-2xl font-bold hover-text-glow transition-all duration-300">
                      NOSQL SOLUTIONS TO HANDLE BIG DATA
                    </h2>
                    <p className="text-muted-foreground mt-2">
                      Academic Presentation
                    </p>
                  </div>
                  <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden border-2 border-border hover:border-gray-500/50 transition-all duration-300 group">
                    <img
                      src="/presentation-2.png"
                      alt="PhD Research Defense Slides"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="flex justify-center">
                    <a
                      href="https://drive.google.com/file/d/1ADBl8-gjo85Gp7MGZ7Xowr17mO57_hFn/view?usp=sharing"
                      className="text-black dark:text-white hover:underline font-medium hover-highlight"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      [View Slides]
                    </a>
                  </div>
                </section>

                <section className="space-y-6" data-animate="fade-up">
                  <div className="border-l-4 border-black dark:border-gray-400 pl-4 hover:border-gray-800 dark:hover:border-gray-300 transition-colors duration-300">
                    <h2 className="text-2xl font-bold hover-text-glow transition-all duration-300">
                      The SAP S/4HANA TRANSFORMATION
                    </h2>
                    <p className="text-muted-foreground mt-2">
                      Academic Presentation
                    </p>
                  </div>
                  <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden border-2 border-border hover:border-gray-500/50 transition-all duration-300 group">
                    <img
                      src="/PRESENTATION-3.png"
                      alt="PhD Research Defense Slides"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="flex justify-center">
                    <a
                      href="https://drive.google.com/file/d/1l8tZvlJgmL3dYumRy87n9jyEDsjHB3he/view?usp=sharing"
                      className="text-black dark:text-white hover:underline font-medium hover-highlight"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      [View Slides]
                    </a>
                  </div>
                </section>

                <section className="space-y-6" data-animate="fade-up">
                  <div className="border-l-4 border-black dark:border-gray-400 pl-4 hover:border-gray-800 dark:hover:border-gray-300 transition-colors duration-300">
                    <h2 className="text-2xl font-bold hover-text-glow transition-all duration-300">
                      NEXT-GENERATION REAL-TIME SPEECH TRANSLATION (RESEARCH
                      FINAL VIVA)
                    </h2>
                    <p className="text-muted-foreground mt-2">
                      Academic Presentation
                    </p>
                  </div>
                  <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden border-2 border-border hover:border-gray-500/50 transition-all duration-300 group">
                    <img
                      src="/presentation-5.png"
                      alt="PhD Research Defense Slides"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="flex justify-center">
                    <a
                      href="https://drive.google.com/file/d/1ItWURTqZKqqlg8ZIeyzMTphR_iBKZIHo/view?usp=sharing"
                      className="text-black dark:text-white hover:underline font-medium hover-highlight"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      [View Slides]
                    </a>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
