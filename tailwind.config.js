/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./containers/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
    "./shared/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      fontFamily: {
        headingFont: ['Space Grotesk', 'sans-serif'],
        baseFont: ['Inter', 'sans-serif'],
      },
      colors: {
        whiteColor: 'var(--whiteColor)',
        blackColor: 'var(--blackColor)',
      },
    },
  },
  plugins: [],
}
