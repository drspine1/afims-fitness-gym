/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
primaryColor:{
  100:"#ff7b02",
  200:"#e5a55d"
},
secondarybg1:"#000e17",
secondarybg2:"#001e2d",
secondarybg3:"#012734",
secondarybg4:"#003347",
lightcolor:"#85a2b2",
whitecolor:"hsl(0,0%,90%)"

      }
    },
  },
  plugins: [],
}

