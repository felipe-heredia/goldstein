const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {},
    colors: {
      amber: colors.amber,
      gray: colors.gray,
      zinc: colors.zinc,
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      serif: ['serif'],
    },
  },
  plugins: [],
}
