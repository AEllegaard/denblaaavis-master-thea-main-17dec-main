/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'blue-blue-100': '#e0eefa',
      'blue-blue-200': '#3269c8',
      'blue-blue-300': '#000a8c',
      'grey-grey-100': '#ffffff',
      'grey-grey-200': '#f2f2f2',
      'grey-grey-300': '#808080',
      'black': '#000000',
      'red-red-100': '#f88d8d',
      'red-red-200': '#ff4d58',
      'text': '#000000',
      'text-inverse': '#000A8C',
      'text-on-color': '#ffffff',
      'text-gray': '#808080',
    },
    spacing:{
      '0' : '0rem',
      '1' : '0.25rem',
      '2' : '0.5rem',
      '3' : '0.75rem',
      '4' : '1rem',
      '5' : '1.25rem',
      '6' : '1.5rem',
      '7' : '2rem',
      '8' : '3.625rem',
      '20' : '5rem',
      '30' : '6.25rem',
    },
    fontFamily: {
      'proxima': ['"proxima-nova"', 'sans-serif'], // Tilføj proxima-nova
    },
    fontWeight: {
      'normal': '400', // Proxima Nova normal vægt
      'bold': '700',   // Proxima Nova fed vægt
    },
    fontSize: {
      'xs' : '0.75rem',
      'sm' : '0.875rem',
      'base' : '1rem',
      'xl' : '1.25rem',
      '2xl' : '1.5rem',
      '3xl' : '1.875rem',
    },
    borderWidth: {
      '1': '0.5px',
    }
  },
    plugins: [],
  }
