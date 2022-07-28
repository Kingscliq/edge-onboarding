/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#664DE5',
        secondary: '#151B28',
        tertiary: '#919AAD',
        grey: '#50596E',
        dark: '#333',
        light: '#f4f4f4',
        white: '#ffffff',
        info: '#E3FEFF',
        success: '#006644',
        error: '#b92500',
        warn: '#ff8b00',
      },
    },
  },
  plugins: [],
};
