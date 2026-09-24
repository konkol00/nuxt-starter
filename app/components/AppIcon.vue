<script setup lang="ts">
withDefaults(defineProps<{ path: string, size?: number | string }>(), { size: 24 })
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    fill="currentColor"
  >
    <path :d="path" />
  </svg>
</template>
