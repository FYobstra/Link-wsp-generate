/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color" : "#00e676bf",
        "bg-dark" : "#18181b",
        "primary-text-light" : "#273240",
        "primary-text-dark" : "#fbfbfb",
        "secondary-text-light" : "#6b6b6b",
        "secondary-text-dark" : "#fbfbfb",
      }
    },
  },
  plugins: [],
}