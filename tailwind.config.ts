import type { Config } from "tailwindcss";

export default {
  content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        coal: "#11100d",
        soot: "#1d1a16",
        gold: "#d7a443",
        ember: "#b44b2e",
        rice: "#fff8ea",
        sand: "#f3e4c9",
        leaf: "#31543b",
        clay: "#8b5138",
        arena: "#07080c",
        panel: "#121723",
        cyan: "#35d7d1",
        volt: "#f1c94c"
      },
      boxShadow: {
        soft: "0 24px 80px -42px rgba(17, 16, 13, 0.55)"
      }
    }
  },
  plugins: []
} satisfies Config;
