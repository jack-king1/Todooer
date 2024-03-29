/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        redd: "hsl(8, 100%, 50%)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        myFont: ["myFont", "cursive"],
      },
    },
  },
  plugins: [],
};
