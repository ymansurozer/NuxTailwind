<script setup lang="ts">
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
        <div class="text-3xl font-semibold">
          {{ is404 ? "This page could not be found" : "An error occurred" }}
        </div>
        <div class="text-xl text-gray-500">
          Looks like you've followed a broken link or entered a URL that doesn't
          exist on this site.
        </div>
        <pre v-if="isDev">{{ error }}</pre>
        <button
          class="rounded-lg border px-4 py-1 transition hover:bg-blue-600 hover:text-white focus:bg-blue-700"
          @click="handleError"
        >
          Go Back
        </button>
      </div>
    </div>
  </NuxtLayout>
</template>
