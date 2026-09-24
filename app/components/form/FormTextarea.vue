<script setup lang="ts">
import { useField } from 'vee-validate'

const props = withDefaults(defineProps<{
  name: string
  label: string
  placeholder?: string
  hint?: string
  required?: boolean
  rows?: number
  maxlength?: number
}>(), { rows: 5 })

const id = useId()
const { value, errorMessage, handleBlur, handleChange } = useField<string>(() => props.name, undefined, {
  validateOnValueUpdate: false,
})
</script>

<template>
  <FormField :id="id" :label="label" :hint="hint" :error="errorMessage" :required="required">
    <textarea
      :id="id"
      :name="name"
      :rows="rows"
      :value="value"
      :placeholder="placeholder"
      :maxlength="maxlength"
      :aria-invalid="!!errorMessage"
      :aria-describedby="errorMessage ? `${id}-error` : hint ? `${id}-hint` : undefined"
      class="input input--textarea"
      @input="handleChange($event, !!errorMessage)"
      @blur="handleBlur($event, true)"
    />
    <template v-if="maxlength" #aside>
      <span class="field__counter" aria-live="polite">{{ value?.length ?? 0 }} / {{ maxlength }}</span>
    </template>
  </FormField>
</template>
