<script setup lang="ts">
import { debounce } from 'lodash-es'
import { useField } from 'vee-validate'

/**
 * Text input connected to the parent form by `name`.
 * Usage: <FormInput name="email" label="Email" type="email" :debounce="500" />
 */
const props = withDefaults(defineProps<{
  name: string
  label: string
  type?: 'text' | 'email' | 'tel' | 'url' | 'password' | 'number'
  placeholder?: string
  hint?: string
  required?: boolean
  autocomplete?: string
  /**
   * Validate while typing, but only after the user pauses for this many ms.
   * Without it the field validates on blur (and live once an error is shown).
   */
  debounce?: number
}>(), { type: 'text' })

const id = useId()

// `useField` registers this input in the closest `useForm()` and gives us its
// value, error, validation state and event handlers.
const { value, errorMessage, meta, handleBlur, handleChange, validate } = useField<string>(() => props.name, undefined, {
  validateOnValueUpdate: false,
})

// debounce() returns a new function that waits until it has not been called
// for `wait` ms and only then runs. Typing "hello" quickly = 1 validation, not 5.
const debouncedValidate = debounce(() => validate(), props.debounce ?? 0)

function onInput(event: Event) {
  if (props.debounce) {
    handleChange(event, false) // update the value now, validate later
    debouncedValidate()
  }
  else {
    handleChange(event, !!errorMessage.value)
  }
}

function onBlur(event: Event) {
  debouncedValidate.cancel() // leaving the field validates right away
  handleBlur(event, true)
}

// a pending timer must not fire after the component is gone
onBeforeUnmount(() => debouncedValidate.cancel())

// green border once a debounced field has been checked and is valid
const isValid = computed(() => !!props.debounce && meta.validated && meta.valid && !!value.value)

const describedBy = computed(() => errorMessage.value ? `${id}-error` : props.hint ? `${id}-hint` : undefined)
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
      :aria-describedby="describedBy"
      class="input"
      :class="{ 'input--valid': isValid }"
      @input="onInput"
      @blur="onBlur"
    >
  </FormField>
</template>
