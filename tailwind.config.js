/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        '2xl': '1344px',
        'xl': '1200px',
        'lg': '944px',
        'md': '704px',
        'sm': '544px',
      },
    },
  },
  plugins: [],
}