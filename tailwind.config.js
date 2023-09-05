/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.js', './src/views/**/*.ejs'],
  theme: {
    extend: {},
  },
  plugins: [require('tailwindcss'), require('autoprefixer')],
};
