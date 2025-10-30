"use client";

import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { ReactNode } from "react";

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "default" | "hover-lift" | "hover-glow" | "hover-scale";
}

export function AnimatedCard({
  children,
  className,
  delay = 0,
  variant = "hover-lift",
}: AnimatedCardProps) {
  const variantClasses = {
    default: "",
    "hover-lift": "card-hover",
    "hover-glow": "hover:shadow-lg hover:shadow-purple-500/20 transition-shadow duration-300",
    "hover-scale": "hover:scale-[1.02] transition-transform duration-300",
  };

  return (
    <Card
      className={cn(
        "animate-card opacity-0 transition-all duration-300",
        variantClasses[variant],
        className
      )}
      style={{
        animationDelay: `${delay}ms`,
      }}
    >
      {children}
    </Card>
  );
}
