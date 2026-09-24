<script setup lang="ts">
import {
  SelectContent,
  SelectIcon,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectPortal,
  SelectRoot,
  SelectTrigger,
  SelectValue,
  SelectViewport,
} from 'reka-ui'
import { useField } from 'vee-validate'
import { mdiCheck, mdiChevronDown } from '@mdi/js'

/**
 * Custom dropdown built on Reka UI's Select.
 * Reka gives us keyboard navigation (arrows, Home/End, type-ahead),
 * focus management and ARIA roles – we only write the markup and styles.
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
const { value, errorMessage, handleBlur, handleChange } = useField<string | undefined>(() => props.name)

// closing the dropdown counts as "leaving the field"
function onOpenChange(open: boolean) {
  if (!open) handleBlur(undefined, true)
}
</script>

<template>
  <FormField :id="id" :label="label" :hint="hint" :error="errorMessage" :required="required">
    <SelectRoot :model-value="value" :name="name" @update:model-value="handleChange" @update:open="onOpenChange">
      <SelectTrigger
        :id="id"
        class="input select__trigger"
        :aria-invalid="!!errorMessage"
        :aria-describedby="errorMessage ? `${id}-error` : hint ? `${id}-hint` : undefined"
      >
        <SelectValue :placeholder="placeholder ?? 'Choose…'" class="select__value" />
        <SelectIcon class="select__icon">
          <AppIcon :path="mdiChevronDown" :size="20" />
        </SelectIcon>
      </SelectTrigger>

      <SelectPortal>
        <SelectContent position="popper" :side-offset="6" class="select__content">
          <SelectViewport class="select__viewport">
            <SelectItem v-for="option in options" :key="option.value" :value="option.value" class="select__item">
              <SelectItemText>{{ option.label }}</SelectItemText>
              <SelectItemIndicator class="select__check">
                <AppIcon :path="mdiCheck" :size="18" />
              </SelectItemIndicator>
            </SelectItem>
          </SelectViewport>
        </SelectContent>
      </SelectPortal>
    </SelectRoot>
  </FormField>
</template>
