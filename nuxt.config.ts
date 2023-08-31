export default {
  head: {
    title: 'My Nuxt App',
    meta: [
      { name: 'description', content: 'This is my Nuxt App' }
    ]
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    },
  },
  build: {
    transpile: ['@vuepic/vue-datepicker']
}
}

