# Nuxt-Starter

Nuxt-Starter is great for kicking off your landing page project quickly. It's a free template with simple SCSS code, perfect for various purposes like SaaS, startups, and marketing sites. Plus, it's beginner-friendly! Even if you're new to Nuxt.js, this template helps you learn how Nuxt works and looks, making it easy to get started with Nuxt.js development.

## Live Demo

**[View The Static Demo Site](https://konkol00.github.io/nuxt-starter/)**

## Built with Nuxt 4

No UI framework — just SCSS with CSS custom properties (automatic light/dark mode), `@nuxt/image` and `@nuxtjs/sitemap`. Icons come straight from `@mdi/js` via a tiny `AppIcon` component, so only the icons you import end up in the bundle.

Project structure (Nuxt 4 conventions):

```
app/          # components, layouts, pages, assets
public/       # static files (fonts, images, favicon)
```

Requires Node.js 20.19+.

## Components for learning

The [`/components`](https://konkol00.github.io/nuxt-starter/components) page shows reusable building blocks, each in a small, commented file:

| Component | Built with | File |
| --- | --- | --- |
| Contact form with validation | [VeeValidate](https://vee-validate.logaretm.com/) + [Zod](https://zod.dev/) | `app/components/ContactForm.vue` |
| Input, Textarea, Select | VeeValidate `useField` | `app/components/form/` |
| Checkbox, Radio group, Switch | [Reka UI](https://reka-ui.com/) + VeeValidate | `app/components/form/` |
| Accordion, Tabs, Dialog | Reka UI | `app/components/ui/` |

Reka UI is a *headless* library: it takes care of keyboard support, focus and ARIA attributes, while all styles live in the project's SCSS (`app/assets/scss/components/_forms.scss`, `_ui.scss`).

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

npm
```bash
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

npm
```bash
npm run dev
```

## Production

Build the application for production:

npm
```bash
npm run build
```

Locally preview production build:

npm
```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
