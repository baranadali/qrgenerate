/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mobile': {'max': '768px'},
    },
    extend: {
      colors: {
        "gray-large": "#121212",
        "gray-medium": "#1c1c1c",
        "gray-small": "#232323",
        "gray-xsmall": "#3f3f3f",
      },
    },
  },
  plugins: [],
}