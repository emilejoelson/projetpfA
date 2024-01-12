/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
      Poppins: ['Poppins', "sans-serif"],
      bahnschrift: ['Bahnschrift', 'sans-serif'],
      'arial-black': ['Arial Black', 'sans-serif'],
      'arial-narrow': ['Arial Narrow', 'sans'],
      'comic-sans': ['Comic Sans MS', 'cursive'],
       arial: ['Arial', 'sans-serif'],
       'ms-gothic': ['"MS Gothic"', 'sans-serif'],
       sans: ['Liberation Sans Narrow', 'sans-serif'],
       'great-vibes': ['Great Vibes', 'cursive'],
       'script': ['"Script MT Bold"', 'cursive'],
       'palatino': ['Palatino Linotype', 'serif'],
    },
    extend: {
      screens: {
        "1000px": "1050px",
        "1100px": "1110px",
        "800px": "800px",
        "1300px": "1300px",
        "400px":"400px"
      },
      scrollbar: ['rounded'],
    },
  },
  plugins: [ require('tailwind-scrollbar'),],
};

