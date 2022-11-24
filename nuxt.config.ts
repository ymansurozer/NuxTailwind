// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // TODO: Workaround for
  // https://github.com/nuxt/framework/issues/6623
  alias: {
    pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs",
  },

  app: {
    // https://v3.nuxtjs.org/api/configuration/nuxt-config/#layouttransition
    layoutTransition: true,

    // https://v3.nuxtjs.org/api/configuration/nuxt-config/#pagetransition
    pageTransition: true,
  },

  build: {
    // TODO: Workaround for
    // https://github.com/P4sca1/nuxt-headlessui/issues/13
    // https://github.com/tailwindlabs/headlessui/issues/982
    // https://github.com/nuxt/framework/issues/4084
    transpile: ["@headlessui/vue"],
  },

  experimental: {
    // https://vuejs.org/guide/extras/reactivity-transform.html
    reactivityTransform: true,
  },

  googleFonts: {
    families: {
      Inter: [400, 600],
    },
    subsets: "latin-ext",
  },

  // We use webp for optimization purposes
  image: {
    presets: {
      default: {
        modifiers: {
          format: "webp",
        },
      },
    },
  },

  i18n: {
    strategy: "no_prefix",
    locales: [
      {
        code: "en",
        file: "en.json",
      },
      {
        code: "tr",
        file: "tr.json",
      },
    ],
    lazy: true,
    langDir: "lang",
    defaultLocale: "en",
    vueI18n: {
      legacy: false,
      fallbackLocale: "en",
    },
  },

  imports: {
    dirs: ["stores"],
  },

  modules: [
    // https://github.com/vueuse/vueuse/tree/main/packages/nuxt
    "@vueuse/nuxt",

    // https://github.com/nuxt-modules/tailwindcss
    "@nuxtjs/tailwindcss",

    // https://pinia.vuejs.org/ssr/nuxt.html
    [
      "@pinia/nuxt",
      {
        // TODO: This option seems to be deprecated but still works
        // https://github.com/nuxt/framework/pull/9029
        autoImports: ["defineStore", "acceptHMRUpdate"],
      },
    ],

    // https://github.com/nuxt-modules/critters
    "@nuxtjs/critters",

    // https://github.com/nuxt-modules/fontaine
    "@nuxtjs/fontaine",

    // https://github.com/nuxt-community/google-fonts-module
    "@nuxtjs/google-fonts",

    // https://github.com/nuxt/image
    // Remember to put images in /public (not /assets), whitelist domains when using external urls as source, and use <nuxt-img>
    "@nuxt/image-edge",

    // https://github.com/P4sca1/nuxt-headlessui
    "nuxt-headlessui",

    // https://github.com/nuxt-community/i18n-module
    "@nuxtjs/i18n-edge",

    // https://github.com/kevinmarrec/nuxt-pwa-module
    // We use this until the official PWA module for Nuxt 3 is out
    "@kevinmarrec/nuxt-pwa",
  ],

  pwa: {
    meta: {
      name: "NuxTailwind: Nuxt 3 + Tailwind SaaS Template",
      author: "Yusuf Mansur Özer",
      description:
        "A minimalistic template for building SaaS applications using Nuxt 3, Tailwind, and others.",
      theme_color: "#2563eb",
      lang: "en",
    },
    manifest: {
      name: "NuxTailwind: Nuxt 3 + Tailwind SaaS Template",
      short_name: "NuxTailwind",
      description:
        "A minimalistic template for building SaaS applications using Nuxt 3, Tailwind, and others.",
      theme_color: "#2563eb",
      lang: "en",
    },
  },

  // https://v3.nuxtjs.org/getting-started/configuration#environment-variables-and-private-tokens
  runtimeConfig: {
    // Remember that these are exposed client-side
    public: {
      apiBase: "/api",
    },
  },

  // We enable "Volar Take Over Mode" so we can disable the shim `*.vue` generation
  // https://v3.nuxtjs.org/getting-started/installation#prerequisites
  typescript: {
    strict: true,
    shim: false,
    typeCheck: "build",
  },
});
