<script setup lang="ts">
definePageMeta({
  layout: "custom",
});

const counter = useCounter();
</script>

<template>
  <div class="space-y-4 p-4">
    <!-- Header -->
    <Header />

    <!-- Image -->
    <div class="relative">
      <nuxt-img
        class="max-h-96 min-w-full rounded-3xl object-cover"
        preset="default"
        src="/images/foggy-mountain.jpg"
      />
      <p class="absolute bottom-5 right-5 text-gray-400">
        {{ $t("home.photo-credit") }}
        <a
          class="hover:text-gray-300"
          href="https://unsplash.com/@stefanbc"
          target="_blank"
          >Stefan Cosma</a
        >
      </p>
    </div>

    <!-- Counter -->
    <div class="flex justify-center space-x-12 p-4 shadow-gray-900">
      <p>
        {{ $t("home.counter.name") }}:
        <span class="font-semibold">{{ counter.count }}</span>
      </p>
      <p>
        {{ $t("home.counter.double") }}:
        <span class="font-semibold">{{ counter.doubleCount }}</span>
      </p>
      <button
        class="rounded-xl bg-blue-600 px-3 py-1 text-sm text-white hover:bg-blue-700"
        @click.prevent="counter.increment"
      >
        {{ $t("home.counter.increment") }}
      </button>

      <button
        class="rounded-xl bg-red-600 px-3 py-1 text-sm text-white hover:bg-red-700"
        @click.prevent="throw createError('Test error');"
      >
        {{ $t("home.throw-error") }}
      </button>
    </div>
  </div>
</template>
