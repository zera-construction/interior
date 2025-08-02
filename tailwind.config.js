/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    darkMode: "class", // enable class-based dark mode
  theme: {
    extend: {
      fontFamily: {
        dmSans: ['DM Sans', 'sans-serif'],
        mozilla: ['Mozilla Text', 'serif'],
      },
    },
  },
  plugins: [],
}
