/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    backdropFilter: {
      'none': 'none',
      'blur': 'blur(20px)',
    },
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      letterSpacing: {
        wide: '.03px',
      },
      colors: {
        "primaryRed": '#AC262C',
        "primaryPurple": "#990195"
      }
    }
  },
  plugins: [
    require('tailwindcss-filters'),
    require('tailwindcss-neumorphism'),
    require("daisyui"),
  ],
}
