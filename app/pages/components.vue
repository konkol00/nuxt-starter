<script setup lang="ts">
useSeoMeta({
  title: 'Components',
  description: 'Form controls, accordion, tabs and dialog examples built with VeeValidate, Zod and Reka UI.',
})

const faq = [
  { title: 'Why Reka UI and not a full UI kit?', content: 'Reka UI is headless: it ships behaviour and accessibility (keyboard support, focus management, ARIA) but no styles. You keep full control of the look with your own SCSS, and you learn how the components actually work.' },
  { title: 'Why VeeValidate and Zod?', content: 'VeeValidate keeps track of values, errors and touched state of every field. Zod describes what valid data looks like. Together they give you typed form data with very little code.' },
  { title: 'Can I use these components in my own project?', content: 'Yes. Copy the files from app/components/form and app/components/ui, install reka-ui, vee-validate, @vee-validate/zod and zod, and add the SCSS partials.' },
  { title: 'Where does the form send the data?', content: 'Nowhere – this demo is a static site. Look at the comment in ContactForm.vue to see where to add a $fetch call to your API or a form service.' },
]

const packageManagers = [
  { label: 'npm', value: 'npm' },
  { label: 'pnpm', value: 'pnpm' },
  { label: 'yarn', value: 'yarn' },
]

const deps = 'reka-ui vee-validate @vee-validate/zod zod'
</script>

<template>
  <div class="components-page">
    <header class="page-header">
      <div class="container">
        <p class="hero__meta">Learning kit</p>
        <h1>Components</h1>
        <p class="page-header__text">
          Form controls and interactive widgets you will need on almost every site.
          Each one is a small, commented Vue file you can read and copy.
        </p>
      </div>
    </header>

    <AppSection anchor="Form" title="Form with validation" subtitle="VeeValidate + Zod" :grid="2">
      <div class="demo__info">
        <p>
          The rules live in a single Zod schema. Every field component calls <code>useField(name)</code>
          and connects itself to the form, so the page only lists the fields.
        </p>
        <ul class="demo__list">
          <li>Errors show after you leave a field, then update as you type.</li>
          <li>Labels, <code>aria-invalid</code> and <code>aria-describedby</code> are wired for screen readers.</li>
          <li>Checkbox, radio and switch use Reka UI for keyboard support.</li>
        </ul>
        <p class="demo__source">
          Source: <code>app/components/ContactForm.vue</code>, <code>app/components/form/</code>
        </p>
      </div>
      <div class="demo__panel">
        <ContactForm />
      </div>
    </AppSection>

    <AppSection anchor="Accordion" title="Accordion" subtitle="Reka UI">
      <UiAccordion :items="faq" />
      <p class="demo__source">Source: <code>app/components/ui/UiAccordion.vue</code></p>
    </AppSection>

    <AppSection anchor="Tabs" title="Tabs" subtitle="Reka UI">
      <UiTabs :tabs="packageManagers" label="Package manager">
        <template #npm><pre class="code">npm install {{ deps }}</pre></template>
        <template #pnpm><pre class="code">pnpm add {{ deps }}</pre></template>
        <template #yarn><pre class="code">yarn add {{ deps }}</pre></template>
      </UiTabs>
      <p class="demo__source">Use the arrow keys to move between tabs. Source: <code>app/components/ui/UiTabs.vue</code></p>
    </AppSection>

    <AppSection anchor="Dialog" title="Dialog" subtitle="Reka UI">
      <div>
        <UiDialog title="Hello from a dialog" description="Focus is trapped inside. Press Escape or click outside to close.">
          <template #trigger>
            <button type="button" class="btn btn-primary">Open dialog</button>
          </template>
          <template #default="{ close }">
            <p class="dialog__text">
              Dialogs are great for confirmations and short forms. Keep longer content on its own page.
            </p>
            <button type="button" class="btn btn-outline" @click="close">Got it</button>
          </template>
        </UiDialog>
        <p class="demo__source">Source: <code>app/components/ui/UiDialog.vue</code></p>
      </div>
    </AppSection>
  </div>
</template>
