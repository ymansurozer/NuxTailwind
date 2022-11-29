export const useAuth = defineStore("auth", () => {
  const { auth } = useSupabaseAuthClient();

  // State
  const user = useSupabaseUser();

  // Getters
  const isAuthenticated = computed(() => Boolean(user.value));

  // Actions
  async function logIn() {
    const { error } = await auth.signInWithOAuth({ provider: "github" });

    if (error) throw createError(error);
  }

  async function logOut() {
    const { error } = await auth.signOut();

    if (error) throw createError(error);
  }

  // We don't need signUp becaue we use federated login via GitHub
  return { user, isAuthenticated, logIn, logOut };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuth, import.meta.hot));
}
