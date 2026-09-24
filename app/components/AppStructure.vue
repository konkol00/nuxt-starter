<script setup lang="ts">
type Row = { name: string, depth: number, note?: string, dir?: boolean, app?: boolean }

const rows: Row[] = [
  { name: 'my-site/', depth: 0, dir: true },
  { name: 'app/', depth: 1, dir: true, app: true, note: 'your code' },
  { name: 'assets/scss/', depth: 2, dir: true, app: true },
  { name: 'components/', depth: 2, dir: true, app: true },
  { name: 'layouts/', depth: 2, dir: true, app: true },
  { name: 'pages/', depth: 2, dir: true, app: true, note: 'routes' },
  { name: 'app.vue', depth: 2, app: true },
  { name: 'public/', depth: 1, dir: true, note: 'served as-is' },
  { name: 'nuxt.config.ts', depth: 1 },
  { name: 'package.json', depth: 1 },
]
</script>

<template>
  <figure class="structure">
    <div class="structure__panel">
      <ul class="structure__tree">
        <li
          v-for="row in rows"
          :key="row.name + row.depth"
          :class="{ 'is-dir': row.dir, 'is-app': row.app }"
          :style="{ '--depth': row.depth }"
        >
          <span class="structure__name">{{ row.name }}</span>
          <span v-if="row.note" class="structure__note">{{ row.note }}</span>
        </li>
      </ul>
    </div>
    <figcaption>Project layout with the Nuxt 4 <code>app/</code> directory.</figcaption>
  </figure>
</template>
