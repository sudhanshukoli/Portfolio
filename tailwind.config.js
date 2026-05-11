/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
  extend: {
    fontFamily: {
      castoroRegular: ["castoro-regular", "sans-serif"],
      antonioRegular: ["antonio-regular", "sans-serif"],
      playwriteRegular: ["playwrite-regular", "sans-serif"],
      playwriteLight: ["playwrite-light", "sans-serif"],
    },
  },
},

  plugins: [
    require('tailwindcss-textshadow')
  ],
}