<script setup lang="ts">
import { debounce } from 'lodash-es'
import { mdiMagnify } from '@mdi/js'

/**
 * Live search with debounce.
 *
 * Filtering on every keystroke is fine for a short list, but in a real app
 * each search is usually a request to an API. debounce() waits until the user
 * stops typing for `delay` ms and only then runs the search once.
 */
const composables = [
  'useAsyncData', 'useFetch', 'useLazyFetch', 'useState', 'useCookie', 'useHead',
  'useSeoMeta', 'useRoute', 'useRouter', 'useRuntimeConfig', 'useNuxtApp', 'useError',
  'useRequestHeaders', 'useRequestURL', 'useAppConfig', 'useId', 'useLoadingIndicator',
  'usePreviewMode', 'useRequestEvent', 'useResponseHeader', 'useRouteAnnouncer',
]

const delay = 400

const query = ref('')
const results = ref(composables)
const keystrokes = ref(0)
const searches = ref(0)
const pending = ref(false)

// imagine this is: results.value = await $fetch('/api/search', { query: { q } })
function search(q: string) {
  searches.value++
  pending.value = false
  const term = q.trim().toLowerCase()
  results.value = composables.filter(name => name.toLowerCase().includes(term))
}

const debouncedSearch = debounce(search, delay)

function onInput() {
  keystrokes.value++
  pending.value = true
  debouncedSearch(query.value)
}

onBeforeUnmount(() => debouncedSearch.cancel())
</script>

<template>
  <div class="search">
    <label for="composable-search" class="field__label">Search Nuxt composables</label>
    <div class="search__box">
      <AppIcon :path="mdiMagnify" :size="22" class="search__icon" />
      <input
        id="composable-search"
        v-model="query"
        type="search"
        class="input search__input"
        placeholder="Try typing “fetch”"
        autocomplete="off"
        @input="onInput"
      >
    </div>

    <dl class="search__stats" aria-live="polite">
      <div><dt>Keystrokes</dt><dd>{{ keystrokes }}</dd></div>
      <div><dt>Searches run</dt><dd>{{ searches }}</dd></div>
      <div><dt>Status</dt><dd>{{ pending ? `waiting ${delay} ms…` : `${results.length} results` }}</dd></div>
    </dl>

    <ul class="search__results" :class="{ 'is-pending': pending }">
      <li v-for="name in results" :key="name"><code>{{ name }}()</code></li>
      <li v-if="!results.length" class="search__empty">Nothing found</li>
    </ul>
  </div>
</template>
