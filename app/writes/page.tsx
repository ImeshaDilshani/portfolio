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
      <section className="relative pt-24 pb-20 px-4 overflow-hidden bg-gray-50">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/J1.jpg')",
            }}
          />
        </div>

        <div className="relative z-10 container max-w-5xl mx-auto text-center animate-fadeInUp">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-black rounded-full mb-6">
            <BookOpen className="w-4 h-4 text-black" />
            <span className="text-sm font-medium text-black">
              Blog & Articles
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-black font-[family-name:var(--font-adamina)]">
            Writes
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-4 max-w-3xl mx-auto leading-relaxed font-[family-name:var(--font-adamina)]">
            Lessons I've learned along the way
          </p>

          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            A collection of my writings on{" "}
            <span className="text-black font-medium">
              technology
            </span>
            ,{" "}
            <span className="text-black font-medium">
              data science
            </span>
            ,{" "}
            <span className="text-black font-medium">
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
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border-2 hover:border-black"
                data-animate="fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <Badge
                      variant="outline"
                      className="border-black text-black hover:bg-gray-100 transition-colors duration-300"
                    >
                      {article.category}
                    </Badge>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <time>{article.date}</time>
                    </div>
                    <span className="text-sm text-gray-600">
                      • {article.readTime}
                    </span>
                  </div>

                  <CardTitle className="text-2xl md:text-3xl mb-3 group-hover:text-black transition-colors duration-300">
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
                        className="hover:bg-gray-200 hover:text-black transition-all duration-300 hover:scale-105 cursor-pointer"
                      >
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    className="mt-4 hover:bg-gray-100 hover:border-black transition-all duration-300 group/btn"
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
            className="mt-16 text-center p-12 border-2 border-dashed border-gray-300 rounded-2xl"
            data-animate="fade-up"
          >
            <BookOpen className="w-16 h-16 mx-auto mb-4 text-black opacity-50" />
            <h3 className="text-2xl font-bold mb-4 text-black">
              More Articles Coming Soon
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
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
