/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      colors: {
        background: "#EFEFEF",
        font: "#333333",
        megasena: "#6BEFA3",
        quina: "#8666EF",
        lotofacil: "#DD7AC6",
        lotomania: "#FFAB64",
        timemania: "#5AAD7D",
        diadesorte: "#BFAF83",
      },
      backgroundImage: {
        sidebar: "url('../src/assets/sidebar.svg')",
        sidebarMobile: "url('../src/assets/sidebarMobile.svg')",
      },
    },
  },
  plugins: [],
};
