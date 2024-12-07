/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'landingpage': "url('/ELBg.jpg')",
      },
    },
  },
  plugins: [],
};