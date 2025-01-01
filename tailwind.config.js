/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'amarillo': '#fff900',
      },
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

