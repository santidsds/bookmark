/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        softBlue: 'hsl(231, 69%, 60%)',
        softRed: 'hsl(0, 94%, 66%)',
        grayishBlue:'hsl(229, 8%, 60%)',
        veryDarkBlue:'hsl(229, 31%, 21%)',
      },
      fontFamily:{
        Rubik:'Rubik',
      },

    },
    screens: {
      '2xs': '275px',

      'xs': '360px',

      '2sm': '500px',

      'sm': '640px',

      'md': '768px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1536px',

      'hd': '1918px',

      '3xl': '2024px',
    }
  },
  plugins: [],
}
