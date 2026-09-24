<script setup lang="ts">
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from 'reka-ui'
import { mdiClose } from '@mdi/js'

/**
 * Modal dialog built on Reka UI. It traps focus, closes on Escape and
 * returns focus to the trigger when closed.
 *
 * Open it with the #trigger slot, or control it from outside with v-model:open.
 */
defineProps<{
  title: string
  description?: string
}>()

const open = defineModel<boolean>('open', { default: false })
</script>

<template>
  <DialogRoot v-model:open="open">
    <DialogTrigger v-if="$slots.trigger" as-child>
      <slot name="trigger" />
    </DialogTrigger>
    <DialogPortal>
      <DialogOverlay class="dialog__overlay" />
      <DialogContent class="dialog">
        <DialogTitle class="dialog__title">{{ title }}</DialogTitle>
        <DialogDescription v-if="description" class="dialog__description">{{ description }}</DialogDescription>
        <slot :close="() => (open = false)" />
        <DialogClose class="dialog__close" aria-label="Close">
          <AppIcon :path="mdiClose" :size="22" />
        </DialogClose>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
