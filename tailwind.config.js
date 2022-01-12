const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './assets/scss/**.scss',
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
      slate: colors.slate,
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      serif: ['serif'],
    },
  },
  plugins: [],
}
