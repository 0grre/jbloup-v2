/** @type {DefaultColors} */
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors:{
      black: colors.black,
      white: colors.white,
      'laravel': '#f54d39',
      'tailwindcss': '#38acc3',
      'vue': '#42b985',
      'java': '#ef463a',
      'javascript': '#fbdc03',
      'php': '#9c9dce',
      'docker': '#3594ec',
      'git': '#f4511e',
      'kubernetes': '#2876be',
      'macos': '#ebeef1',
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}
