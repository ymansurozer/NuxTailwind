<script setup lang="ts">
const { locale, setLocale } = useI18n();
const toggled = ref(false);

watch(toggled, () => {
  toggled.value ? setLocale("tr") : setLocale("en");
});

onMounted(() => {
  toggled.value = locale.value === "tr";
});
</script>

<template>
  <div class="flex items-center space-x-2 text-sm">
    <span :class="[!toggled ? 'font-semibold' : 'font-normal']">{{
      $t("languages.english")
    }}</span>
    <BaseToggle v-model="toggled" />
    <span :class="[toggled ? 'font-semibold ' : 'font-normal']">{{
      $t("languages.turkish")
    }}</span>
  </div>
</template>
