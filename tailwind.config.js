/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}",
    "./components/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}",
    "./pages/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#7C3AED",
        primaryLight: "#A78BFA",
        primaryDark: "#5B21B6",
        secondary: "#F472B6",
        secondaryLight: "#F9A8D4",
        secondaryDark: "#DB2777",
        accent: "#34D399",
        accentLight: "#6EE7B7",
        accentDark: "#059669",
        pastel: {
          pink: "#FBCFE8",
          purple: "#E9D5FF",
          blue: "#BFDBFE",
          green: "#BBF7D0",
          yellow: "#FEF9C3",
        },
        neutral: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
        danger: "#EF4444",
        warning: "#F59E0B",
        success: "#10B981",
      },
       animation: {
      'glow-light': 'glowPulseLight 6s ease-in-out infinite',
      'glow-dark': 'glowPulseDark 6s ease-in-out infinite',
      'rotate-shadow': 'rotateShadow 10s linear infinite',
      'breathingShadow': 'breathingShadow 10s linear infinite'
  },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        serif: ["Merriweather", "ui-serif", "serif"],
        mono: ["Fira Code", "ui-monospace", "monospace"],
      },
      spacing: {
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "32px",
        "2xl": "48px",
        "3xl": "64px",
        "4xl": "96px",
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "16px",
        xl: "24px",
        full: "9999px",
      },
      boxShadow: {
        sm: "0 1px 2px rgba(0,0,0,0.05)",
        DEFAULT: "0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)",
        md: "0 4px 6px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.06)",
        lg: "0 10px 15px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.05)",
        xl: "0 20px 25px rgba(0,0,0,0.1), 0 10px 10px rgba(0,0,0,0.04)",
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
  
  plugins: [],
}

