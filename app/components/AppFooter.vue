<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container footer__body">
      <NuxtLink to="/" class="footer__brand" aria-label="Go to homepage">
        <NuxtImg src="/images/logo/nuxt.svg" alt="" width="36" height="24" />
        <span>Nuxt-Starter</span>
      </NuxtLink>
      <p class="footer__copy">
        © {{ year }} All rights reserved ·
        <NuxtLink to="https://kdproject.pl" external target="_blank" rel="noopener">KDProject.pl</NuxtLink>
      </p>
    </div>
  </footer>
</template>
