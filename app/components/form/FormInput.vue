<script setup lang="ts">
import { useField } from 'vee-validate'

/**
 * Text input connected to the parent form by `name`.
 * Usage: <FormInput name="email" label="Email" type="email" />
 */
const props = withDefaults(defineProps<{
  name: string
  label: string
  type?: 'text' | 'email' | 'tel' | 'url' | 'password' | 'number'
  placeholder?: string
  hint?: string
  required?: boolean
  autocomplete?: string
}>(), { type: 'text' })

const id = useId()

// `useField` registers this input in the closest `useForm()` and gives us its
// value, error and event handlers. Validation runs on blur first, and on every
// keystroke once an error is visible ("lazy, then eager").
const { value, errorMessage, handleBlur, handleChange } = useField<string>(() => props.name, undefined, {
  validateOnValueUpdate: false,
})
</script>

<template>
  <FormField :id="id" :label="label" :hint="hint" :error="errorMessage" :required="required">
    <input
      :id="id"
      :name="name"
      :type="type"
      :value="value"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      :aria-invalid="!!errorMessage"
      :aria-describedby="errorMessage ? `${id}-error` : hint ? `${id}-hint` : undefined"
      class="input"
      @input="handleChange($event, !!errorMessage)"
      @blur="handleBlur($event, true)"
    >
  </FormField>
</template>
