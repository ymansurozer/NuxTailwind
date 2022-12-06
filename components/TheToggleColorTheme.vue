<script setup lang="ts">
const toggled = ref(false);

watch(toggled, () => {
  toggled.value ? setColorTheme("dark") : setColorTheme("light");
});

onMounted(() => {
  toggled.value = getColorTheme() === "dark";
});
</script>

<template>
  <div class="flex items-center space-x-2 text-sm">
    <span :class="[!toggled ? 'font-semibold ' : 'font-normal ']">{{
      $t("navigation.color-theme.light")
    }}</span>
    <BaseToggle v-model="toggled" />
    <span :class="[toggled ? 'font-semibold' : 'font-normal ']">{{
      $t("navigation.color-theme.dark")
    }}</span>
  </div>
</template>
