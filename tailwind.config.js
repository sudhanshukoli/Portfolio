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
      gruppoRegular: ["gruppo-regular", "sans-serif"],
      sairaBold: ["saira-bold", "sans-serif"],
      railway: ["railway", "sans-serif"],
    },
  },
},

  plugins: [
    require('tailwindcss-textshadow')
  ],
}