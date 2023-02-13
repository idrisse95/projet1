/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
   
    extend: {
      width: {
        '75': '230px',
      },
      colors: {
        'blue-c': '   rgb(38, 38, 86)',
        'blue-t': '#a3d7f96d',
        'blue-b': ' rgb(15, 15, 44)',
      },
      screens: {
        'xs': '376px',
        // => @media (min-width: 640px) { ... }
      },

    },
  },
  plugins: [],
}