/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        global: {
          black: "#000000",
          orange:"#f54748"
        }
        
      },
      fontFamily:{
        "salsa":['Salsa', 'sans-serif'],
        "lato":['Lato', 'sans-serif'],
      }
      ,
      fontWeight: {
        'hairline': 100,
        'thin': 200,
        'light': 300,
        'normal': 400,
        'medium': 500,
        'semibold': 600,
        'bold': 700,
        'extrabold': 800,
        'black': 900,
      },
      
    },
  },
  plugins: [],
}

