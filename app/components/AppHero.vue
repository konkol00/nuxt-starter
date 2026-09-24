<script setup lang="ts">
const highlights = [
  { value: 'Nuxt 4', label: 'latest framework' },
  { value: 'SSG', label: 'static & fast' },
  { value: 'SCSS', label: 'no CSS framework' },
  { value: 'A11y', label: 'semantic markup' },
]
</script>

<template>
  <section id="Hero" class="hero">
    <div class="hero__glow" aria-hidden="true" />
    <div class="container hero__content">
      <span class="badge"><span class="badge__dot" /> Now running on Nuxt 4</span>
      <h1 class="hero__title">
        Build <span class="text-gradient">amazing</span> web experiences
      </h1>
      <p class="hero__text">
        A responsive, fast and modern starter for landing pages. Clean SCSS, zero UI framework,
        ready to deploy on GitHub Pages in minutes.
      </p>
      <div class="hero__buttons">
        <NuxtLink to="https://github.com/konkol00/nuxt-starter" external target="_blank" rel="noopener" class="btn btn-primary">
          Get the template
        </NuxtLink>
        <NuxtLink to="https://nuxt.com/docs" external target="_blank" rel="noopener" class="btn btn-outline">
          Nuxt docs
        </NuxtLink>
      </div>
      <ul class="hero__stats">
        <li v-for="item in highlights" :key="item.value">
          <strong>{{ item.value }}</strong>
          <span>{{ item.label }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>
