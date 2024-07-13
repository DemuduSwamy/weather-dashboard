/** @type {import('tailwindcss').Config} */
const { COLORS } = require("./src/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      heading: "#012a72",
      content: "#00BFFF",
      bg1: "#8469A4",
      bg2: "#885692",
      dashboardBg1: "#272C4F",
      dashboardBg2: "#0F222F",
      primary: COLORS.PRIMARY,
      secondary: COLORS.SECONDARY,
    },
  },
  plugins: [],
};
