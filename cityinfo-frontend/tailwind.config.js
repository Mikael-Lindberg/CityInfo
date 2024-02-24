/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],

  theme: {
    extend: {
      colors: {
        complimentary: {
          50: '#f0fdfb',
          100: '#cbfcf7',
          200: '#97f8f0',
          300: '#5bede6',
          400: '#29d8d5',
          500: '#10bbbb',
          600: '#0a9497',
          700: '#0d7478',
          800: '#0f5c60',
          900: '#124c4f',
          950: '#032c30'
        }
      }
    }
  },
  plugins: []
}
