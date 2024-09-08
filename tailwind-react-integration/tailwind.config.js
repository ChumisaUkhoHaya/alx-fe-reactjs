/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "https://github.com/ChumisaUkhoHaya/alx-fe-reactjs/blob/main/tailwind-react-integration/src",
    "https://github.com/ChumisaUkhoHaya/alx-fe-reactjs/blob/main/tailwind-react-integration/index.html"
  ],
  darkMode: 'media', // Set to 'media' for automatic dark mode based on user preference, or 'class' for manual control
  theme: {
    extend: {},
  },
  purge:{
  variants: {
    extend: {}, // Extend variants for existing utilities if needed
  },
  plugins: [],
}}
