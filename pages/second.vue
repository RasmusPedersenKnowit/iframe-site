<script setup lang="ts">
onMounted(() => {
  window.addEventListener("load", () => {
    window.parent.postMessage(
        { scrollHeight: document.body.scrollHeight },
        "*"
    );
  });

  window.addEventListener("resize", () => {
    window.parent.postMessage(
        { scrollHeight: document.body.scrollHeight },
        "*"
    );
  });
})
</script>

<template>
  <div style="height: 600px; border: 1px orange solid; padding: 1rem">
    <h1>Page: SECOND</h1>
    <NuxtLink to="/">Second page</NuxtLink>
  </div>
</template>

<style scoped></style>
