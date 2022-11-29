<script setup lang="ts">
const { t } = useI18n();
const route = useRoute();
const auth = useAuth();

const menuItems = ref([
  {
    name: computed(() => t("navigation.home")),
    path: "/",
    active: computed(() => route.path === "/"),
  },
  {
    name: computed(() => t("navigation.about")),
    path: "/about",
    active: computed(() => route.path === "/about"),
  },
  {
    name: computed(() => t("navigation.restricted").concat(" ⛔")),
    path: "/secret",
    active: computed(() => route.path === "/secret"),
  },
  {
    name: "Github ⮥",
    path: "https://github.com/ymansurozer/nuxtailwind",
    active: false,
  },
]);

async function handleLogIn() {
  await auth.logIn();
}

async function handleLogOut() {
  await auth.logOut();
}
</script>

<template>
  <div class="flex items-center justify-between">
    <div class="flex items-center space-x-8">
      <NuxtLink
        v-for="menu in menuItems"
        :key="menu.path"
        :to="menu.path"
        class="rounded-lg p-2 hover:bg-gray-100 hover:text-gray-900"
        :class="[menu.active ? 'bg-gray-100 text-gray-900' : 'text-gray-600']"
        :target="menu.path.startsWith('http') ? '_blank' : ''"
        >{{ menu.name }}</NuxtLink
      >
    </div>

    <BaseButton
      v-if="!auth.isAuthenticated"
      type="gray"
      @click.prevent="handleLogIn()"
      >{{ $t("navigation.login") }}</BaseButton
    >
    <div v-else class="flex items-center space-x-2">
      <span class="text-gray-600">{{ auth.user?.email }}</span>
      <BaseButton type="gray" @click.prevent="handleLogOut()">{{
        $t("navigation.logout")
      }}</BaseButton>
    </div>
  </div>
</template>
