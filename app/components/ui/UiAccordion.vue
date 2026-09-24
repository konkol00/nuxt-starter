<script setup lang="ts">
import { AccordionContent, AccordionHeader, AccordionItem, AccordionRoot, AccordionTrigger } from 'reka-ui'
import { mdiChevronDown } from '@mdi/js'

/**
 * Accordion built on Reka UI – good for FAQs.
 * `multiple` lets several items stay open at once.
 */
withDefaults(defineProps<{
  items: { title: string, content: string }[]
  multiple?: boolean
}>(), { multiple: false })
</script>

<template>
  <AccordionRoot :type="multiple ? 'multiple' : 'single'" collapsible class="accordion">
    <AccordionItem v-for="(item, index) in items" :key="item.title" :value="`item-${index}`" class="accordion__item">
      <AccordionHeader as="h3" class="accordion__header">
        <AccordionTrigger class="accordion__trigger">
          {{ item.title }}
          <AppIcon :path="mdiChevronDown" :size="22" class="accordion__chevron" />
        </AccordionTrigger>
      </AccordionHeader>
      <AccordionContent class="accordion__content">
        <p>{{ item.content }}</p>
      </AccordionContent>
    </AccordionItem>
  </AccordionRoot>
</template>
