<script setup lang="ts">
import { CheckboxIndicator, CheckboxRoot } from 'reka-ui'
import { useField } from 'vee-validate'
import { mdiCheck } from '@mdi/js'

/**
 * Checkbox built on Reka UI. Reka handles keyboard support and ARIA state,
 * we only provide the markup and the styles.
 */
const props = defineProps<{
  name: string
  label: string
}>()

const id = useId()
const { value, errorMessage, handleChange } = useField<boolean>(() => props.name, undefined, {
  initialValue: false,
})
</script>

<template>
  <div class="field" :class="{ 'field--invalid': errorMessage }">
    <div class="choice">
      <CheckboxRoot
        :id="id"
        :model-value="value"
        :aria-invalid="!!errorMessage"
        :aria-describedby="errorMessage ? `${id}-error` : undefined"
        class="checkbox"
        @update:model-value="handleChange"
      >
        <CheckboxIndicator class="checkbox__indicator">
          <AppIcon :path="mdiCheck" :size="16" />
        </CheckboxIndicator>
      </CheckboxRoot>
      <label :for="id" class="choice__label"><slot>{{ label }}</slot></label>
    </div>
    <p v-if="errorMessage" :id="`${id}-error`" class="field__error" role="alert">{{ errorMessage }}</p>
  </div>
</template>
