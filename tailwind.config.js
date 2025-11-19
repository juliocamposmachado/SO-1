/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#0A1128',
        'brand-gold': '#F0C903',
        'brand-green': '#2D6A4F',
        'brand-red': '#BC4749',
        'brand-dark': '#1C1C1C',
      },
    },
  },
  plugins: [],
}
