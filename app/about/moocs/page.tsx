"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MOOCsPage() {
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
              backgroundImage: "url('/free-knowledge.webp')",
            }}
          />
        </div>

        <div className="relative z-10 container text-center space-y-4 px-4 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-black rounded-full mb-6">
            <span className="text-sm font-medium text-black">
              📚 Online Learning
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance text-black hover-text-glow transition-all duration-300 font-[family-name:var(--font-adamina)]">
            MOOCs
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto font-[family-name:var(--font-adamina)]">
            Continuous learning through online courses and certifications
          </p>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Expanding my knowledge through{" "}
            <span className="text-black font-medium">specialized courses</span>,{" "}
            <span className="text-black font-medium">professional certifications</span>, and{" "}
            <span className="text-black font-medium">lifelong learning</span>.
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
                    className="block py-2 text-sm text-foreground font-medium hover:text-black dark:hover:text-white transition-all duration-300 uppercase tracking-wide hover:translate-x-2 hover-lift"
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
            <div className="lg:col-span-3 space-y-12">
              <div className="space-y-12">
                <section data-animate="fade-up">
                  <h2 className="text-3xl font-bold mb-6 text-center hover-text-glow transition-all duration-300">
                    Free Knowledge
                  </h2>
                  <p className="text-lg leading-relaxed text-center hover-lift transition-all duration-300">
                    The world is rapidly shifting from one-time education to
                    lifelong learning. As careers evolve and new challenges
                    emerge, continuous learning has become essential beyond
                    traditional degrees. For me, education is an ongoing journey
                    that integrates seamlessly with my daily and professional
                    life. The MOOCs and online programs I’ve completed have
                    played a key role in helping me stay current with the
                    ever-changing world of technology and in continuously
                    strengthening my technical and professional skills.
                  </p>
                </section>

                {/* Course 1: Introduction to Data Science */}
                <article
                  className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start"
                  data-animate="fade-up"
                >
                  <div className="md:col-span-1">
                    <div className="relative w-full h-48 rounded-lg overflow-hidden border-2 border-border hover:border-gray-500/50 transition-all duration-300 group">
                      <img
                        src="/cisco-ds.webp"
                        alt="Introduction to Data Science"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>
                  <div className="md:col-span-2 space-y-3 hover-lift transition-all duration-300">
                    <h3 className="text-2xl font-bold uppercase hover-text-glow transition-all duration-300">
                      Introduction to Data Science
                    </h3>
                    <p className="text-base leading-relaxed">
                      <span className="font-semibold">Platform:</span> Cisco
                      NetAcad
                      <br />
                      <span className="font-semibold">Brief Note:</span> This
                      course provides a comprehensive introduction to data
                      science fundamentals, covering data analysis techniques,
                      visualization, and basic statistical concepts essential
                      for working with data.
                    </p>
                    <a
                      href="https://www.netacad.com/courses/introduction-data-science?courseLang=en-US"
                      className="text-black dark:text-white hover:underline font-medium inline-block hover-highlight"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Course →
                    </a>
                  </div>
                </article>

                <hr className="border-border" />

                {/* Course 2: Stanford Lagunita */}
                <article
                  className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start"
                  data-animate="fade-up"
                >
                  <div className="md:col-span-1">
                    <div className="relative w-full h-48 rounded-lg overflow-hidden border-2 border-border hover:border-gray-500/50 transition-all duration-300 group">
                      <img
                        src="/stanford-online.webp"
                        alt="Stanford Lagunita Courses"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>
                  <div className="md:col-span-2 space-y-3 hover-lift transition-all duration-300">
                    <h3 className="text-2xl font-bold uppercase hover-text-glow transition-all duration-300">
                      Stanford Lagunita Learning Platform
                    </h3>
                    <p className="text-base leading-relaxed">
                      <span className="font-semibold">Platform:</span> Stanford
                      Online
                      <br />
                      <span className="font-semibold">Brief Note:</span>{" "}
                      Stanford's Lagunita platform offers free online courses
                      from Stanford faculty across various subjects including
                      computer science, algorithms, machine learning, and more.
                      These courses provide university-level education with
                      high-quality content.
                    </p>
                    <a
                      href="https://online.stanford.edu/lagunita-learning-platform"
                      className="text-black dark:text-white hover:underline font-medium inline-block hover-highlight"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Platform →
                    </a>
                  </div>
                </article>

                <hr className="border-border" />

                {/* Course 3: Extract, Transform and Load Data in Power BI */}
                <article
                  className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start"
                  data-animate="fade-up"
                >
                  <div className="md:col-span-1">
                    <div className="relative w-full h-48 rounded-lg overflow-hidden border-2 border-border hover:border-gray-500/50 transition-all duration-300 group">
                      <img
                        src="/linkdin-learn.webp"
                        alt="Power BI ETL Course"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>
                  <div className="md:col-span-2 space-y-3 hover-lift transition-all duration-300">
                    <h3 className="text-2xl font-bold uppercase hover-text-glow transition-all duration-300">
                      Extract, Transform and Load Data in Power BI
                    </h3>
                    <p className="text-base leading-relaxed">
                      <span className="font-semibold">Platform:</span> LinkedIn
                      Learning
                      <br />
                      <span className="font-semibold">Brief Note:</span> This
                      course teaches essential ETL (Extract, Transform, Load)
                      processes in Power BI, covering data preparation,
                      transformation techniques, and best practices for creating
                      efficient and professional business intelligence
                      solutions.
                    </p>
                    <a
                      href="https://www.linkedin.com/learning/"
                      className="text-black dark:text-white hover:underline font-medium inline-block hover-highlight"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Course →
                    </a>
                  </div>
                </article>

                <hr className="border-border" />

                {/* Course 4: Java Programming */}
                <article
                  className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start"
                  data-animate="fade-up"
                >
                  <div className="md:col-span-1">
                    <div className="relative w-full h-48 rounded-lg overflow-hidden border-2 border-border hover:border-gray-500/50 transition-all duration-300 group">
                      <img
                        src="/coursera.webp"
                        alt="Java Programming Course"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>
                  <div className="md:col-span-2 space-y-3 hover-lift transition-all duration-300">
                    <h3 className="text-2xl font-bold uppercase hover-text-glow transition-all duration-300">
                      Java Programming
                    </h3>
                    <p className="text-base leading-relaxed">
                      <span className="font-semibold">Platform:</span> Coursera
                      <br />
                      <span className="font-semibold">Brief Note:</span> A
                      comprehensive Java programming course covering
                      object-oriented programming principles, data structures,
                      algorithms, and software development best practices.
                      Perfect for building strong foundation in Java
                      development.
                    </p>
                    <a
                      href="https://www.coursera.org/"
                      className="text-black dark:text-white hover:underline font-medium inline-block hover-highlight"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Course →
                    </a>
                  </div>
                </article>

                <hr className="border-border" />

                {/* Course 5: Forage Virtual Experience Programs */}
                <article
                  className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start"
                  data-animate="fade-up"
                >
                  <div className="md:col-span-1">
                    <div className="relative w-full h-48 rounded-lg overflow-hidden border-2 border-border hover:border-gray-500/50 transition-all duration-300 group">
                      <img
                        src="/forge.webp"
                        alt="Forage Virtual Experience"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>
                  <div className="md:col-span-2 space-y-3 hover-lift transition-all duration-300">
                    <h3 className="text-2xl font-bold uppercase hover-text-glow transition-all duration-300">
                      Forage Virtual Experience Programs
                    </h3>
                    <p className="text-base leading-relaxed">
                      <span className="font-semibold">Platform:</span> Forage
                      <br />
                      <span className="font-semibold">Brief Note:</span> Forage
                      offers free virtual work experience programs from leading
                      companies, allowing you to build practical skills through
                      real-world job simulations. These programs provide
                      hands-on experience in various fields including software
                      engineering, data analytics, consulting, and more.
                    </p>
                    <a
                      href="https://www.theforage.com/"
                      className="text-black dark:text-white hover:underline font-medium inline-block hover-highlight"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Platform →
                    </a>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
