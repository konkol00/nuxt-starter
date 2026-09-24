<script setup lang="ts">
const open = ref(false)
const scrolled = ref(false)

const navigation = [
  { name: 'Home', link: '/#Hero' },
  { name: 'About', link: '/#About' },
  { name: 'Features', link: '/#Services' },
  { name: 'Contact', link: '/#Contact' },
]

const onScroll = () => {
  scrolled.value = window.scrollY > 24
}

const onKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') open.value = false
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <header class="nav" :class="{ 'nav--scrolled': scrolled, 'nav--open': open }">
    <div class="nav__backdrop" aria-hidden="true" @click="open = false" />
    <nav class="container nav__inner" aria-label="Main">
      <NuxtLink to="/" class="nav__brand" aria-label="Go to homepage">
        <NuxtImg src="/images/logo/nuxt.svg" alt="" width="42" height="28" />
        <span>Nuxt-Starter</span>
      </NuxtLink>

      <button
        class="nav__toggler"
        type="button"
        :aria-expanded="open"
        aria-controls="nav-menu"
        aria-label="Toggle navigation"
        @click="open = !open"
      >
        <span /><span /><span />
      </button>

      <div id="nav-menu" class="nav__collapse">
        <ul class="nav__list">
          <li v-for="item in navigation" :key="item.name">
            <NuxtLink :to="item.link" class="nav__link" @click="open = false">{{ item.name }}</NuxtLink>
          </li>
        </ul>
        <NuxtLink
          to="https://github.com/konkol00/nuxt-starter"
          external
          target="_blank"
          rel="noopener"
          class="btn btn-ghost btn-sm"
        >
          GitHub
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>
