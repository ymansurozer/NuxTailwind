<script setup lang="ts">
definePageMeta({
  layout: "custom",
});

const counter = useCounter();
</script>

<template>
  <div class="space-y-4 p-4">
    <!-- Header -->
    <TheHeader />

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
    <div
      class="flex items-start justify-between space-x-12 p-4 shadow-gray-900"
    >
      <div>
        <p>
          {{ $t("home.counter.name") }}:
          <span class="font-semibold">{{ counter.count }}</span>
        </p>
        <p>
          {{ $t("home.counter.double") }}:
          <span class="font-semibold">{{ counter.doubleCount }}</span>
        </p>
        <BaseButton
          type="primary"
          class="pt-2"
          @click.prevent="counter.increment"
        >
          {{ $t("home.counter.increment") }}
        </BaseButton>
      </div>

      <TheToggleLanguage />
      <BaseButton
        type="danger"
        @click.prevent="
          throw createError(
            'This is a test error captured by NuxtErrorBoundary.'
          );
        "
      >
        {{ $t("home.throw-error") }}
      </BaseButton>
    </div>
  </div>
</template>
