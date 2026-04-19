import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'night-forest': '#1a2e1a',
        'moss': '#2d4a2d',
        'earth': '#3d2b1f',
        'parchment': '#f5f0e8',
        'gold': '#c9a84c',
      },
      fontFamily: {
        serif: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        'content': '72rem',
      },
    },
  },
  plugins: [],
} satisfies Config

