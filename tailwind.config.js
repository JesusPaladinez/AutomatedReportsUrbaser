/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "urbaser-1": "#053630",
        "urbaser-2": "#53d1c9",
      },
      backgroundImage: {
        "img-login": "url('/src/assets/imgLogin.jpg')",
        "img-register": "url('/src/assets/imgRegister.jpg')",
      },
    },
  },
  plugins: [],
};
