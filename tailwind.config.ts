import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#05070d",
        panel: "#0a0f1c",
        accent: "#2f6bff",
        glow: "#5b95ff",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 60px -20px rgba(0, 0, 0, 0.6)",
        blue: "0 20px 60px -20px rgba(47, 107, 255, 0.45)",
      },
    },
  },
  plugins: [],
};

export default config;
