import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#5CB85C",
          dark: "#4A9F4A",
          light: "#E9F6E9",
        },
        promo: "#F5821F",
        ink: "#1A1A1A",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        arabic: ["var(--font-cairo)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 2px 10px rgba(0,0,0,0.06)",
        card: "0 8px 30px rgba(0,0,0,0.08)",
        lift: "0 20px 40px rgba(0,0,0,0.12)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shake: {
          "0%, 8%, 100%": { transform: "translateX(0)" },
          "1%, 5%": { transform: "translateX(-5px)" },
          "2%, 4%, 6%": { transform: "translateX(5px)" },
          "3%, 7%": { transform: "translateX(-3px)" },
        },
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        shake: "shake 3.5s ease-in-out infinite",
      },
      maxWidth: {
        content: "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
