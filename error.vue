<script setup lang="ts">
// This component handles fatal errors
// https://nuxt.com/docs/getting-started/error-handling#rendering-an-error-page

const props = defineProps<{
  error: any;
}>();

const message = $computed(() => String(props.error?.message || ""));
const is404 = $computed(
  () => props.error?.statusCode === 404 || message?.includes("404")
);

const isDev = process.dev;
const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <NuxtLayout>
    <div class="flex min-h-screen items-center justify-center text-center">
      <div class="space-y-4">
        <p class="text-3xl font-semibold">
          {{ is404 ? $t("errors.404") : $t("errors.other") }}
        </p>
        <p class="text-xl text-gray-500">
          {{ $t("errors.description") }}
        </p>
        <pre v-if="isDev">{{ error }}</pre>
        <BaseButton type="primary" @click="handleError">
          {{ $t("errors.go-back") }}
        </BaseButton>
      </div>
    </div>
  </NuxtLayout>
</template>
