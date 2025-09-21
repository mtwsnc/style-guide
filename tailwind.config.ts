import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "../src/components/**/*.{js,ts,jsx,tsx}", // Reference main project components
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-dm-sans)", "sans-serif"],
        mono: ["var(--font-roboto)", "monospace"],
        uthmanic: ["UthmanicHafs", "serif"],
        riwaya: ["29LTRiwaya", "serif"],
      },
      colors: {
        // MTWS Brand Colors - using the actual hex values
        "high-contrast-black": "#000000",
        "deep-forest-green": "#132a1a",
        "primary-green": "#407550",
        "olive-green": "#82894d",
        "sandy-gold": "#e7d296",
        "warm-background": "#fdfbf5",
        
        // Standard Tailwind colors for UI components
        border: "#e5e7eb",
        input: "#e5e7eb", 
        ring: "#6366f1",
        background: "#ffffff",
        foreground: "#111827",
        primary: {
          DEFAULT: "#407550", // Use our primary green
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#f3f4f6",
          foreground: "#111827",
        },
        destructive: {
          DEFAULT: "#ef4444",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#f9fafb",
          foreground: "#6b7280",
        },
        accent: {
          DEFAULT: "#f3f4f6",
          foreground: "#111827",
        },
        popover: {
          DEFAULT: "#ffffff",
          foreground: "#111827",
        },
        card: {
          DEFAULT: "#ffffff",
          foreground: "#111827",
        },
      },
      borderRadius: {
        lg: "0.625rem",
        md: "calc(0.625rem - 2px)",
        sm: "calc(0.625rem - 4px)",
      },
    },
  },
  plugins: [],
} satisfies Config;