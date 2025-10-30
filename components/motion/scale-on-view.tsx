"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ScaleOnViewProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  scale?: number;
}

export function ScaleOnView({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  scale = 0.8,
}: ScaleOnViewProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref}>
      <motion.div
        className={className}
        initial={{ opacity: 0, scale }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale }}
        transition={{
          duration,
          delay,
          ease: [0.25, 0.4, 0.25, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
