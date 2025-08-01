/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // enable class-based dark mode
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Inter'", "sans-serif"], // you can update this later
      },
    },
  },
  plugins: [],
};
