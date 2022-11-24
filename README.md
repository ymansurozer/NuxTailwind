# NuxTailwind: Nuxt 3 + Tailwind SaaS Template

A minimalistic template for building SaaS applications using Nuxt 3, Tailwind, and others. Demonstrates most features of Nuxt and essential packages with basic implementations.

<p align='center'>
<a href="https://nuxtailwind.netlify.app/">Live Demo</a>
</p>

## Features

- ⚡️ [Nuxt 3 (stable)](https://github.com/nuxt/framework), [Vue 3](https://github.com/vuejs/core), and [Vite 3](https://github.com/vitejs/vite)
- 🔥 Optimized with [Universal Rendering](https://nuxt.com/docs/guide/concepts/rendering#universal-rendering), [Critters](https://github.com/nuxt-modules/critters), [font metrics](https://github.com/nuxt-modules/fontaine), and [image optimization](https://github.com/nuxt/image)
- 🍍 [State management via Pinia](https://pinia.vuejs.org/)
- 🗒 [Google Fonts](https://fonts.google.com/)
- 🧩 [VueUse](https://github.com/vueuse/vueuse) for essential Vue composition utilities
- 📲 [PWA](https://github.com/kevinmarrec/nuxt-pwa-module)
- 🎨 [Tailwind CSS](https://tailwindcss.com/) and [Headless UI](https://headlessui.com/)
- 📦 Auto-imports for Vue and Nuxt APIs, components, composables, and stores, thanks to Nuxt
- 📑 Layouts and file-based routing, thanks to Nuxt
- 🖌 [Prettier](https://github.com/prettier/prettier) as code formatter and [Tailwind Prettier plugin](https://github.com/tailwindlabs/prettier-plugin-tailwindcss) for auto-sorting Tailwind utility classes
- 📐 [ESLint](https://github.com/eslint/eslint) ready for Vue with [Anthony Fu's config](https://github.com/antfu/eslint-config) and [Prettier taking precedence on formatting](https://github.com/prettier/eslint-config-prettier)
- 🌍 [I18n](https://github.com/intlify/vue-i18n-next) for localization
- 🤙🏻 [Reactivity transform](https://vuejs.org/guide/extras/reactivity-transform.html) enabled
- 🦾 [TypeScript](https://www.typescriptlang.org/), of course
- 🥦 [Taze](https://github.com/antfu/taze) to keep dependencies fresh
- ☁️ Deploy on Netlify, zero-config

## To do

- [ ] Basic authentication
- [ ] Fix lazy loading issue in I18n

## FAQ

### Why are you not using PNPM?

Because it somehow conflicts with [Tailwind Prettier plugin](https://github.com/tailwindlabs/prettier-plugin-tailwindcss) and I like auto-sorted classes a lot. Issue is probably because how PNPM organizes modules but using shamefully hoist option did not work.

### Why create this template?

This template is inspired by [Movies](https://github.com/nuxt/movies), [Vitesse](https://github.com/antfu/vitesse), and [Sidebase](https://github.com/sidebase/sidebase). But, for my SaaS projects, I needed an starter template ready-to-use with Tailwind CSS + Headless UI (along with related plugins and configurations), optimized for building SaaS apps. And most importantly, I had to build this template from the ground up to understand how Nuxt 3 works and how it can be extended with modules and configurations.
