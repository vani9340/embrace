/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
        fontFamily:{
          'generalSans':'General Sans, sans-serif'
        },
        colors:{
          "blue_l":'#3461FF'
        },
        screens: {
          '2xl': '1440px',
          'range':'1000'
        },
    },
  },
  plugins: [],
}

