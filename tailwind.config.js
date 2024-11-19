// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./**/*.{html,js}"],
//   theme: {
//     extend: {
//       backgroundImage: {
//         'welcombanner': "url('src/img/welcomebanner.jpg')",

//       }
//     },
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
};