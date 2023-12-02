/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'vs':'366px',
      },
      backgroundColor: {
        'custom-color': '#f1f5f9',
      },
    },
  },
  plugins: [],
}