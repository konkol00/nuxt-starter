import { generateRobotsTxt } from "@nuxtjs/robots/util";

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

  robots: { robotsTxt: false },

  build: {
    transpile: ['mdi-vue']
  },

  devtools: { enabled: true },
  compatibilityDate: '2025-03-17'
})