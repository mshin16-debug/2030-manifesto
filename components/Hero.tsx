"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ScrollCue } from "@/components/ScrollCue";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.11, delayChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

function HeroInnerStatic() {
  return (
    <>
      <p className="font-display text-xs font-medium uppercase tracking-[0.35em] text-neon">
        Final Project · 2030 Manifesto
      </p>
      <h1 className="mt-6 font-display text-4xl font-medium leading-[1.05] tracking-tight text-frost sm:text-5xl lg:text-6xl xl:text-[3.75rem]">
        Design stops being{" "}
        <span className="text-muted line-through decoration-neon/35 decoration-2">
          execution
        </span>
        .<br />
        It becomes{" "}
        <span className="bg-gradient-to-r from-frost via-neon-pulse to-neon bg-clip-text text-transparent">
          direction you can feel.
        </span>
      </h1>
      <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
        In 2030, the craft is not only what ships—it is what resonates in
        context. The Human Premium is the judgment, friction, and empathy AI
        amplifies but cannot originate.
      </p>
      <ScrollCue />
    </>
  );
}

export function Hero() {
  const reduce = useReducedMotion();

  const shellClass = "relative flex min-h-[100dvh] flex-col justify-center px-6 pb-24 pt-28 sm:px-10 lg:px-16";

  if (reduce) {
    return (
      <header className={shellClass}>
        <div className="mx-auto w-full max-w-5xl">
          <HeroInnerStatic />
        </div>
      </header>
    );
  }

  return (
    <header className={shellClass}>
      <motion.div
        className="mx-auto w-full max-w-5xl"
        initial="hidden"
        animate="show"
        variants={container}
      >
        <motion.p
          variants={item}
          className="font-display text-xs font-medium uppercase tracking-[0.35em] text-neon"
        >
          Final Project · 2030 Manifesto
        </motion.p>
        <motion.h1
          variants={item}
          className="mt-6 font-display text-4xl font-medium leading-[1.05] tracking-tight text-frost sm:text-5xl lg:text-6xl xl:text-[3.75rem]"
        >
          Design stops being{" "}
          <span className="text-muted line-through decoration-neon/35 decoration-2">
            execution
          </span>
          .<br />
          It becomes{" "}
          <span className="bg-gradient-to-r from-frost via-neon-pulse to-neon bg-clip-text text-transparent">
            direction you can feel.
          </span>
        </motion.h1>
        <motion.p
          variants={item}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl"
        >
          In 2030, the craft is not only what ships—it is what resonates in
          context. The Human Premium is the judgment, friction, and empathy AI
          amplifies but cannot originate.
        </motion.p>
        <motion.div variants={item}>
          <ScrollCue />
        </motion.div>
      </motion.div>
    </header>
  );
}
