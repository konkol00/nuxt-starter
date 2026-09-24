<script setup lang="ts">
const title = 'Nuxt-Starter'
const description = 'Responsive, fast and modern Nuxt 4 starter project for landing pages.'

useSeoMeta({
  titleTemplate: (chunk) => (chunk ? `${chunk} · ${title}` : title),
  description,
  ogTitle: title,
  ogDescription: description,
  ogType: 'website',
  ogImage: 'https://konkol00.github.io/nuxt-starter/images/og-image.png',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
