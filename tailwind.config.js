/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2F215F",
        secondary: "#ED2272",
        "light-grey": "#8287A1",
        "border-grey": "#DEDEDE",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        md: "50rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
