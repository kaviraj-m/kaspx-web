/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#111827",
        primary: {
          start: "#2ccbb5",
          end: "#2bcbb6",
        },
        secondary: "#64748B",
        accent: "#2ccbb5",
        footerPink: "#2ccbb5",
      },
      fontFamily: {
        heading: ["Ultimate Serial Heavy", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}
