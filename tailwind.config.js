/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat Alternates", "sans-serif"],
      },
      colors: {
        primary: "#F93064",
        secondary: "#FFA4BF",
        black: "#333333",
      },
      container: {
        padding: "1rem",
      },
    },
    fontSize: {
      sm: "0.8rem",
      xsm: "15px",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
    },
    backgroundImage: {
      main: "url('./assets/bg-main.svg')",
      "secondary-sm": "url('./assets/bg-sm.svg')",
    },
  },
  plugins: [],
};
