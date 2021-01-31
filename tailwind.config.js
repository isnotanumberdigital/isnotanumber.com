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
        'move-a-lil': {
          '0%': { transform: 'translate(0px, 0px)' },
          '100%': { transform: 'translate(20px, 20px)' },
        },
        'move-a-lot': {
          '0%': { transform: 'translate(0px, 0px)' },
          '100%': { transform: 'translate(60px, 60px)' },
        },
      },
      animation: {
        'lil-stand-out': 'move-a-lil 1s cubic-bezier(0.455, 0.03, 0.515, 0.955) 1s 1 forwards',
        'big-stand-out': 'move-a-lot 1s cubic-bezier(0.455, 0.03, 0.515, 0.955) 1s 1 forwards',
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
      },
    },
  },
  variants: {
    extend: {
      transform: ['responsive', 'group-hover'],
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
