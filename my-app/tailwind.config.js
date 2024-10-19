/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#000000",  // Black
        secondary: "#FFD700", // Gold
        tertiary: "#FFFFFF",  // White
      },
      gridTemplateColumns:{
        'auto':'repeat(auto-fill, minmax(300px, 1fr))'
      }
    },
  },
  plugins: [],
}