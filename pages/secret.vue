<script setup lang="ts">
definePageMeta({
  layout: "custom",
  middleware: ["auth"],
});

const auth = useAuth();

// If user logs out, we redirect to home page
watchEffect(() => {
  if (!auth.isAuthenticated) {
    navigateTo("/");
  }
});
</script>

<template>
  <div class="flex justify-center p-4">
    <p>
      This is a super secret page that requires authentication to access it.
    </p>
  </div>
</template>
