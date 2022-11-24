<script setup lang="ts">
definePageMeta({
  layout: "custom",
});
</script>

<template>
  <div class="space-y-8 p-4">
    <Header />
    <div class="text-center">
      <a
        href="https://github.com/ymansurozer/nuxtailwind"
        class="rounded-lg border-2 px-4 py-1 transition hover:bg-blue-600 hover:text-white focus:bg-blue-700"
        target="_blank"
      >
        {{ $t("about.readme") }}
      </a>
    </div>
  </div>
</template>
