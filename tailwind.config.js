/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        'yekanBakh': ['yekanBakh'],
        'roboto': ['roboto'],
      },
      fontFamily: {
        // english: 'Estedad',
      },
      borderWidth: {
        'bottom': '1px',
      },
      backgroundImage: {
        'mainBg': "url('./assets/image/bgmain.jpg')",
      },
      colors: {
        primary: '#0B5FAE',
        secondry: '#7C8893'
      },
      backgroundImage: {
        'primary': '#0B5FAE',
        'secondry': '#7C8893',
      },
      borderRadius: {
        normal: '0.625rem',
      },
      boxShadow: {
        input: '0px 3px 30px 5px rgba(24, 87, 125, 0.05)',
        box: '0px 30px 100px rgba(73, 48, 128, 0.05)',
        'box-lg': '0px 30px 100px rgba(73, 48, 128, 0.1)',
      },
    },
  },
  plugins: [],
}