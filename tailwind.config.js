const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

const brandColor = colors.blue;

module.exports = {
  // Enable JIT for a faster development experience:
  // https://tailwindcss.com/docs/just-in-time-mode
  mode: "jit",
  // Inform Tailwind of where our classes will be defined:
  // https://tailwindcss.com/docs/optimizing-for-production
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        // NOTE: We modify the gray color, as the default Tailwind gray color is heavily saturated
        // with blue, which makes it look strange in dark mode. This gray color is more balanced,
        // and works better for sites supporting dark mode.
        gray: colors.gray,
        // Add a new "brand" color to all Tailwind utilities, so that we can easily change it.
        brand: brandColor,
      },
      // Modify the default ring color so that it matches the brand color:
      ringColor: {
        DEFAULT: brandColor["500"],
      },
    },
  },

  // Add some basic Tailwind plugins to add additional features:
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
  ],
};
