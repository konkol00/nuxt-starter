<script setup lang="ts">
import { RadioGroupIndicator, RadioGroupItem, RadioGroupRoot } from 'reka-ui'
import { useField } from 'vee-validate'

/**
 * Radio group built on Reka UI. Arrow keys move between options,
 * exactly like native radios.
 */
const props = defineProps<{
  name: string
  label: string
  options: { label: string, value: string }[]
  required?: boolean
}>()

const id = useId()
const { value, errorMessage, handleChange } = useField<string>(() => props.name)
</script>

<template>
  <fieldset class="field fieldset" :class="{ 'field--invalid': errorMessage }">
    <legend class="field__label">
      {{ label }}
      <span v-if="required" class="field__required" aria-hidden="true">*</span>
    </legend>
    <RadioGroupRoot
      :model-value="value"
      :aria-describedby="errorMessage ? `${id}-error` : undefined"
      class="radio-group"
      @update:model-value="handleChange"
    >
      <div v-for="option in options" :key="option.value" class="choice">
        <RadioGroupItem :id="`${id}-${option.value}`" :value="option.value" class="radio">
          <RadioGroupIndicator class="radio__indicator" />
        </RadioGroupItem>
        <label :for="`${id}-${option.value}`" class="choice__label">{{ option.label }}</label>
      </div>
    </RadioGroupRoot>
    <p v-if="errorMessage" :id="`${id}-error`" class="field__error" role="alert">{{ errorMessage }}</p>
  </fieldset>
</template>
