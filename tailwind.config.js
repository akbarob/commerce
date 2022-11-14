/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
      },
      animation: {
        marquee: " marquee 15s linear infinite",
      },
      keyframes: {
        marquee: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(-50%)",
          },
        },
      },
    },
  },
  plugins: [],
};
