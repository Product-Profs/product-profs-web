/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite/**/*.js",
    "./**/*.{html,js}",
  ],
  theme: {
    fontFamily: {
      'body': ['"Roboto"',],
      'heading': ['"Inter"',],
    },
    extend: {
      colors: {
        'primary': '#BE25B1',
        'tint': '#e5a8e0',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

