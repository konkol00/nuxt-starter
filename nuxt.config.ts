export default defineNuxtConfig({
  ssr: true,
  srcDir: 'src/',
  app: {
    baseURL: '/nuxt-starter/'
  },
  css: [
    'assets/scss/style.scss',
  ],
  modules: [ 
    '@nuxtjs/seo',
    '@nuxt/image',
    'nuxt-delay-hydration'
  ],
  site: {
    url: 'https://konkol00.github.io/',
  },
  build: {
    transpile: ['mdi-vue']
  },
  devtools: { enabled: true }
})
