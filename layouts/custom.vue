<script setup lang="ts">
const isDev = process.dev;

function resetError(error: any) {
  error.value = null;
}
</script>

<template>
  <div class="mx-auto min-h-screen max-w-7xl">
    <TheNavigation class="p-4" />
    <NuxtErrorBoundary>
      <slot />
      <template #error="{ error }">
        <div class="flex h-screen justify-center pt-8">
          <div class="space-y-4">
            <p class="text-xl font-semibold">{{ $t("errors.other") }}</p>
            <pre v-if="isDev">{{ error }}</pre>
            <BaseButton type="primary" @click.prevent="resetError(error)">
              {{ $t("errors.try-again") }}
            </BaseButton>
          </div>
        </div>
      </template>
    </NuxtErrorBoundary>
  </div>
</template>
