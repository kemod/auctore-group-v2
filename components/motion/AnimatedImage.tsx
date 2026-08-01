"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface AnimatedImageProps {
  children: ReactNode;
  className?: string;
}

export default function AnimatedImage({
  children,
  className,
}: AnimatedImageProps) {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        scale: 0.96,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}