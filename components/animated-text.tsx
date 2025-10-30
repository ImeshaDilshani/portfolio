"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
  variant?:
    | "blur-in"
    | "letter-reveal"
    | "line-reveal"
    | "fade-up"
    | "gradient"
    | "gradient-animate"
    | "underline-reveal"
    | "glow-hover";
  delay?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
}

export function AnimatedText({
  children,
  className,
  variant = "fade-up",
  delay = 0,
  as: Component = "span",
}: AnimatedTextProps) {
  const variantClasses = {
    "blur-in": "text-blur-in",
    "letter-reveal": "text-letter-reveal",
    "line-reveal": "text-line-reveal",
    "fade-up": "text-fade-up",
    gradient: "text-gradient",
    "gradient-animate": "text-gradient-animate",
    "underline-reveal": "text-underline-reveal",
    "glow-hover": "text-glow-hover",
  };

  return (
    <Component
      className={cn(variantClasses[variant], className)}
      style={{
        animationDelay: `${delay}ms`,
        opacity: delay > 0 ? 0 : undefined,
      }}
    >
      {children}
    </Component>
  );
}

interface AnimatedLinesProps {
  lines: string[];
  className?: string;
  lineClassName?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "div";
}

export function AnimatedLines({
  lines,
  className,
  lineClassName,
  as: Component = "div",
}: AnimatedLinesProps) {
  return (
    <Component className={cn("text-stagger-lines", className)}>
      {lines.map((line, index) => (
        <div key={index} className={lineClassName}>
          {line}
        </div>
      ))}
    </Component>
  );
}

interface AnimatedParagraphProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedParagraph({
  children,
  className,
  delay = 0,
}: AnimatedParagraphProps) {
  return (
    <p
      className={cn("card-text-reveal", className)}
      style={{
        animationDelay: `${delay}ms`,
      }}
    >
      {children}
    </p>
  );
}

interface InlineLinkProps {
  children: ReactNode;
  href: string;
  className?: string;
  external?: boolean;
}

export function InlineLink({
  children,
  href,
  className,
  external = false,
}: InlineLinkProps) {
  return (
    <a
      href={href}
      className={cn("inline-link text-purple-400 hover:text-purple-300", className)}
      {...(external && {
        target: "_blank",
        rel: "noopener noreferrer",
      })}
    >
      {children}
    </a>
  );
}

interface HighlightTextProps {
  children: ReactNode;
  className?: string;
}

export function HighlightText({ children, className }: HighlightTextProps) {
  return <span className={cn("text-highlight", className)}>{children}</span>;
}
