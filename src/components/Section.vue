
<template>
  <section class="section" :id="anchor">
    <div class="container">
      <div v-if="title" class="section__title">
        <span>{{ subtitle }}</span>
        <h2>{{ title }}</h2>
      </div>
      <div class="section__body" :class="`g-${grid}`">
        <slot />
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Section',
    props: {
      anchor: {
        type: String,
        default: ''
      },
      subtitle: {
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: ''
      },
      grid: {
        type: String,
        default: "1",
      }
    }
  }
</script>