<script setup lang="ts">
import { TabsContent, TabsIndicator, TabsList, TabsRoot, TabsTrigger } from 'reka-ui'

/**
 * Tabs built on Reka UI. Each tab renders a named slot with the same name
 * as its `value`, e.g. <template #install>...</template>.
 */
const props = defineProps<{
  tabs: { label: string, value: string }[]
  label: string
}>()

const active = ref(props.tabs[0]?.value)
</script>

<template>
  <TabsRoot v-model="active" class="tabs">
    <TabsList class="tabs__list" :aria-label="label">
      <TabsIndicator class="tabs__indicator" />
      <TabsTrigger v-for="tab in tabs" :key="tab.value" :value="tab.value" class="tabs__trigger">
        {{ tab.label }}
      </TabsTrigger>
    </TabsList>
    <TabsContent v-for="tab in tabs" :key="tab.value" :value="tab.value" class="tabs__content">
      <slot :name="tab.value" />
    </TabsContent>
  </TabsRoot>
</template>
