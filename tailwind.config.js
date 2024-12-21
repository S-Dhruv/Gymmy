/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        fire: 'fire 1s infinite',
      }
    },
    keyframes:{
      fire:{
        '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
      },
    },
    backgroundSize:{
      'fire-bg': '200% 200%',
    },
  },
  plugins: [],
}

