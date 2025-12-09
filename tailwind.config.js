const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // NOTE: We modify the gray color, as the default Tailwind gray color is heavily saturated
        // with blue, which makes it look strange in dark mode. This gray color is more balanced,
        // and works better for sites supporting dark mode.
        gray: colors.gray,
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
  ],
};
