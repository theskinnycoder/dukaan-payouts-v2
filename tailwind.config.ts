import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
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
        border: "#D9D9D9",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#FAFAFA",
        foreground: "#1A181E",
        primary: {
          DEFAULT: "#1E2640",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#126EB4",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#F2F2F2",
          foreground: "#D3D4D9",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
} satisfies Config

export default config
