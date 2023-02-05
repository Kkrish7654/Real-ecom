/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cc:{
          400:"rgb(34, 34, 34)",
        },
      },
    },
  },
  plugins: [],
}