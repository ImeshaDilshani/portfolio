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
    title: "Atomic Habits",
    author: "James Clear",
    image: "/books/atomic habit.webp",
  },
  {
    title: "The monk who sold his ferrari",
    author: "Robin Sharma",
    image: "/books/the monk who sold his ferari.webp",
  },
  {
    title: "Mindsets",
    author: "Dr. Carol S. Dweck",
    image: "/books/mindset.webp",
  },
  {
    title: "Psychology of Money",
    author: "Morgan Housel",
    image: "/books/psychology of money.webp",
  },
  {
    title: "Deep Work",
    author: "Cal Newport",
    image: "/books/deep work.webp",
  },
  {
    title: "Don't Believe Everything You Think",
    author: "Joseph Nguyen",
    image: "/books/dont belive everything you think.webp",
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
      <section className="relative pt-24 pb-20 px-4 overflow-hidden bg-gray-50">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/garding/idea-hero.webp')",
            }}
          />
        </div>

        <div className="relative z-10 container max-w-5xl mx-auto text-center animate-fadeInUp">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-black rounded-full mb-6">
            <span className="text-sm font-medium text-black">
              📚 Reading List
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-black font-[family-name:var(--font-adamina)]">
            Reads
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-4 max-w-3xl mx-auto leading-relaxed font-[family-name:var(--font-adamina)]">
            Books that shaped my thinking
          </p>

          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            I believe in continuous learning through reading. This collection
            features an eclectic set of books on{" "}
            <span className="text-black font-medium">
              personal development
            </span>
            ,{" "}
            <span className="text-black font-medium">
              productivity
            </span>
            ,{" "}
            <span className="text-black font-medium">
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
                className="overflow-hidden group hover:shadow-lg transition-all duration-500 hover:scale-105 cursor-pointer"
              >
                <div className="aspect-[4/5] relative overflow-hidden">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <CardHeader className="p-2 space-y-0">
                  <CardTitle className="text-xs font-semibold line-clamp-1 leading-tight text-black">
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
