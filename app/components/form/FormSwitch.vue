<script setup lang="ts">
import { SwitchRoot, SwitchThumb } from 'reka-ui'
import { useField } from 'vee-validate'

/**
 * On/off switch built on Reka UI. Use it for settings that apply
 * immediately; use a checkbox for things that are confirmed on submit.
 */
const props = defineProps<{
  name: string
  label: string
  hint?: string
}>()

const id = useId()
const { value, handleChange } = useField<boolean>(() => props.name, undefined, {
  initialValue: false,
})
</script>

<template>
  <div class="field">
    <div class="choice">
      <SwitchRoot
        :id="id"
        :model-value="value"
        :aria-describedby="hint ? `${id}-hint` : undefined"
        class="switch"
        @update:model-value="handleChange"
      >
        <SwitchThumb class="switch__thumb" />
      </SwitchRoot>
      <label :for="id" class="choice__label">{{ label }}</label>
    </div>
    <p v-if="hint" :id="`${id}-hint`" class="field__hint">{{ hint }}</p>
  </div>
</template>
