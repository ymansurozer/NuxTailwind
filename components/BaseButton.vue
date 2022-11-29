<script setup lang="ts">
defineProps<{
  type: "primary" | "gray" | "danger";
}>();
</script>

<template>
  <div>
    <button
      class="rounded-lg px-3 py-1 text-sm"
      :class="{
        'bg-blue-600 text-white hover:bg-blue-700': type === 'primary',
        ' bg-gray-700 text-white hover:bg-gray-800': type === 'gray',
        'bg-red-600 text-white hover:bg-red-700': type === 'danger',
      }"
    >
      <slot />
    </button>
  </div>
</template>
