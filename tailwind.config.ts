import type { Config } from "tailwindcss";

// Design tokens pulled directly from the Figma source file (ADA — Copy).
// Keep this as the single source of truth for brand color/type decisions —
// components should reference these tokens, not hard-coded hex/px values.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#FAF4E6", // page background
          deep: "#F7EED9", // alternating section background
        },
        ink: {
          DEFAULT: "#1B1B1B", // primary body/heading text on light sections
          soft: "#232020",
        },
        gold: {
          DEFAULT: "#C18C2C", // primary brand accent
          light: "#FCF38A", // gradient midpoint highlight
          rod: "#DAA520", // footer headings / outline accents
        },
      },
      backgroundImage: {
        // The recurring pill-button / divider gradient used throughout the design
        "gold-gradient":
          "linear-gradient(90deg, #C18C2C 0%, #FCF38A 50.52%, #C18C2C 100%)",
      },
      fontFamily: {
        display: ["var(--font-abhaya)", "Georgia", "serif"],
        sans: ["var(--font-work-sans)", "Helvetica", "Arial", "sans-serif"],
      },
      maxWidth: {
        content: "1280px",
      },
      borderRadius: {
        pill: "9999px",
      },
    },
  },
  plugins: [],
};

export default config;
