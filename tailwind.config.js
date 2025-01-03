/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          green: '#495E57',
          yellow: '#F4CE14',
        },
        secondary: {
          peach: '#EE9972',
          'light-peach': '#FBDABB',
          'light-gray': '#EDEFEE',
          'off-white': '#FAF4EC',
          'dark-gray': '#333333',
        },
      },
      fontFamily: {
        markazi: ['Markazi Text', 'serif'],
        karla: ['Karla', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
