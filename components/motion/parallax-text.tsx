"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ParallaxTextProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  direction?: "up" | "down";
}

export function ParallaxText({
  children,
  className = "",
  speed = 0.5,
  direction = "up",
}: ParallaxTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "up" ? [100 * speed, -100 * speed] : [-100 * speed, 100 * speed]
  );

  return (
    <div ref={ref}>
      <motion.div style={{ y }} className={className}>
        {children}
      </motion.div>
    </div>
  );
}
