const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto Mono"],
      },
      colors: {
        primary: {
          DEFAULT: colors.violet[500],
          ...colors.violet,
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@headlessui/tailwindcss")
  ],
}
