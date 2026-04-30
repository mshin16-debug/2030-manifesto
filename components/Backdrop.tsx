"use client";

import { motion, useReducedMotion } from "framer-motion";

const noiseSvg =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")";

export function Backdrop() {
  const reduce = useReducedMotion();

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      <div
        className="absolute inset-0 bg-gradient-to-b from-ink via-void to-void"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 120% 80% at 50% -10%, rgba(57, 255, 136, 0.14), transparent 55%),
            radial-gradient(ellipse 70% 50% at 100% 40%, rgba(31, 168, 85, 0.08), transparent 50%),
            radial-gradient(ellipse 60% 45% at 0% 70%, rgba(125, 255, 188, 0.06), transparent 55%)
          `,
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{ backgroundImage: noiseSvg }}
      />
      <div
        className="absolute inset-0 bg-grid-fade bg-[length:100%_100%,48px_48px,48px_48px] bg-[position:center_top] opacity-90"
        style={{
          maskImage:
            "linear-gradient(to bottom, black 0%, black 55%, transparent 100%)",
        }}
      />
      {!reduce && (
        <>
          <motion.div
            className="absolute -left-[20%] top-[18%] h-[42vmin] w-[42vmin] rounded-full bg-neon/10 blur-[100px]"
            animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -right-[15%] bottom-[12%] h-[38vmin] w-[38vmin] rounded-full bg-neon-dim/15 blur-[110px]"
            animate={{ x: [0, -24, 0], y: [0, -18, 0] }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}
    </div>
  );
}
