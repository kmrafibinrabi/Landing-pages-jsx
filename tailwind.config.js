/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#AF594C',
        secondary: '#1C4370',
        accent: '#1C4370',
        'primary-light': '#FFEDEB',
        'secondary-light': '#586C84',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'nav': '18px',
        // 'heading': '70px',
        'card-heading': '60px',
        'card-content': '24px',
        'list-heading': '19px',
        'list-item': '12px',
        'heading': ['30px', { lineHeight: '36px' }], // Mobile font size and line height
        // Override for desktop
        'heading-desktop': ['70px', { lineHeight: '75px' }],
      },
    },
  },
  plugins: [],
}

