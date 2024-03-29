module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: (() => {
        let spacing = {}
        for (let i = 1; i <= 200; i++) {
          spacing[`${i}dvh`] = `${i}dvh`
          spacing[`${i}dvw`] = `${i}dvw`
        }
        return spacing
      })(),
      screens: {
        '3xl': '1800px',
      },
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'],
        'space-mono': ['Space Mono', 'monospace']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}