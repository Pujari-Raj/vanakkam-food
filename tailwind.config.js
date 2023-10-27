/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        orangeColor: "#fc8019",
        blackColor: "#282c3f",
        grayColor: "#686b78",
        greenColor: "#60b246",
      },
    },
  },
  plugins: [],
}

