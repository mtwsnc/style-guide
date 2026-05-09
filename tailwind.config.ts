import type { Config } from "tailwindcss"

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "../src/components/**/*.{js,ts,jsx,tsx}",
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
        /* ── Brand Palette ─── */
        "high-contrast-black": "#000000",
        "deep-forest-green":   "#132a1a",
        "primary-green":       "#407550",
        "olive-green":         "#82894d",
        "sandy-gold":          "#e7d296",
        "warm-background":     "#fdfbf5",

        /* ── Semantic tokens (map to CSS vars) ─── */
        "brand-primary":   "var(--color-primary)",
        "brand-secondary": "var(--color-secondary)",
        "brand-tertiary":  "var(--color-tertiary)",
        "brand-accent":    "var(--color-accent)",

        /* ── Shadcn-compatible tokens ─── */
        border:     "#e5e7eb",
        input:      "#e5e7eb",
        ring:       "#407550",
        background: "#fdfbf5",
        foreground: "#000000",
        primary: {
          DEFAULT:    "#407550",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT:    "#e7d296",
          foreground: "#132a1a",
        },
        destructive: {
          DEFAULT:    "#b91c1c",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT:    "#f9fafb",
          foreground: "#6b7280",
        },
        accent: {
          DEFAULT:    "#f3f4f6",
          foreground: "#111827",
        },
        popover: {
          DEFAULT:    "#ffffff",
          foreground: "#111827",
        },
        card: {
          DEFAULT:    "#ffffff",
          foreground: "#111827",
        },
      },
      borderRadius: {
        /* Match design system radii */
        sm:   "4px",
        md:   "8px",
        lg:   "10px",
        xl:   "16px",
        "2xl": "24px",
        full: "9999px",
      },
      spacing: {
        /* 8px grid design tokens */
        "space-xs":      "4px",
        "space-sm":      "8px",
        "space-md":      "16px",
        "space-lg":      "24px",
        "space-xl":      "32px",
        "space-2xl":     "48px",
        "space-3xl":     "64px",
        "space-section": "80px",
      },
      maxWidth: {
        container: "1200px",
      },
    },
  },
  plugins: [],
} satisfies Config
