"use client";

import { useEffect } from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Calendar, Tag } from "lucide-react";

const articles = [
  {
    slug: "2024-annual-review",
    date: "January 23, 2025",
    title: "2024 Annual Review - The Year of Adventure",
    category: "Personal Reflection",
    excerpt:
      "After a journey I'm taking stock at my twenty days within, I have begun. Challenges, growth, and lessons learned throughout an incredible year of exploration and self-discovery.",
    tags: ["Reflection", "Growth", "2024"],
    readTime: "8 min read",
  },
];

export default function WritesPage() {
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
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/J1.jpg')",
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

        <div className="relative z-10 container max-w-5xl mx-auto text-center animate-fadeInUp">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/20 rounded-full mb-6">
            <BookOpen className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
              Blog & Articles
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 dark:from-violet-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
            Writes
          </h1>

          <p className="text-xl md:text-2xl text-foreground/80 mb-4 max-w-3xl mx-auto leading-relaxed">
            Lessons I've learned along the way
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            A collection of my writings on{" "}
            <span className="text-purple-600 dark:text-purple-400 font-medium">
              technology
            </span>
            ,{" "}
            <span className="text-purple-600 dark:text-purple-400 font-medium">
              data science
            </span>
            ,{" "}
            <span className="text-purple-600 dark:text-purple-400 font-medium">
              personal growth
            </span>
            , and the lessons I've learned through my journey.
          </p>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-16 px-4">
        <div className="container max-w-5xl mx-auto">
          <div className="space-y-8">
            {articles.map((article, index) => (
              <Card
                key={article.slug}
                className="group hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-1 border-2 hover:border-purple-500/50"
                data-animate="fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <Badge
                      variant="outline"
                      className="border-purple-500/30 text-purple-600 dark:text-purple-400 hover:bg-purple-500/10 transition-colors duration-300"
                    >
                      {article.category}
                    </Badge>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <time>{article.date}</time>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      • {article.readTime}
                    </span>
                  </div>

                  <CardTitle className="text-2xl md:text-3xl mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                    <Link
                      href={`/writes/${article.slug}`}
                      className="hover:underline"
                    >
                      {article.title}
                    </Link>
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <CardDescription className="text-base md:text-lg leading-relaxed">
                    {article.excerpt}
                  </CardDescription>

                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="hover:bg-purple-500/20 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 hover:scale-105 cursor-pointer"
                      >
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    className="mt-4 hover:bg-purple-500/10 hover:border-purple-500/50 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 group/btn"
                    asChild
                  >
                    <Link href={`/writes/${article.slug}`}>
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Coming Soon Section */}
          <div
            className="mt-16 text-center p-12 border-2 border-dashed border-purple-500/30 rounded-2xl"
            data-animate="fade-up"
          >
            <BookOpen className="w-16 h-16 mx-auto mb-4 text-purple-600 dark:text-purple-400 opacity-50" />
            <h3 className="text-2xl font-bold mb-4">
              More Articles Coming Soon
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'm constantly learning and sharing my experiences. Subscribe to
              stay updated with new articles on data science, software
              engineering, and personal development.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
