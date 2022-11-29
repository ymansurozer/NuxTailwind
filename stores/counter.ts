// https://pinia.vuejs.org/cookbook/composables.html#setup-stores
// Reactivity transform causes issues in dev tools and actions, so we do not use that here
export const useCounter = defineStore("counter", () => {
  // State
  const count = ref(0);

  // Getters
  const doubleCount = computed(() => count.value * 2);

  // Actions
  function increment() {
    count.value++;
  }

  return { count, doubleCount, increment };
});

// https://pinia.vuejs.org/cookbook/hot-module-replacement.html
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCounter, import.meta.hot));
}
