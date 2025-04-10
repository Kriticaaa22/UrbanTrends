/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideLeft:{
          "0%": { transform: "translateX(100%)",opacity:"0"},
          "100%": { transform: "translateX(0%)",opacity:"1"},

        },
        
      },
      animation: {
        slideDown: "slideDown 0.5s ease-in-out forwards",
        slideUp: "slideUp 0.5s ease-in-out forwards",
        slideLeft: "slideLeft 0.5s ease-in-out forwards"
      },
    },
  },
  plugins: [],
};
