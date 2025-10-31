"use client";

import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export default function CapturesPage() {
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
                "url('/garding/senior-couple-harvesting-tomatoes.jpg')",
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

        <div className="relative z-10 container max-w-5xl mx-auto text-center animate-fadeInUp">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/20 rounded-full mb-6">
            <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
              ✨ Side Projects & Passions
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 dark:from-violet-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
            Captures
          </h1>

          <p className="text-xl md:text-2xl text-foreground/80 mb-4 max-w-3xl mx-auto leading-relaxed">
            Blooming Ideas
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            A space where passion meets purpose. Where I explore,{" "}
            <span className="text-purple-600 dark:text-purple-400 font-medium">
              experiment
            </span>
            , and{" "}
            <span className="text-purple-600 dark:text-purple-400 font-medium">
              create
            </span>{" "}
            beyond the boundaries of my professional work through{" "}
            <span className="text-purple-600 dark:text-purple-400 font-medium">
              gardening
            </span>
            ,{" "}
            <span className="text-purple-600 dark:text-purple-400 font-medium">
              photography
            </span>
            , and digital innovation.
          </p>
        </div>
      </section>

      <div className="py-16 md:py-24">
        <div className="container px-4 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/captures/gardening">
              <Card
                className="h-full hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-500 cursor-pointer overflow-hidden group card-hover-effect hover:-translate-y-1"
                data-animate="fade-up"
              >
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src="/garding/senior-couple-harvesting-tomatoes.jpg"
                    alt="Gardening"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span>🌱</span>
                    Gardening for Mindful Living
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Gardening has become my calm space a reminder that growth
                    takes time, care, and patience. Tending to plants helps me
                    reconnect with nature and slow down in a digital world that
                    never stops. Each seed I plant is a small act of creativity
                    and mindfulness.
                  </p>
                  <span className="text-purple-300 hover:underline font-semibold">
                    Explore My Garden →
                  </span>
                </CardContent>
              </Card>
            </Link>

            <Link href="/captures/photography">
              <Card
                className="h-full hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-500 cursor-pointer overflow-hidden group card-hover-effect hover:-translate-y-1"
                data-animate="fade-up"
              >
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src="/modern-tech-workspace-with-laptop-and-code.jpg"
                    alt="Stock Photography"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span>📸</span>
                    Visual Storytelling Through Photos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Stock photography and Illustration allows me to blend
                    creativity with entrepreneurship building a portfolio across
                    platforms like Adobe Stock, Shutterstock, and Dreamstime.
                    Each photo I create or generate is a small step toward
                    artistic expression.
                  </p>
                  <span className="text-purple-300 hover:underline font-semibold">
                    View My Portfolio →
                  </span>
                </CardContent>
              </Card>
            </Link>

            <Link href="/captures/digital-products">
              <Card
                className="h-full hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-500 cursor-pointer overflow-hidden group card-hover-effect hover:-translate-y-1"
                data-animate="fade-up"
              >
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src="/data-science-code-on-multiple-monitors.jpg"
                    alt="Digital Product Design"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span>💡</span>
                    Digital Product Design
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    This is not yet started - still doing research. I'm
                    exploring opportunities in creating digital products that
                    combine my technical skills with creative design. Stay tuned
                    for updates as I venture into this exciting space!
                  </p>
                  <span className="text-muted-foreground font-semibold">
                    Coming Soon →
                  </span>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
