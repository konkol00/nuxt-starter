export default defineNuxtConfig({
  compatibilityDate: '2026-09-01',

  modules: [
    '@nuxt/image',
    '@nuxtjs/sitemap',
  ],

  app: {
    baseURL: '/nuxt-starter/',
    head: {
      htmlAttrs: { lang: 'en' },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#e13428' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/nuxt-starter/favicon.ico' },
        { rel: 'preload', as: 'font', type: 'font/woff2', crossorigin: '', href: '/nuxt-starter/fonts/athiti-600.woff2' },
      ],
    },
  },

  css: ['~/assets/scss/style.scss'],

  site: {
    url: 'https://konkol00.github.io',
    name: 'Nuxt-Starter',
  },

  devtools: { enabled: true },
})
