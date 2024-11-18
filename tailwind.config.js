/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'welcombanner': "url('src/img/welcomebanner.jpg')",
        
      }
    },
  },
  plugins: [],
}