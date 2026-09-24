<script setup lang="ts">
withDefaults(defineProps<{
  anchor: string
  subtitle?: string
  title?: string
  grid?: 1 | 2 | 3 | 4
}>(), { grid: 1 })
</script>

<template>
  <section :id="anchor" class="section">
    <div class="container">
      <header v-if="title" class="section__title">
        <span class="eyebrow">{{ subtitle }}</span>
        <h2>{{ title }}</h2>
      </header>
      <div class="section__body" :class="`g-${grid}`">
        <slot />
      </div>
    </div>
  </section>
</template>
