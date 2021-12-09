const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  prefix: "",
  purge: {
    enabled: true,
    content: ["<path/to/project/**/*.{html, ts, jsx, etc}>"],
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        barlow: ["Lato", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "lottie-green": {
          DEFAULT: "#18C8CA",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
