"use client";

import { motion, useReducedMotion } from "framer-motion";

export function ScrollCue() {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div
        className="mt-16 flex flex-col items-center gap-2 text-muted"
        aria-hidden
      >
        <span className="text-[10px] uppercase tracking-[0.35em]">
          Scroll the manifesto
        </span>
        <span className="h-9 w-px bg-gradient-to-b from-neon/50 to-transparent" />
      </div>
    );
  }

  return (
    <motion.div
      className="mt-16 flex flex-col items-center gap-2 text-muted"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.8 }}
      aria-hidden
    >
      <span className="text-[10px] uppercase tracking-[0.35em]">
        Scroll the manifesto
      </span>
      <motion.span
        className="h-9 w-px bg-gradient-to-b from-neon/80 to-transparent"
        animate={{ opacity: [0.35, 1, 0.35], scaleY: [0.85, 1, 0.85] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
}
