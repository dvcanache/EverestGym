/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'amarillo': '#fee705',
      },
      fontFamily: {
        sans: ['Oswald', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
        bebas: ['Bebas Neue', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      animation: {
        animateBg: 'animateBg 6s linear infinite',
      },
      keyframes: {
        animateBg: {
          '0%': { backgroundPosition: '100% 0%' },
          '100%': { backgroundPosition: '0% 0%' },
        },
      },
      backgroundImage: {
        'animated-gradient': 'linear-gradient(70deg, #000000, #000000, #0f0f0f, #000000, #000000)',
      },
      backgroundSize: {
        '400x': '400% 100%',
      },

    },

  },
  plugins: [
    function ({ addBase }) {
      addBase({
        '*': { fontFamily: 'Oswald, sans-serif' },
      });
    },
    require('tailwindcss-animated')
    
  ],
}

