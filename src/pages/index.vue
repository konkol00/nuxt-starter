<script setup>
  const pageTitle = 'Home';
  useHead({
    title: pageTitle,
  });
</script>

<template>
  <div class="app home">
    <Navbar />
    <Header />
    <Section anchor="About" title="About us" subtitle="The power of Vue Components" grid="2">
      <div class="about__content">
        <h3>{{ about.title }}</h3>
        <p>{{ about.description }}</p>
      </div>
      <div class="about__image">
        <NuxtImg src="/images/about/about_image.webp" alt="Section Image" height="800" width="800" loading="lazy" />
      </div>
    </Section>
    <Section anchor="Services" title="Services" subtitle="Compose with everything you need." grid="4">
      <div v-for="item in services" :key="item.title" class="services__card">
        <div class="services__card--icon">
          <mdicon :name="item.icon" :width="25" :height="25" />
        </div>
        <div class="services__card--title">
          <p>{{ item.title }}</p>
        </div>
        <div class="services__card--description">
          <p>{{ item.description }}</p>
        </div>
      </div>
    </Section>
    <Section anchor="Contact" title="Contact" subtitle="Build amazing web sites." grid="1">
      <div class="contact__content">
        <div class="contact__content--title">
          <h3>{{ contact.title }}</h3>
        </div>
        <div class="contact__content--description">
          <p>{{ contact.description }}</p>
        </div>
        <div class="contact__content--buttons">
          <NuxtLink :to="`mailto:${contact.mail}`" class="btn btn-primary" target="_blank">{{ contact.btnMail }}</NuxtLink>
          <NuxtLink :to="`tel:${contact.phone}`" class="btn btn-secondary--outline" target="_blank">{{ contact.btnCall }}</NuxtLink>
        </div>
      </div>
    </Section>
    <Footer />
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        about: {
          title: 'About Nuxt.js 3',
          description: 'Nuxt.js 3 is a powerful framework for creating Vue.js applications with server-side rendering, static site generation, and more. It provides an intuitive and flexible development experience, allowing you to build modern web applications with ease. With features such as improved performance, enhanced TypeScript support, and a streamlined development workflow, Nuxt.js 3 empowers developers to create responsive, fast, and modern web experiences.',
        },
        services: [
          {
            icon: 'Routes',
            title: 'Routing & Layouts',
            description: 'File based routing system to build complex views and interfaces with a powerful and conventional approach.',
          },
          {
            icon: 'Connection',
            title: 'Data Fetching',
            description: 'Composables that run on the server to fetch data for your components and enable you to render content in different ways.',
          },
          {
            icon: 'ImageArea',
            title: 'Assets & Style',
            description: 'Image, Font and Script optimizations with a built-in support for CSS Modules, Sass, PostCSS, CSS-in-JS and more.',
          },
          {
            icon: 'Trophy',
            title: 'SEO & Meta Tags',
            description: 'Production ready and indexable by search engines while giving the feeling of an app to the end-users.',
          },
          {
            icon: 'Security',
            title: 'Middleware',
            description: 'Run custom code such as authentication, localization or A/B testing before rendering a page or a group of pages.',
          },
          {
            icon: 'Database',
            title: 'State Management',
            description: 'Nuxt provides a simple way to share a reactive and SSR-friendly state between components.',
          },
          {
            icon: 'TransitionMasked',
            title: 'Transitions',
            description: 'Create smooth transitions between layouts, pages and components with a built-in support for Vue & browser transitions.',
          },
          {
            icon: 'bug',
            title: 'Error Handling',
            description: 'Built-in error handling and logging to help you debug your application and provide a better user experience.',
          },
        ],
        contact: {
          title: 'Get in touch with us to create lightning-fast websites.',
          description: 'Our team specializes in creating lightning-fast websites that deliver exceptional user experiences. We are dedicated to building web solutions optimized for speed and reliability. Contact us today to discuss how we can help you achieve your website performance goals.',
          mail: 'contact@kdproject.pl',
          phone: '+48 123 123 123',
          btnMail: 'Send Mail',
          btnCall: 'Call us',
        }
      }
    }
  }
</script>