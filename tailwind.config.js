/** @type {import('tailwindcss').Config} */
const { COLORS } = require("./src/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: COLORS.PRIMARY,
        secondary: COLORS.SECONDARY,
        // Add more colors as needed
      },
    },
  },
  plugins: [],
};
