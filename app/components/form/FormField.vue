<script setup lang="ts">
/**
 * Shared wrapper for every form control: label, hint and error message.
 * The control itself goes into the default slot and receives the ids it
 * needs for accessibility (aria-describedby / aria-invalid).
 */
defineProps<{
  id: string
  label: string
  hint?: string
  error?: string
  required?: boolean
}>()
</script>

<template>
  <div class="field" :class="{ 'field--invalid': error }">
    <label :for="id" class="field__label">
      {{ label }}
      <span v-if="required" class="field__required" aria-hidden="true">*</span>
    </label>
    <slot />
    <p v-if="error" :id="`${id}-error`" class="field__error" role="alert">{{ error }}</p>
    <p v-else-if="hint" :id="`${id}-hint`" class="field__hint">{{ hint }}</p>
  </div>
</template>
