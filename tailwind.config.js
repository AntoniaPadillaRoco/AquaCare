/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        prim: "#04B5C0",
        secondary: "#2E3E5C",
        third: "#0E7490",
        back: "#FFFFF0",
        ran: "#DADACA",
      }
    },
  },
  plugins: [],
}