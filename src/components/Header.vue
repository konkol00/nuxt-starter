<template>
  <Section anchor="Header">
    <div class="header__content">
      <div class="header__description">
        <span class="header__description--subtitle">Build amazing web experiences</span>
        <h1 class="header__description--title">Nuxt-Starter</h1>
        <p class="header__description--text">Experience the power of Nuxt.js with this responsive, fast, and modern starter project.</p>
      </div>
      <div class="header__buttons">
        <NuxtLink to="https://github.com/konkol00/nuxt-starter" class="btn btn-primary" target="_blank">See more</NuxtLink>
        <NuxtLink to="https://github.com/konkol00/nuxt-starter" class="btn btn-secondary--outline" target="_blank">View Github</NuxtLink>
      </div>
    </div>   
  </Section>
</template>

<script>
  export default {
    name: 'header',
  }
</script>