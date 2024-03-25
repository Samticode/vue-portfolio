module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: (() => {
        let spacing = {}
        for (let i = 1; i <= 100; i++) {
          spacing[`${i}dvh`] = `${i}dvh`
          spacing[`${i}dvw`] = `${i}dvw`
        }
        return spacing
      })(),
    },
    fontFamily: {
      'helvetica': ['Helvetica', 'Arial', 'sans-serif']
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}