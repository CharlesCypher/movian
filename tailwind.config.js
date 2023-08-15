/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1A1D29",
        white: "#F9F9F9",
        blue: "#67BDFF",
      },
      backgroundImage: {
        grad_overlay: "linear-gradient(0deg, rgba(26,29,41,1) 25%, rgba(255,255,255,0) 100%)",
      },
    },
  },
  plugins: [],
};
