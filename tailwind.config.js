/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          50: "#f4f7f8",
          100: "#e3eaed",
          200: "#c3d3d9",
          300: "#94b1bb",
          400: "#5d8996",
          500: "#3d6f7d",
          600: "#2f5865",
          700: "#2a4853",
          800: "#263d46",
          900: "#0e2028",
          950: "#07151b",
        },
        coral: {
          50: "#fff4f1",
          100: "#ffe5df",
          200: "#ffcec3",
          300: "#ffa996",
          400: "#ff7a5e",
          500: "#f95433",
          600: "#e4361a",
          700: "#be2914",
          800: "#9a2415",
          900: "#7d2216",
        },
        teal: {
          400: "#3fb8ae",
          500: "#2a9d95",
          600: "#217d78",
        },
        sand: {
          50: "#faf7f2",
          100: "#f3ece1",
          200: "#e6d9c5",
        },
      },
      fontFamily: {
        sans: ['"Manrope"', "system-ui", "sans-serif"],
        display: ['"Unbounded"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(14,32,40,.04), 0 12px 32px -12px rgba(14,32,40,.18)",
        lift: "0 2px 4px rgba(14,32,40,.05), 0 24px 48px -20px rgba(14,32,40,.28)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(.85)", opacity: ".7" },
          "70%": { transform: "scale(1.35)", opacity: "0" },
          "100%": { transform: "scale(1.35)", opacity: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up .6s cubic-bezier(.22,1,.36,1) both",
        "pulse-ring": "pulse-ring 2.4s ease-out infinite",
      },
    },
  },
  plugins: [],
};
