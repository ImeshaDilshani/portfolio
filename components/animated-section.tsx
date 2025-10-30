"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fadeInUp" | "fadeIn" | "scaleIn" | "slideInLeft" | "slideInRight";
  delay?: number;
  threshold?: number;
}

export function AnimatedSection({
  children,
  className,
  animation = "fadeInUp",
  delay = 0,
  threshold = 0.1,
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Unobserve after animation triggers (optional)
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  const animationClasses = {
    fadeInUp: "animate-fadeInUp",
    fadeIn: "animate-fadeIn",
    scaleIn: "animate-scaleIn",
    slideInLeft: "animate-slideInLeft",
    slideInRight: "animate-slideInRight",
  };

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700",
        !isVisible && "opacity-0",
        isVisible && animationClasses[animation],
        className
      )}
      style={{
        animationDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
