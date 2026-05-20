import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.css",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0D1B2A",
        gold: "#F4A822",
        "warm-white": "#FAFAF8",
        charcoal: "#1C1C1E",
        whatsapp: "#25D366",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-lato)", "system-ui", "sans-serif"],
        lato: ["var(--font-lato)", "system-ui", "sans-serif"],
      },
      animation: {
        "pulse-ring": "pulse-ring 3s ease-out infinite",
        "bounce-slow": "bounce 2s infinite",
      },
      keyframes: {
        "pulse-ring": {
          "0%": { transform: "scale(1)", opacity: "0.6" },
          "70%": { transform: "scale(1.4)", opacity: "0" },
          "100%": { transform: "scale(1.4)", opacity: "0" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
