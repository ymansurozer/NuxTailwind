// We gather all the auth related functions here so that it is easy to change
// the auth provider in the future

const { auth } = useSupabaseAuthClient();

async function signIn() {
  const { error } = await auth.signInWithOAuth({ provider: "github" });

  if (error) throw createError(error);
}

async function signOut() {
  const { error } = await auth.signOut();

  if (error) throw createError(error);
}

function getUser() {
  return useSupabaseUser();
}

function isUserAuthenticated() {
  return Boolean(getUser().value);
}

export { getUser, isUserAuthenticated, signIn, signOut };
