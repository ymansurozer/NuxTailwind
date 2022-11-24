/** @type {import('tailwindcss').Config} */
module.exports = {
  // https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually
  darkMode: "class",

  theme: {
    fontFamily: {
      sans: ["Inter"],
    },
  },

  plugins: [
    // https://github.com/tailwindlabs/tailwindcss-forms
    require("@tailwindcss/forms"),

    // https://github.com/tailwindlabs/headlessui/tree/main/packages/%40headlessui-tailwindcss
    require("@headlessui/tailwindcss"),
  ],
};
