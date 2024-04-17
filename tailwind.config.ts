import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'mobile': '640px',
      'tablet': '768px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
    fontFamily: {
      f1: ['var(--font-f1)'],
      f2: ['var(--font-f2)'],
      f3: ['var(--font-f3)'],
    },
    colors: {
      white: '#ffffffd0',
      black: '#000000e0',
      grey: '#aaaaaae0',
    },
    extend: {
      colors: {
        test: {
          1: '#FF000030',
          2: '#00FF0030',
          3: '#0000FF30'
        },
        primary: "#FF865B",
        secondary: "#ccd6f6",
        accent: "#ff7949",
        neutral: {
          DEFAULT: "#1b262c",
          content: "#94a0a9",
        },
        base: {
          100: "#121c22",
          200: "#0e171e",
          300: "#091319",
          content: "#9fb9d0",
        },

        title: "#ccd6f6",
        orange: "#ff7949",
        border: "#1f2937",
      },
      keyframes: {
      },
      animation: {
      },
      backgroundImage: {
      }
    },
  },
  plugins: [],
}
export default config
