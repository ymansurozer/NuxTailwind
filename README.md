# NuxTailwind: Nuxt 3 + Tailwind SaaS Template

A minimalistic template for building SaaS applications using Nuxt 3, Tailwind, and others. Demonstrates most features of Nuxt and essential packages with basic implementations.

<p align='center'>
<a href="https://nuxtailwind-template.vercel.app/">Live Demo</a>
</p>

## Features

- ⚡️ [Nuxt 3 (stable)](https://github.com/nuxt/framework), [Vue 3](https://github.com/vuejs/core), and [Vite 3](https://github.com/vitejs/vite)
- 🔥 Optimized with [Universal Rendering](https://nuxt.com/docs/guide/concepts/rendering#universal-rendering), [Critters](https://github.com/nuxt-modules/critters), [Fontaine](https://github.com/nuxt-modules/fontaine), and [Nuxt Image](https://github.com/nuxt/image)
- 🍍 [State management via Pinia](https://pinia.vuejs.org/)
- 🔑 Basic authentication with [Supabase](https://supabase.com/) + [Nuxt Supabase](https://github.com/nuxt-modules/supabase)
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
- ☁️ Deploy on Vercel, zero-config

## To do

- [ ] Dark mode
- [ ] Testing
- [ ] Fix issues with font metrics
- [ ] Fix workaround for Pinia at `nuxt.config.ts:5-7`. See https://github.com/nuxt/framework/issues/6623.
- [ ] Fix workaround for Headless UI at `nuxt.config.ts:22`. See https://github.com/P4sca1/nuxt-headlessui/issues/13, https://github.com/tailwindlabs/headlessui/issues/982, and https://github.com/nuxt/framework/issues/4084.
- [ ] Fix HMR issues. See https://github.com/nuxt/framework/issues/1036 and https://github.com/nuxt/framework/issues/1529. For now, access your site with IP/network instead of `localhost`. 

## FAQ

### How to set up auth configurations?
For GitHub and Supabase configuration, see instructions [here](https://github.com/nuxt-modules/supabase/tree/main/demo). Note that Supabase relies on email for its auth service, so your GitHub OAuth app should have access to user email. See https://github.com/supabase/gotrue/issues/214.

### Why not use pnpm?

Because pnpm somehow conflicts with [Tailwind Prettier plugin](https://github.com/tailwindlabs/prettier-plugin-tailwindcss) and I like auto-sorted classes a lot. Issue is probably because how pnpm organizes modules but using shamefully hoist option did not work.

### Why not use Netlify?

Because Nuxt Image module and Netlify has some issues with each other and local images give 404 error when deployed on Netlify (see [#1](https://github.com/nuxt/image/issues/638) and [#2](https://answers.netlify.com/t/nuxt-image-doesnt-show-up-after-deploy/46480/7)). This issue does not happen on Vercel. 

### Why create this template?

Mainly for three reasons: 
1. To have a starter template ready-to-use with Tailwind CSS + Headless UI + authentication (along with related plugins and configurations) and optimized for building SaaS apps. 
2. To practice and better understand how Nuxt 3 works and how it can be extended with modules and configurations.
3. To note best-practices for myself so that I would remember to use them when I start a new project.

Inspired by [Movies](https://github.com/nuxt/movies), [Vitesse for Nuxt 3](https://github.com/antfu/vitesse-nuxt3), and [Sidebase](https://github.com/sidebase/sidebase).
