/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        gradient: 'gradient .5s ease infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100%  0%',
            // backgroundImage: 'linear-gradient(to right, #eab308, black)',
          },
        },
      },
    },
  },
  plugins: [],
  fontFamily: {
    bebas: ['"Bebas Neue"', 'sans-serif'],
  },
}
