export default defineNuxtConfig({
  ssr: true,
  srcDir: 'src/',

  css: [
    'assets/scss/style.scss',
  ],
  modules: [ 
    '@nuxtjs/seo',
    '@nuxt/image',
    'nuxt-delay-hydration'
  ],
  site: {
    url: 'https://konkol00.github.io/nuxt-starter/',
  },
  build: {
    transpile: ['mdi-vue']
  },
  devtools: { enabled: true }
})
