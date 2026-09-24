<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { z } from 'zod'

// 1. Describe the data and the rules in one place. The same schema can be
//    reused on the server to validate the request body.
const schema = z.object({
  name: z.string({ required_error: 'Please enter your name' }).trim().min(2, 'Name must be at least 2 characters'),
  email: z.string({ required_error: 'Please enter your email' }).trim().email('This does not look like an email address'),
  topic: z.string({ required_error: 'Please choose a topic' }),
  budget: z.enum(['small', 'medium', 'large'], { required_error: 'Please pick a budget' }),
  message: z.string({ required_error: 'Please write a message' }).trim().min(20, 'Tell us a bit more (at least 20 characters)').max(500),
  newsletter: z.boolean(),
  consent: z.boolean().refine(value => value, 'You need to accept this to send the form'),
})

type ContactData = z.infer<typeof schema>

// 2. Create the form. Every <Form*> component inside this component
//    connects to it through its `name` prop.
const { handleSubmit, isSubmitting, resetForm } = useForm({
  validationSchema: toTypedSchema(schema),
  initialValues: { newsletter: false, consent: false },
})

const topics = [
  { label: 'New website', value: 'website' },
  { label: 'Redesign', value: 'redesign' },
  { label: 'Performance audit', value: 'audit' },
  { label: 'Something else', value: 'other' },
]

const budgets = [
  { label: 'Up to 5k PLN', value: 'small' },
  { label: '5–15k PLN', value: 'medium' },
  { label: 'More than 15k PLN', value: 'large' },
]

const sent = ref<ContactData | null>(null)
const dialogOpen = ref(false)

// 3. `handleSubmit` validates everything first and only calls our function
//    with typed, valid data.
const onSubmit = handleSubmit(async (values) => {
  // This site is static (GitHub Pages), so there is no backend here.
  // In a real project send the data somewhere, for example:
  //   await $fetch('/api/contact', { method: 'POST', body: values })
  // or to a form service such as Formspree.
  await new Promise(resolve => setTimeout(resolve, 600))

  sent.value = values
  dialogOpen.value = true
  resetForm()
})
</script>

<template>
  <form class="form" novalidate @submit="onSubmit">
    <div class="form__row">
      <FormInput name="name" label="Name" autocomplete="name" placeholder="Jane Doe" required />
      <FormInput name="email" label="Email" type="email" autocomplete="email" placeholder="jane@example.com" required />
    </div>

    <FormSelect name="topic" label="Topic" :options="topics" placeholder="What is it about?" required />

    <FormRadioGroup name="budget" label="Budget" :options="budgets" required />

    <FormTextarea
      name="message"
      label="Message"
      placeholder="A few words about your project…"
      :maxlength="500"
      required
    />

    <FormSwitch name="newsletter" label="Send me occasional updates" hint="About one email a month. Unsubscribe any time." />

    <FormCheckbox name="consent" label="I agree to be contacted about this request" />

    <div class="form__actions">
      <button type="submit" class="btn btn-primary" :disabled="isSubmitting">
        {{ isSubmitting ? 'Sending…' : 'Send message' }}
      </button>
      <button type="button" class="btn btn-outline" @click="resetForm()">Clear</button>
    </div>

    <UiDialog v-model:open="dialogOpen" title="Thanks, message received" description="Nothing was actually sent – this is a demo. Here is the validated data:">
      <template #default="{ close }">
        <pre class="dialog__code">{{ JSON.stringify(sent, null, 2) }}</pre>
        <button type="button" class="btn btn-primary" @click="close">Close</button>
      </template>
    </UiDialog>
  </form>
</template>
