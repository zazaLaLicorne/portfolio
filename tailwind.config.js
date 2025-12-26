/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xl2: "1150px", // ton breakpoint personnalisé
      },

      fontFamily: {
        sans: ["Roboto", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Merriweather", "ui-serif", "serif"],
        mono: ["Fira Code", "ui-monospace", "monospace"],
      },

      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "16px",
        xl: "24px",
        full: "9999px",
      },

      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
      },
      maxWidth: {
        "7xl": "1440px",
        "8xl": "1920px",
      },
      minHeight: {
        "screen-75": "75vh",
        "screen-50": "50vh",
      },
      opacity: {
        10: "0.1",
        90: "0.9",
      },
      scale: {
        102: "1.02",
        105: "1.05",
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  safelist: [
  // dark mode inline (SVG set:html)
  "dark:hidden",
  "dark:block",

  // layouts conditionnels
  "flex-row",
  "flex-col",

  // tailles dynamiques
  "w-10", "h-10",
  "w-12", "h-12",
  "w-16", "h-16",
  "w-5", "h-5",
  "w-8", "h-8",

  // hover avec couleurs inline
  "hover:text-[#0077B5]",
  "hover:bg-[#0077B5]/10",
  "hover:text-[#FC5757]",
  "hover:bg-[#FC5757]/10",
],


  plugins: [],
};
