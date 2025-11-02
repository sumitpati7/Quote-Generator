/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#f8f8f8",
        darkBg: "#242424",
        frmae: "#fefefe",
        primary: "#41047e",
      },
    },
  },
  plugins: [],
};
