"use client";

import { useEffect } from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const books = [
  {
    title: "Atomic Habit",
    author: "James Clear",
    image: "/modern-task-management-app-interface.jpg",
  },
  {
    title: "The monk who sold his ferrari",
    author: "Robin Sharma",
    image: "/academic-research-presentation-university.jpg",
  },
  {
    title: "Mindset",
    author: "Dr. Carol S. Dweck",
    image: "/data-analytics-dashboard.png",
  },
  {
    title: "Psychology of Money",
    author: "Morgan Housel",
    image: "/modern-ecommerce-dashboard.png",
  },
  {
    title: "Deep Work",
    author: "Cal Newport",
    image: "/data-science-code-on-multiple-monitors.jpg",
  },
  {
    title: "Don't Believe Everything You Think",
    author: "Joseph Nguyen",
    image: "/modern-tech-workspace-with-laptop-and-code.jpg",
  },
];

export default function ReadsPage() {
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
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('/data-journalism-writing-laptop-notebook.jpg')",
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

        <div className="relative z-10 container max-w-5xl mx-auto text-center animate-fadeInUp">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/20 rounded-full mb-6">
            <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
              📚 Reading List
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 dark:from-violet-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
            Reads
          </h1>

          <p className="text-xl md:text-2xl text-foreground/80 mb-4 max-w-3xl mx-auto leading-relaxed">
            Books that shaped my thinking
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            I believe in continuous learning through reading. This collection
            features an eclectic set of books on{" "}
            <span className="text-purple-600 dark:text-purple-400 font-medium">
              personal development
            </span>
            ,{" "}
            <span className="text-purple-600 dark:text-purple-400 font-medium">
              productivity
            </span>
            ,{" "}
            <span className="text-purple-600 dark:text-purple-400 font-medium">
              psychology
            </span>
            , and more. This list is a constant work in progress.
          </p>
        </div>
      </section>

      <div className="py-16 md:py-24">
        <div className="container px-4 max-w-7xl mx-auto">
          <div
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4"
            data-animate="fade-up"
          >
            {books.map((book, index) => (
              <Card
                key={index}
                className="overflow-hidden group hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-500 hover:scale-105 cursor-pointer card-hover-effect"
              >
                <div className="aspect-[4/5] relative overflow-hidden">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <CardHeader className="p-2 space-y-0">
                  <CardTitle className="text-xs font-semibold line-clamp-1 leading-tight">
                    {book.title}
                  </CardTitle>
                  <CardDescription className="text-[10px] line-clamp-1 leading-tight">
                    {book.author}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
