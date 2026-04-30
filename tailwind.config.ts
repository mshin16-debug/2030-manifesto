import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#050508",
        ink: "#0a100e",
        mist: "#121a17",
        neon: {
          DEFAULT: "#39ff88",
          dim: "#1fa855",
          pulse: "#7dffbc",
        },
        frost: "#e6f7ef",
        muted: "#8fa89c",
        surface: {
          glass: "rgba(18, 26, 23, 0.72)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, rgba(5,8,8,0) 0%, rgba(5,8,8,0.85) 40%, #050508 100%), linear-gradient(rgba(57,255,136,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(57,255,136,0.04) 1px, transparent 1px)",
      },
      animation: {
        drift: "drift 22s ease-in-out infinite",
        pulseSlow: "pulseSlow 4s ease-in-out infinite",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(-3%, 2%) scale(1.05)" },
        },
        pulseSlow: {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.65" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
