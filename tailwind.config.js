/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./javascript/**/*.js"],
  theme: {
    extend: {
      colors: {
        'trent-green': '#006633',
        'trent-blue': '#003366',
        'trent-gold': '#FFD700',
        'trent': '#154734',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
} 