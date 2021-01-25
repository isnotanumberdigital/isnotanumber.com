const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'light': '#9CA3B0',
        'dark': '#171717',
        'darker': '#0f0f0f',
      },
      spacing: {
        90: '90vh',
      },
      fontFamily: {
        sans: [
          'stelvio grotesk',
          ...defaultTheme.fontFamily.sans,
        ],
      },
      keyframes: {
        'move-a-little': {
          '0%': { transform: 'translate(0px, 0px)' },
          '100%': { transform: 'translate(20px, 20px)' },
        },
        'move-a-lot': {
          '0%': { transform: 'translate(0px, 0px)' },
          '100%': { transform: 'translate(60px, 60px)' },
        },
      },
      animation: {
        'stand-out': 'move-a-lot 1s linear 1s 1 forwards',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
