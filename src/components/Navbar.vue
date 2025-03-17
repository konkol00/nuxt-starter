<script setup lang="ts">
const active = ref(false);

const navigation = computed(() => [
  { name: 'Home', link: '/#Header' },
  { name: 'About', link: '/#About' },
  { name: 'Services', link: '/#Services' },
  { name: 'Contact', link: '/#Contact' },
])

const handleScroll = () => {
  const navbar = document.getElementById("Navbar")
  const navClasses = navbar?.classList
  if (navbar && navClasses) {
    if(document.documentElement.scrollTop > 50) {
      if (navClasses.contains("active") === false) {
        navClasses.toggle("active");
      }
    }
    else {
      (navClasses.contains("active") === true) 
      navClasses.toggle("active"); 
    }
  }
}

onMounted(() => {
  window.addEventListener("scroll", function(){
    handleScroll();
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
<template>
  <div id="Navbar">
    <nav class="nav">
      <div class="container">
        <NuxtLink to="/" class="nav__brand" aria-label="Go to homepage"><NuxtImg src="/images/logo/nuxt.svg" alt="Nuxt logo" height="60" width="60"/></NuxtLink>
        <button class="nav__toggler" type="button" aria-label="Toggle navigation" @click="active = !active">
          <div class="nav__toggler--btn" :class="{ 'active': active }">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        <div class="nav__collapse" :class="{ 'show': active }">
          <div class="nav__menu">
            <ul class="nav__list">
              <li class="nav__item" v-for="item in navigation" :key="item.name">
                <NuxtLink :to="item.link" class="nav__link" @click="active = !active">{{ item.name }}</NuxtLink> 
              </li>
            </ul>
          </div>
          <div class="nav__menu--right">
            <NuxtLink to="https://github.com/konkol00" class="nav__link" target="_blank">Github</NuxtLink>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
