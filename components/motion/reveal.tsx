"use client";

import { motion, useInView, useAnimation, Variant } from "framer-motion";
import { useEffect, useRef } from "react";

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  className?: string;
  delay?: number;
  duration?: number;
  variant?: "slide-up" | "slide-down" | "slide-left" | "slide-right" | "zoom" | "fade";
}

const variants = {
  "slide-up": {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  },
  "slide-down": {
    hidden: { opacity: 0, y: -75 },
    visible: { opacity: 1, y: 0 },
  },
  "slide-left": {
    hidden: { opacity: 0, x: -75 },
    visible: { opacity: 1, x: 0 },
  },
  "slide-right": {
    hidden: { opacity: 0, x: 75 },
    visible: { opacity: 1, x: 0 },
  },
  zoom: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
};

export function Reveal({
  children,
  width = "fit-content",
  className,
  delay = 0,
  duration = 0.6,
  variant = "slide-up",
}: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={variants[variant]}
        initial="hidden"
        animate={controls}
        transition={{
          duration,
          delay,
          ease: [0.25, 0.4, 0.25, 1],
        }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
}
