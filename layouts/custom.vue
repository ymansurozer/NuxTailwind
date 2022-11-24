<script setup lang="ts">
const isDev = process.dev;

function resetError(error: any) {
  error.value = null;
}
</script>

<template>
  <div class="mx-auto min-h-screen max-w-7xl">
    <Navigation class="p-4" />
    <NuxtErrorBoundary>
      <slot />
      <template #error="{ error }">
        <div class="flex h-screen justify-center pt-8">
          <div class="space-y-4">
            <p class="text-xl font-semibold">{{ $t("errors.other") }}</p>
            <pre v-if="isDev">{{ error }}</pre>
            <button
              class="rounded-lg border px-4 py-1 transition hover:bg-blue-600 hover:text-white focus:bg-blue-700"
              @click.prevent="resetError(error)"
            >
              {{ $t("errors.try-again") }}
            </button>
          </div>
        </div>
      </template>
    </NuxtErrorBoundary>
  </div>
</template>
