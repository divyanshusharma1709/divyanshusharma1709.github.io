/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "ds-bg": "#020617", // slate-950-ish
        "ds-card": "#020617",
      },
    },
  },
  plugins: [],
}