<script setup lang="ts">
/**
 * Shared wrapper for every form control: label, control, and one message line.
 *
 * The message line is always rendered and has a fixed minimum height, so when
 * an error appears it fills space that is already there instead of pushing
 * the rest of the form down.
 */
defineProps<{
  id: string
  label?: string
  hint?: string
  error?: string
  required?: boolean
  /** Render the label as a <legend> (for groups such as radio buttons). */
  group?: boolean
}>()
</script>

<template>
  <component :is="group ? 'fieldset' : 'div'" class="field" :class="{ 'field--invalid': error, 'fieldset': group }">
    <component :is="group ? 'legend' : 'label'" v-if="label" :for="group ? undefined : id" class="field__label">
      {{ label }}
      <span v-if="required" class="field__required" aria-hidden="true">*</span>
    </component>

    <slot />

    <div class="field__message">
      <Transition name="field-message" mode="out-in">
        <p v-if="error" :id="`${id}-error`" :key="error" class="field__error" role="alert">{{ error }}</p>
        <p v-else-if="hint" :id="`${id}-hint`" class="field__hint">{{ hint }}</p>
      </Transition>
      <!-- extra info on the right, e.g. a character counter -->
      <slot name="aside" />
    </div>
  </component>
</template>
