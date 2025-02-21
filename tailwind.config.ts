import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        blurwhite: "rgba(255,255,255,0.7)",
        blurblue: "rgba(9, 151, 124, 0.1)",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        poppins : ["Poppins", "sans-serif"],
      },
    },
    // custome screens
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
} satisfies Config;
