import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#DC2626", // Red-600
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#FFFFFF", // White
          foreground: "#000000",
        },
        destructive: {
          DEFAULT: "#EF4444", // Red-500
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#1A1A1A", // Very dark gray
          foreground: "#A3A3A3",
        },
        accent: {
          DEFAULT: "#DC2626", // Red-600
          foreground: "#FFFFFF",
        },
        popover: {
          DEFAULT: "#000000",
          foreground: "#FFFFFF",
        },
        card: {
          DEFAULT: "#0A0A0A", // Almost black
          foreground: "#FFFFFF",
        },
        // Tech-focused red/black/white palette
        tech: {
          red: "#DC2626",
          "red-light": "#EF4444",
          "red-dark": "#B91C1C",
          black: "#000000",
          "black-light": "#1A1A1A",
          "black-dark": "#0A0A0A",
          white: "#FFFFFF",
          "white-dark": "#F5F5F5",
          gray: "#525252",
        },
        // Code syntax highlighting colors (red theme)
        code: {
          bg: "#0A0A0A",
          border: "#DC2626",
          text: "#FFFFFF",
          comment: "#737373",
          keyword: "#DC2626",
          string: "#F5F5F5",
          function: "#EF4444",
          variable: "#FFFFFF",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "red-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(220, 38, 38, 0.4)" },
          "50%": { boxShadow: "0 0 30px rgba(220, 38, 38, 0.7)" },
        },
        "pulse-red": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        "slide-in": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "red-glow": "red-glow 2s ease-in-out infinite",
        "pulse-red": "pulse-red 2s ease-in-out infinite",
        "slide-in": "slide-in 0.3s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
      },
      fontFamily: {
        mono: ["JetBrains Mono", "Fira Code", "Monaco", "Consolas", "monospace"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
