module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        grayish: {
          50: "#FAFAFA",
          100: "#E4E5F1",
          200: "#D2D3DB",
          300: "#9394A5",
          400: "#484B6A",
        },
        blueish: {
          50: "#CACDE8",
          100: "#E4E5F1",
          200: "#777A92",
          300: "#4D5066",
          400: "#393A4C",
          500: "#25273C",
          600: "#161722",
        },
        crayola: "#3A7BFD",
      },
      backgroundImage: {
        check:
          "url('images/icon-check.svg'), linear-gradient(45deg, #57DDFF, #C058F3)",
      },
      backgroundSize: {
        "100%": "100%",
      },
      fontFamily: {
        josefin: ['"Josefin Sans"', "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [require("@tailwindcss/forms")],
};
