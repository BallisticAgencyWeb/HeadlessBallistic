module.exports = {
  purge: ["src/**/*.{js,jsx,ts,tsx}","src/**/**/*.{js,jsx,ts,tsx}","src/**/**/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui')
  ],
}
