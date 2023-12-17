/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    screens: {
      xs: "500px",
      ...defaultTheme.screens,
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
