<script setup lang="ts">
interface Props {
  modelValue: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
});

const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <HeadlessSwitch
    class="relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out"
    :class="props.modelValue ? 'bg-blue-700' : 'bg-blue-600'"
    :model-value="props.modelValue"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <span
      :class="props.modelValue ? 'translate-x-5' : 'translate-x-0'"
      class="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
    />
  </HeadlessSwitch>
</template>
