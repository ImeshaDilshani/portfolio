"use client";

import { useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const podcasts = [
  {
    title: "The 80,000 Hours Podcast",
    host: "80,000 Hours",
    image: "/listen/8000.jfif",
    description:
      "The 80,000 Hours Podcast features unusually in-depth conversations about the world's most pressing problems and how you can use your career to solve them. We invite guests pursuing a wide range of career paths – from academics and activists to entrepreneurs – to share their wisdom, so that you can better understand the world and have a greater social impact.",
    link: "https://80000hours.org/podcast/",
  },
  {
    title: "Diary of A CEO",
    host: "Steven Bartlett",
    image: "/listen/ceo.jpg",
    description:
      "One of the world's most popular business podcasts featuring in-depth conversations with some of the most successful entrepreneurs, business leaders, and experts. Steven Bartlett dives deep into their stories, strategies, and mindsets that led to their success.",
    link: "https://www.youtube.com/channel/UCGq-a57w-aPwyi3pW7XLiHw",
  },
  {
    title: "Huberman Lab",
    host: "Andrew Huberman",
    image: "/listen/androw.jfif",
    description:
      "The Huberman Lab Podcast is hosted by Dr. Andrew Huberman, a neuroscientist and professor at Stanford School of Medicine. The podcast discusses neuroscience and science-based tools for everyday life. Topics include how our brain and its connections with the organs of our body control our perceptions, behaviors, and health.",
    link: "https://www.youtube.com/@hubermanlab",
  },
];

export default function LearningPage() {
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
                "url('/serene-harbor-dock-with-boats-at-sunset.jpg')",
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

        <div className="relative z-10 container max-w-5xl mx-auto text-center animate-fadeInUp">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/20 rounded-full mb-6">
            <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
              🎧 Podcasts & Audio
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 dark:from-violet-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
            Listening
          </h1>

          <p className="text-xl md:text-2xl text-foreground/80 mb-4 max-w-3xl mx-auto leading-relaxed">
            Voices that inspire and educate
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Below is my personal listening list of podcasts that have shaped my
            thinking. Modern day podcasts are the successors of{" "}
            <span className="text-purple-600 dark:text-purple-400 font-medium">
              radio shows
            </span>{" "}
            that informed and educated entire generations. Podcasts allow you to
            hear diverse{" "}
            <span className="text-purple-600 dark:text-purple-400 font-medium">
              voices
            </span>{" "}
            and{" "}
            <span className="text-purple-600 dark:text-purple-400 font-medium">
              perspectives
            </span>{" "}
            that continue to inspire me.
          </p>
        </div>
      </section>

      <div className="py-16 md:py-24">
        <div className="container px-4 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {podcasts.map((podcast, index) => (
              <Card
                key={index}
                className="overflow-hidden group hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-500 hover:scale-105 card-hover-effect"
                data-animate="fade-up"
              >
                <a
                  href={podcast.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-purple-600/20 via-purple-800/10 to-purple-950/20 flex items-center justify-center">
                    <img
                      src={podcast.image}
                      alt={podcast.title}
                      className="w-full h-full object-cover opacity-50"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                      <p className="font-bold text-xl text-white">
                        {podcast.title}
                      </p>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg uppercase">
                      {podcast.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed">
                      {podcast.description}
                    </CardDescription>
                  </CardContent>
                </a>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
