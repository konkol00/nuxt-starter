<script setup lang="ts">
import {
  mdiBug,
  mdiCheckCircle,
  mdiConnection,
  mdiDatabase,
  mdiEmailOutline,
  mdiImageArea,
  mdiPhoneOutline,
  mdiRoutes,
  mdiSecurity,
  mdiTransitionMasked,
  mdiTrophy,
} from '@mdi/js'

useSeoMeta({ title: 'Home' })

const about = {
  title: 'About Nuxt 4',
  description: 'Nuxt is a powerful framework for building Vue.js applications with server-side rendering, static site generation and more. Nuxt 4 brings a cleaner project structure, faster data fetching and better TypeScript support — so you can ship responsive, fast and modern web experiences with ease.',
  points: [
    'New app/ directory structure',
    'Smarter, deduplicated data fetching',
    'Improved TypeScript project references',
    'Faster dev server and builds',
  ],
}

const services = [
  { icon: mdiRoutes, title: 'Routing & Layouts', description: 'File based routing system to build complex views and interfaces with a powerful and conventional approach.' },
  { icon: mdiConnection, title: 'Data Fetching', description: 'Composables that run on the server to fetch data for your components and render content in different ways.' },
  { icon: mdiImageArea, title: 'Assets & Style', description: 'Image, font and script optimizations with built-in support for CSS Modules, Sass, PostCSS and more.' },
  { icon: mdiTrophy, title: 'SEO & Meta Tags', description: 'Production ready and indexable by search engines, with meta tags and a sitemap generated for you.' },
  { icon: mdiSecurity, title: 'Middleware', description: 'Run custom code such as authentication, localization or A/B testing before rendering a page.' },
  { icon: mdiDatabase, title: 'State Management', description: 'A simple way to share reactive, SSR-friendly state between components with useState.' },
  { icon: mdiTransitionMasked, title: 'Transitions', description: 'Smooth transitions between layouts, pages and components with Vue & View Transitions API support.' },
  { icon: mdiBug, title: 'Error Handling', description: 'Built-in error handling and logging to help you debug and provide a better user experience.' },
]

const contact = {
  title: 'Let’s build a lightning-fast website together.',
  description: 'We create websites optimized for speed, accessibility and reliability. Get in touch to discuss how we can help you reach your performance goals.',
  mail: 'contact@kdproject.pl',
  phone: '+48 123 123 123',
}
</script>

<template>
  <div class="home">
    <AppHero />

    <AppSection anchor="About" title="About us" subtitle="The power of Vue components" :grid="2">
      <div class="about__content">
        <h3>{{ about.title }}</h3>
        <p>{{ about.description }}</p>
        <ul class="about__list">
          <li v-for="point in about.points" :key="point">
            <AppIcon :path="mdiCheckCircle" :size="20" />
            {{ point }}
          </li>
        </ul>
      </div>
      <div class="about__image">
        <NuxtImg
          src="/images/about/about_image.webp"
          alt="Laptop with code on a desk"
          width="560"
          height="560"
          densities="x1 x2"
          loading="lazy"
          decoding="async"
        />
      </div>
    </AppSection>

    <AppSection anchor="Services" title="Everything you need" subtitle="Features" :grid="4">
      <article v-for="item in services" :key="item.title" class="card">
        <div class="card__icon">
          <AppIcon :path="item.icon" :size="24" />
        </div>
        <h3 class="card__title">{{ item.title }}</h3>
        <p class="card__text">{{ item.description }}</p>
      </article>
    </AppSection>

    <AppSection anchor="Contact" :grid="1">
      <div class="cta">
        <span class="eyebrow eyebrow--light">Contact</span>
        <h2 class="cta__title">{{ contact.title }}</h2>
        <p class="cta__text">{{ contact.description }}</p>
        <div class="cta__buttons">
          <a :href="`mailto:${contact.mail}`" class="btn btn-light">
            <AppIcon :path="mdiEmailOutline" :size="20" /> Send mail
          </a>
          <a :href="`tel:${contact.phone.replaceAll(' ', '')}`" class="btn btn-outline-light">
            <AppIcon :path="mdiPhoneOutline" :size="20" /> Call us
          </a>
        </div>
      </div>
    </AppSection>
  </div>
</template>
