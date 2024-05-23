/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    colors: {
      "cps-gold": "#DCA843",
      "cps-grey": "#BABABA",
      "cps-black": "#161617",
    },

    fontFamily: {
      "allotrix-font": ['Poppins', 'sans-serif'],
      "allotrix-font-secondary": ['Montserrat', 'sans-serif']
    },
  },

  plugins: [],
}

