/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', 
  './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: [
        "Inconsolata var, sans-serif",
        {
          fontFeatureSettings: '"cv11", "ss01"',
          fontVariationSettings: '"opsz" 32'
        },
      ],
    },
  },
  plugins: [],
}

