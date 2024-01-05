/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.tsx',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'ttCommons': ['TTCommons'],
        'ttCommonsBold': ['TTCommonsBold'],
      },
    },
  },
  plugins: [],
};

