/** @type {import('tailwindcss').Config} */
import fluid, { extract, screens, fontSize } from 'fluid-tailwind';

module.exports = {
  content: {
  files:['./src/**/*.{js,jsx,ts,tsx}', 
  './index.html'],
extract},
  theme: {
    
    fontFamily: {
      'non.geist': ['"Geist Variable"', 'system-ui'],
    },
    extend: {
      aspectRatio: {
        '4/3': '4 / 3',
      },
      width: {
        '170': '42.5rem',
        '245': '61.25rem',
        '420': '105rem',
        '480': '120rem',
      },maxWidth: {
        '420': '105rem',
      },
      height: {
        '115': '28.75rem',
        '170': '42.5rem',
      },
      backgroundImage: {
        'custom-image': "url('./assets/a_happy_woman_holding_cookie.png')",
      },
    },screens, fontSize,
  },
  plugins: [fluid],
};