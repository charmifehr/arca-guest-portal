import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#F7F3ED",
          dark: "#EDE6DC",
        },
        linen: {
          DEFAULT: "#E8E3DC",
          dark: "#D9D2C8",
          light: "#FAF8F5",
        },
        sand: {
          DEFAULT: "#D4C9BB",
          warm: "#C4B8A8",
        },
        charcoal: {
          DEFAULT: "#3D3632",
          muted: "#6B635C",
          deep: "#2A2522",
        },
        ocean: {
          DEFAULT: "#2A5F6B",
          light: "#4A8A96",
          dark: "#1E4854",
          mist: "#7BA8B3",
        },
        terracotta: {
          DEFAULT: "#B87D5C",
          light: "#D4A088",
          dark: "#9A6348",
        },
        palm: {
          DEFAULT: "#4A6741",
          light: "#6B8A62",
        },
        gold: {
          DEFAULT: "#C4A574",
          light: "#D9C49A",
        },
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        heading: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        body: ["var(--font-lora)", "Georgia", "serif"],
      },
      letterSpacing: {
        caps: "0.18em",
        wide: "0.08em",
      },
      boxShadow: {
        warm: "0 8px 32px rgba(61, 54, 50, 0.12)",
        card: "0 4px 20px rgba(42, 37, 34, 0.08)",
        glow: "0 0 40px rgba(196, 165, 116, 0.15)",
      },
      backgroundImage: {
        "warm-gradient":
          "linear-gradient(135deg, #3D3632 0%, #2F2A27 50%, #2A2522 100%)",
        "hero-overlay":
          "linear-gradient(to top, rgba(42,37,34,0.92) 0%, rgba(42,37,34,0.45) 45%, rgba(42,37,34,0.15) 100%)",
        "section-overlay":
          "linear-gradient(to top, rgba(42,37,34,0.75) 0%, rgba(42,37,34,0.25) 60%, transparent 100%)",
      },
      minHeight: {
        touch: "44px",
      },
      minWidth: {
        touch: "44px",
      },
    },
  },
  plugins: [],
};

export default config;
