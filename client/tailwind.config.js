/** @type {import('tailwindcss').Config} */
import flowbite from 'flowbite/plugin';
export default {
  darkMode: 'class',
  content: [   "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
   "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/**/*.js"],
  theme: {
    extend: {
        fontFamily: {
        'root-heading': 'var(--root-font-family-headings)',
      },
    },
  },
  plugins: [flowbite],
}

