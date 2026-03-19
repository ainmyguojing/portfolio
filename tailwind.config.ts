import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#FFFF05",
      },
      boxShadow: {
        "card-hover": "0 2px 12px rgba(0,0,0,0.03)",
      },
      transitionTimingFunction: {
        snappy: "cubic-bezier(.2,.8,.2,1)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
