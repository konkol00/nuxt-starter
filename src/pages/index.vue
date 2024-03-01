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
        <h3>About Nuxt.js 3</h3>
        <p>
          Nuxt.js 3 is a powerful framework for creating Vue.js applications with server-side rendering, static site generation, and more. It provides an intuitive and flexible development experience, allowing you to build modern web applications with ease. 
          With features such as improved performance, enhanced TypeScript support, and a streamlined development workflow, Nuxt.js 3 empowers developers to create responsive, fast, and modern web experiences.
        </p>
      </div>
      <div class="about__image">
        <NuxtImg src="/images/about/about_image.webp" height="800" width="800" />
      </div>
    </Section>
  </div>
</template>

<script>
  export default {
    name: 'home',
  }
</script>