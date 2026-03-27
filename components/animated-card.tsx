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
}: AnimatedCardProps) {
  return (
    <Card className={cn("transition-colors duration-200 hover:border-[var(--foreground)]", className)}>
      {children}
    </Card>
  );
}
