/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    extend: {
      eight: {
        '1/2': '50%',
        '1/3': '33.333%',
        '2/3': '66.666%',
        '1/4': '25%',
        '3/4': '75%',
      }
    },
  },
  variants: {},
  plugins: [],
}

