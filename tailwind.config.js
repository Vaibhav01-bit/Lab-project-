/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'xp-bg': '#ECE9D8',
        'xp-blue': '#0058E6',
        'xp-lightblue': '#3A93FF',
        'xp-title': '#0A246A',
        'xp-border': '#ACA899',
        'xp-white': '#FFFFFF',
        'xp-gray': '#F0F0F0',
      },
      fontFamily: {
        'xp': ['Tahoma', 'Trebuchet MS', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
