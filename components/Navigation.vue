<script setup lang="ts">
const { t } = useI18n();

const menuItems = ref([
  {
    name: computed(() => t("navigation.home")),
    path: "/",
    active: computed(() => useRoute().path === "/"),
  },
  {
    name: computed(() => t("navigation.about")),
    path: "/about",
    active: computed(() => useRoute().path === "/about"),
  },
  {
    name: "Github ⮥",
    path: "https://github.com/ymansurozer/nuxtailwind",
    active: false,
  },
]);
</script>

<template>
  <div class="flex items-center justify-between">
    <div class="flex items-center space-x-8">
      <NuxtLink
        v-for="menu in menuItems"
        :key="menu.path"
        :to="menu.path"
        class="rounded-md p-2 hover:bg-gray-100 hover:text-gray-900"
        :class="[menu.active ? 'bg-gray-100 text-gray-900' : 'text-gray-600']"
        :target="menu.path.startsWith('http') ? '_blank' : ''"
        >{{ menu.name }}</NuxtLink
      >
    </div>
    <ToggleLanguage class="p-2" />
  </div>
</template>
