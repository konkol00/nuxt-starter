<template>
  <footer class="footer">
    <div class="footer__body">
      Copyright © {{new Date().getFullYear()}} All rights reserved | <NuxtLink to="https://kdproject.pl" aria-label="KDProject.pl - portfolio">KDProject.pl</NuxtLink> 
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'Footer',
  }
</script>