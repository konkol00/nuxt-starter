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
  </div>
</template>

<script>
  export default {
    name: 'home',
  }
</script>