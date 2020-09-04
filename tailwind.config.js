const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: ["src/**/*.{js,jsx,ts,tsx}","src/**/**/*.{js,jsx,ts,tsx}","src/**/**/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ballistic: {
          darkblue: "#2a2e40",
          lightblue: "#4c5c6e",
          yellow: "#f1b45a",
          tan: "#d9c9b4",
          gray: "#E9EDF1"
        }
      },
      fontFamily: {
        'sans': ["Hind", ...defaultTheme.fontFamily.sans]
      }
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui')
  ],
}
