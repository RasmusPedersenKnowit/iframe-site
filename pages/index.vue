<script setup lang="ts">
onMounted(() => {
  window.addEventListener("load", () => {
    window.parent.postMessage(
        { scrollHeight: document.body.scrollHeight + 'px' },
        "*"
    );
  });

  window.addEventListener("resize", () => {
    window.parent.postMessage(
        { scrollHeight: document.body.scrollHeight + 'px' },
        "*"
    );
  });
})
</script>

<template>
  <div style="height: 800px; border: 1px orange solid; padding: 1rem">
    <h1>Page: index</h1>
    <NuxtLink to="/second">Second page</NuxtLink>
  </div>
</template>

<style scoped></style>
