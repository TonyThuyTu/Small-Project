import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'lv-brown': '#3d2817',
        'lv-tan': '#c19a6b',
        'lv-gold': '#d4af37',
      },
    },
  },
  plugins: [],
} satisfies Config
