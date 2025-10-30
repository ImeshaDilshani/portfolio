"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  variant?: "slide-up" | "fade" | "blur" | "wave";
}

export function TextReveal({
  text,
  className = "",
  delay = 0,
  duration = 0.05,
  as: Component = "p",
  variant = "slide-up",
}: TextRevealProps) {
  const words = useMemo(() => text.split(" "), [text]);

  const variants = {
    "slide-up": {
      hidden: { y: 20, opacity: 0 },
      visible: { y: 0, opacity: 1 },
    },
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    blur: {
      hidden: { opacity: 0, filter: "blur(10px)" },
      visible: { opacity: 1, filter: "blur(0px)" },
    },
    wave: {
      hidden: { y: 20, opacity: 0, rotate: -10 },
      visible: { y: 0, opacity: 1, rotate: 0 },
    },
  };

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: duration, delayChildren: delay },
    }),
  };

  return (
    <Component className={className}>
      <motion.span
        variants={container}
        initial="hidden"
        animate="visible"
        style={{ display: "inline-block" }}
      >
        {words.map((word, wordIndex) => (
          <span key={wordIndex} style={{ display: "inline-block", marginRight: "0.3em" }}>
            {word.split("").map((char, charIndex) => (
              <motion.span
                key={charIndex}
                variants={variants[variant]}
                style={{ display: "inline-block" }}
                transition={{
                  duration: 0.5,
                  ease: [0.25, 0.4, 0.25, 1],
                }}
              >
                {char}
              </motion.span>
            ))}
          </span>
        ))}
      </motion.span>
    </Component>
  );
}

interface WordRevealProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
}

export function WordReveal({
  text,
  className = "",
  delay = 0,
  staggerDelay = 0.1,
  as: Component = "p",
}: WordRevealProps) {
  const words = useMemo(() => text.split(" "), [text]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  return (
    <Component className={className}>
      <motion.span
        variants={container}
        initial="hidden"
        animate="visible"
        style={{ display: "flex", flexWrap: "wrap" }}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            variants={child}
            style={{ display: "inline-block", marginRight: "0.3em" }}
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Component>
  );
}
