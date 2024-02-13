/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  theme: {
    extend: {
      colors: {
        primary: "#034EA1",
        secondary: "#F0F0F0",
        hoverColor: "#0c8ce9",
        neutral: "#0074FA",
      },
    },
  },
};
