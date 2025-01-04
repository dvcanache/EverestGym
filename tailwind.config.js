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
      },

    },

  },
  plugins: [
    function ({ addBase }) {
      addBase({
        '*': { fontFamily: 'Oswald, sans-serif' },
      });
    },
  ],
}

