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
  hint?: string
  required?: boolean
}>()

const id = useId()
const { value, errorMessage, handleChange } = useField<string>(() => props.name)
</script>

<template>
  <FormField :id="id" :label="label" :hint="hint" :error="errorMessage" :required="required" group>
    <RadioGroupRoot
      :model-value="value"
      :aria-describedby="errorMessage ? `${id}-error` : hint ? `${id}-hint` : undefined"
      class="radio-group"
      @update:model-value="handleChange"
    >
      <div v-for="option in options" :key="option.value" class="choice">
        <RadioGroupItem
          :id="`${id}-${option.value}`"
          :value="option.value"
          :aria-invalid="!!errorMessage"
          class="radio"
        >
          <RadioGroupIndicator class="radio__indicator" />
        </RadioGroupItem>
        <label :for="`${id}-${option.value}`" class="choice__label">{{ option.label }}</label>
      </div>
    </RadioGroupRoot>
  </FormField>
</template>
