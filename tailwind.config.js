/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        brunoAce: "Bruno Ace",
        montserrat: "Montserrat",
        pacifico: "Pacifico"
      },
      colors: {
        darkGray: "#353535",
        primaryBlue: "#279EFF",
      },
    },
  },
  plugins: [],
};
