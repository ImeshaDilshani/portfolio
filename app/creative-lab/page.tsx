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
      <section className="relative pt-24 pb-20 px-4 overflow-hidden bg-gray-50">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/garding/idea-hero.webp"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative z-10 container max-w-5xl mx-auto text-center animate-fadeInUp">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-black rounded-full mb-6">
            <span className="text-sm font-medium text-black">
              ✨ Side Projects & Passions
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-black font-[family-name:var(--font-adamina)]">
            Creative Lab
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-4 max-w-3xl mx-auto leading-relaxed font-[family-name:var(--font-adamina)]">
            Blooming Ideas
          </p>

          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            A space where passion meets purpose. Where I explore,{" "}
            <span className="text-black font-medium">
              experiment
            </span>
            , and{" "}
            <span className="text-black font-medium">
              create
            </span>{" "}
            beyond the boundaries of my professional work through{" "}
            <span className="text-black font-medium">
              gardening
            </span>
            ,{" "}
            <span className="text-black font-medium">
              photography
            </span>
            , and digital innovation.
          </p>
        </div>
      </section>

      <div className="py-16 md:py-24">
        <div className="container px-4 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/creative-lab/gardening">
              <Card
                className="h-full hover:shadow-lg transition-all duration-500 cursor-pointer overflow-hidden group hover:-translate-y-1"
                data-animate="fade-up"
              >
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src="/garding/senior-couple-harvesting-tomatoes.webp"
                    alt="Gardening"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-black">
                    Gardening for Mindful Living
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Gardening has become my calm space a reminder that growth
                    takes time, care, and patience. Tending to plants helps me
                    reconnect with nature and slow down in a digital world that
                    never stops. Each seed I plant is a small act of creativity
                    and mindfulness.
                  </p>
                  <span className="text-black hover:underline font-semibold">
                    Explore My Garden →
                  </span>
                </CardContent>
              </Card>
            </Link>

            <Link href="/creative-lab/photography">
              <Card
                className="h-full hover:shadow-lg transition-all duration-500 cursor-pointer overflow-hidden group hover:-translate-y-1"
                data-animate="fade-up"
              >
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src="/portrait-person-ai-robot.webp"
                    alt="Stock Photography"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-black">
                    Visual Storytelling Through Photos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Stock photography and Illustration allows me to blend
                    creativity with entrepreneurship building a portfolio across
                    platforms like Adobe Stock, Shutterstock, and Dreamstime.
                    Each photo I create or generate is a small step toward
                    artistic expression.
                  </p>
                  <span className="text-black hover:underline font-semibold">
                    View My Portfolio →
                  </span>
                </CardContent>
              </Card>
            </Link>

            <Link href="/creative-lab/digital-products">
              <Card
                className="h-full hover:shadow-lg transition-all duration-500 cursor-pointer overflow-hidden group hover:-translate-y-1"
                data-animate="fade-up"
              >
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src="/about-bg.webp"
                    alt="Digital Product Design"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-black">
                    Digital Product Design
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    This is not yet started - still doing research. I'm
                    exploring opportunities in creating digital products that
                    combine my technical skills with creative design. Stay tuned
                    for updates as I venture into this exciting space!
                  </p>
                  <span className="text-gray-600 font-semibold">
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
