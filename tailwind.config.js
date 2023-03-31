/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  extend: {},
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#fff',
      headingFont: '#1c1f35',
      paragraphFont: '#666c89',
      primary: {
        100: '#ffbe34',
        200: '#091242',
      },
      secondary: {
        100: '#f4f4f4',
      },
      gradient: {
        100: '#ffb629',
        200: '#ffda56',
        300: '#ffd7a6',
      },
    },
  },

  plugins: [],
};
