
/** @type {import('tailwindcss').Config} */
export default {

  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#000029",
        secondary: "#a3b9d1",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(180, 198, 218, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        amiri: ["Amiri", "serif"],
        montserrat: ["Montserrat", "sans-serif"]
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],

}