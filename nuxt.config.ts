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


  devtools: { enabled: true }
})
