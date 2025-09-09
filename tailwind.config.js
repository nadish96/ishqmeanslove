/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: '#111827',
        cream: '#F7F4EF',
        clay: '#B97A84',
        gold: '#C2A676',
      },
      fontFamily: {
        'heading': ['Cormorant Garamond', 'serif'],
        'body': ['Newsreader', 'serif'],
        // Keep original options for easy switching
        'alt-heading': ['Cormorant Garamond', 'serif'],
        'alt-body': ['Source Sans Pro', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
