<script setup lang="ts">
import { useField } from 'vee-validate'

/**
 * A native <select>. It is accessible and works well on mobile out of the box,
 * so it is usually the right default before reaching for a custom dropdown.
 */
const props = defineProps<{
  name: string
  label: string
  options: { label: string, value: string }[]
  placeholder?: string
  hint?: string
  required?: boolean
}>()

const id = useId()
const { value, errorMessage, handleBlur, handleChange } = useField<string>(() => props.name)
</script>

<template>
  <FormField :id="id" :label="label" :hint="hint" :error="errorMessage" :required="required">
    <div class="select">
      <select
        :id="id"
        :name="name"
        :value="value ?? ''"
        :aria-invalid="!!errorMessage"
        :aria-describedby="errorMessage ? `${id}-error` : hint ? `${id}-hint` : undefined"
        class="input"
        @change="handleChange"
        @blur="handleBlur($event, true)"
      >
        <option value="" disabled>{{ placeholder ?? 'Choose…' }}</option>
        <option v-for="option in options" :key="option.value" :value="option.value">
          {{ option.label }}
        </option>
      </select>
    </div>
  </FormField>
</template>
