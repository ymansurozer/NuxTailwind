export default defineNuxtRouteMiddleware(_ => {
  if (!isUserAuthenticated()) {
    alert("You must be logged in to access this page");

    // We can redirect to login page but we do not have one, so we just abort navigation
    return abortNavigation();
  }
});
