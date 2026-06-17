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
        // Luxury design palette
        charcoal: {
          DEFAULT: "#0D0D0D",
          deep: "#050505",
          light: "#161616",
          muted: "#262626",
          border: "#333333",
        },
        ivory: {
          DEFAULT: "#FAF9F6",
          warm: "#F4F1EA",
          stone: "#E6E1DA",
          muted: "#B5B0A7",
        },
        rose: {
          DEFAULT: "#B76E79",
          light: "#D29FA6",
          dark: "#9E5562",
          accent: "#C27D88",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "luxury-gradient": "linear-gradient(180deg, rgba(13,13,13,0) 0%, rgba(5,5,5,1) 100%)",
        "rose-shimmer": "linear-gradient(90deg, #B76E79 0%, #D29FA6 50%, #9E5562 100%)",
      },
      boxShadow: {
        "luxury-sm": "0 2px 8px -1px rgba(0, 0, 0, 0.5)",
        "luxury-md": "0 4px 20px -2px rgba(0, 0, 0, 0.7)",
        "luxury-lg": "0 10px 40px -5px rgba(0, 0, 0, 0.8)",
        "glass-sm": "0 4px 12px 0 rgba(0, 0, 0, 0.15)",
        "glass-md": "0 8px 32px 0 rgba(0, 0, 0, 0.3)",
      },
      backdropBlur: {
        "luxury": "20px",
      },
      animation: {
        "fade-in": "fadeIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "slide-up": "slideUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "scale-up": "scaleUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleUp: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
