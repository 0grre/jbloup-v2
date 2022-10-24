/** @type {DefaultColors} */
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      green: colors.green,
      purple: colors.purple,
      blue: colors.blue,
      red: colors.red,
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
    extend: {
      fontFamily: {
        open: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/media/grid.jpg')",
      }
    },
  },
  plugins: [require("daisyui")],
}
