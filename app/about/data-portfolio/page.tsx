"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DataPortfolioPage() {
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
          <div className="absolute inset-0 bg-gradient-to-br from-gray-950/30 via-black to-gray-950/20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,0,0,0.08),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(0,0,0,0.06),transparent_60%)]" />
        </div>

        <div className="relative z-10 container text-center space-y-4 px-4 animate-fadeInUp">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance text-white hover-text-glow transition-all duration-300">
            Data Portfolio
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
                    className="block py-2 text-sm text-foreground font-medium hover:text-black dark:hover:text-white transition-all duration-300 uppercase tracking-wide hover:translate-x-2 hover-lift"
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
                  className="text-lg text-center leading-relaxed hover-lift transition-all duration-300"
                  data-animate="fade-up"
                >
                  A list of my top data analysis projects, in the form of
                  Jupyter Notebooks and R Notebooks. Most notebooks are
                  available fully open-sourced on GitHub, with a MIT license.
                </p>

                {/* Project Cards */}
                <div className="space-y-8">
                  {/* Project 1: Classifying Tweets */}
                  <article data-animate="fade-up">
                    <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden border-2 border-border">
                      <img
                        src="/r-1.png"
                        alt="Classifying Tweets with Weights & Biases"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent flex items-end p-6">
                        <div className="text-black">
                          <h3 className="text-2xl md:text-3xl font-bold mb-2">
                            Sri Lanka District-wise Weather Forecasting using
                            SARIMA
                          </h3>
                          <p className="text-sm md:text-base opacity-90">
                            Time series analysis and forecasting system for
                            weather data across different districts in Sri Lanka
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-center gap-4">
                      <a
                        href="https://github.com/ImeshaDilshani/SL-districtwise-weather-forecast-sarima/blob/main/1.R"
                        className="text-black dark:text-white hover:underline font-medium hover-highlight"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        [View R Code]
                      </a>
                      <span className="text-muted-foreground">|</span>
                      <a
                        href="https://github.com/ImeshaDilshani/SL-districtwise-weather-forecast-sarima"
                        className="text-black dark:text-white hover:underline font-medium hover-highlight"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        [GitHub]
                      </a>
                    </div>
                  </article>

                  {/* Project 2: Instacart Market Basket Analysis */}
                  <article data-animate="fade-up">
                    <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden border-2 border-border">
                      <img
                        src="/j-1.png"
                        alt="Instacart Market Basket Analysis"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent flex items-end p-6">
                        <div className="text-black">
                          <h3 className="text-2xl md:text-3xl font-bold mb-2">
                            Customer-Segmentation
                          </h3>
                          <p className="text-sm md:text-base opacity-90">
                            Project focuses on developing a data-driven solution
                            for KJ Marketing, a retail company seeking to
                            enhance its understanding of customer segments.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-center gap-4">
                      <a
                        href="https://github.com/ImeshaDilshani/Data-Storm-5.0-Customer-Segmentation-Team-RiverBorn/blob/main/Semi%20Final%20Solution%20-%20Team%20%20RiverBorn.ipynb"
                        className="text-black dark:text-white hover:underline font-medium hover-highlight"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        [View Notebook]
                      </a>
                      <span className="text-muted-foreground">|</span>
                      <a
                        href="https://github.com/ImeshaDilshani/Data-Storm-5.0-Customer-Segmentation-Team-RiverBorn"
                        className="text-black dark:text-white hover:underline font-medium hover-highlight"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        [GitHub]
                      </a>
                    </div>
                  </article>

                  {/* Project 3: Additional Project Placeholder */}
                  <article data-animate="fade-up">
                    <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden border-2 border-border">
                      <img
                        src="/j-2.png"
                        alt="Data Analysis Project"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent flex items-end p-6">
                        <div className="text-black">
                          <h3 className="text-2xl md:text-3xl font-bold mb-2">
                            Sign Language Detection Computer Vision YOLO-v5
                          </h3>
                          <p className="text-sm md:text-base opacity-90">
                            The project focuses on leveraging computer vision
                            techniques to detect sign language gestures using
                            the YOLO v5 model.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-center gap-4">
                      <a
                        href="https://github.com/ImeshaDilshani/Sign-Language-Detection-Computer-Vision-YOLO-v5/blob/main/Sign_Language_Detection_YOLO_v5_Computer_Vision_.ipynb"
                        className="text-black dark:text-white hover:underline font-medium hover-highlight"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        [View Notebook]
                      </a>
                      <span className="text-muted-foreground">|</span>
                      <a
                        href="https://github.com/ImeshaDilshani/Sign-Language-Detection-Computer-Vision-YOLO-v5"
                        className="text-black dark:text-white hover:underline font-medium hover-highlight"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        [GitHub]
                      </a>
                    </div>
                  </article>

                  <article data-animate="fade-up">
                    <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden border-2 border-border">
                      <img
                        src="/j-3.png"
                        alt="Data Analysis Project"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent flex items-end p-6">
                        <div className="text-black">
                          <h3 className="text-2xl md:text-3xl font-bold mb-2">
                            Customer Churn Analysis-ChurnPrediction
                          </h3>
                          <p className="text-sm md:text-base opacity-90">
                            Customer churn, also known as customer attrition,
                            refers to the phenomenon where customers cease their
                            relationship with a company.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-center gap-4">
                      <a
                        href="https://github.com/ImeshaDilshani/Customer-Churn-Analysis-Churn-Prediction/blob/main/Churn%20Prediction%20Model.ipynb"
                        className="text-black dark:text-white hover:underline font-medium hover-highlight"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        [View Notebook]
                      </a>
                      <span className="text-muted-foreground">|</span>
                      <a
                        href="https://github.com/ImeshaDilshani/Customer-Churn-Analysis-Churn-Prediction"
                        className="text-black dark:text-white hover:underline font-medium hover-highlight"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        [GitHub]
                      </a>
                    </div>
                  </article>

                  <article data-animate="fade-up">
                    <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden border-2 border-border">
                      <img
                        src="/j-4.png"
                        alt="Data Analysis Project"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent flex items-end p-6">
                        <div className="text-black">
                          <h3 className="text-2xl md:text-3xl font-bold mb-2">
                            Content Base Movie Recommender System
                          </h3>
                          <p className="text-sm md:text-base opacity-90">
                            This type of recommender system is particularly
                            useful for recommending items with similar
                            attributes and providing personalized suggestions to
                            users.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-center gap-4">
                      <a
                        href="https://github.com/ImeshaDilshani/CineMatch-Intelligent-Movie-Recommender-System/blob/main/Movie_Recommender_System_Content_Base.ipynb"
                        className="text-black dark:text-white hover:underline font-medium hover-highlight"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        [View Notebook]
                      </a>
                      <span className="text-muted-foreground">|</span>
                      <a
                        href="https://github.com/ImeshaDilshani/CineMatch-Intelligent-Movie-Recommender-System"
                        className="text-black dark:text-white hover:underline font-medium hover-highlight"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        [GitHub]
                      </a>
                    </div>
                  </article>

                  <article data-animate="fade-up">
                    <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden border-2 border-border">
                      <img
                        src="/j-5.png"
                        alt="Data Analysis Project"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent flex items-end p-6">
                        <div className="text-black">
                          <h3 className="text-2xl md:text-3xl font-bold mb-2">
                            Diabetes Prediction System
                          </h3>
                          <p className="text-sm md:text-base opacity-90">
                            The Diabetes Prediction System is a web-based
                            application that predicts the likelihood of an
                            individual having diabetes based on various
                            health-related features.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-center gap-4">
                      <a
                        href="https://github.com/ImeshaDilshani/Diabetes-Prediction-System/blob/main/Diabetes-Prediction-System.ipynb"
                        className="text-black dark:text-white hover:underline font-medium hover-highlight"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        [View Notebook]
                      </a>
                      <span className="text-muted-foreground">|</span>
                      <a
                        href="https://github.com/ImeshaDilshani/Diabetes-Prediction-System"
                        className="text-black dark:text-white hover:underline font-medium hover-highlight"
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
