const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: [
    "src/**/*.{js,jsx,ts,tsx}",
    "src/**/**/*.{js,jsx,ts,tsx}",
    "src/**/**/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bayellow: {
          dark: "#f1b45a",
          normal: "#f9c78c",
          light: "#f7d5b0",
          lighter: "#f4e4d4",
        },
        ballistic: {
          darkblue: "#2a2e40",
          blue: "#4c5c6e",
          lightblue: "#77aed6",
          yellow: "#f1b45a",
          tan: "#d9c9b4",
          gray: "#E9EDF1",
        },
      },
      fontFamily: {
        sans: ["Hind", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        xs: ".875rem",
        sm: "1rem",
        base: "1.125rem",
        lg: "1.25rem",
        xl: "1.5rem",
        "2xl": "1.875rem",
        "3xl": "2.25rem",
        "4xl": "3rem",
        "5xl": "5rem",
        "6xl": "5rem",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/ui"),require('@tailwindcss/typography')],
};
