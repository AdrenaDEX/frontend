/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        main: '#000f23', // 04336a
        secondary: '#0b192d', // 1b2038
        third: '#1a2c44', // 181f29 // 000d1f
        fourth: '#526279', // 526279
        black: '#000000',
        highlight: '#fffffff5',
        bcolor: '#2F3B49',

        // text
        txtfade: '#858789',

        light: 'var(--color-light)',
        // dark: '#0b0e13',

        gray: {
          200: 'var(--color-gray-200)',
          300: 'var(--color-gray-300)',
          '300/85': 'var(--color-gray-300-85)',
          400: 'var(--color-gray-400)',
          500: 'var(--color-gray-500)',
        },
        blue: {
          200: 'var(--color-blue-200)',
          300: 'var(--color-blue-300)',
          400: 'var(--color-blue-400)',
          500: 'var(--color-blue-500)',
        },
        red: {
          200: 'var(--color-red-200)',
          300: 'var(--color-red-300)',
          400: 'var(--color-red-400)',
          500: 'var(--color-red-500)',
        },
      },
      fontSize: {
        xs: '0.65rem', // Extra Small
        sm: '0.75rem', // Small
        base: '0.875rem', // Base
        lg: '1rem', // Large
        xl: '1.125rem', // Extra Large
        '2xl': '1.25rem', // 2 Extra Large
        '3xl': '1.5rem', // 3 Extra Large
        '4xl': '1.875rem', // 4 Extra Large
        '5xl': '2.25rem', // 5 Extra Large
        '6xl': '2.625rem', // 6 Extra Large
      },
    },
    font: {
      mono: ['Roboto Mono', 'sans-serif'],
      regular: ['regular', 'sans-serif'],
      boldy: ['boldy', 'sans-serif'],
      special: ['special', 'sans-serif'],
    },
    fontFamily: {
      regular: ['regular'],
      special: ['special'],
      boldy: ['boldy'],
      mono: 'Roboto Mono',
    },
  },
  plugins: [],
};
