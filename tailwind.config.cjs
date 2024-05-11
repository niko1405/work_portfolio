/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto Mono", "monospace"],
        dm_mono: ["DM Mono", "monospace"],
        jakarta_sans: ["Plus Jakarta Sans", "sans-serif"],
        futura: ["Futura Mittel", "sans-serif"],
        fatface: ["Abril Fatface Regular", "monospace"],
        futura_m: ["Futura Md BT Medium Italic", "sans-serif"],
        sono_bold: ["Sono Extrabold", "monospace"],
        truculenta: ["Truculenta", "sans-serif"],
      },
    },
    screens: {
      mobile: { max: "619px" },
      xs: "480px",
      ss: "620px",
      sm: "780px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
      contact: "810px",
      about: "900px",
      noDesktop: { max: "1000px" },
    },
  },
  plugins: [],
};
