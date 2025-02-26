<script setup lang="ts">
onMounted(() => {
  window.addEventListener("load", () => {
    console.log('🤖', "resize")
    window.parent.postMessage(
        { scrollHeight: document.body.scrollHeight + 'px' },
        "*"
    );
  });

  window.addEventListener("load", () => {
    console.log('🤖', "loaded")
    window.parent.postMessage(
        { scrollHeight: document.documentElement.scrollHeight + 'px' },
        "*"
    );
  });

  window.addEventListener("resize", () => {
    console.log('🤖', "resize")
    window.parent.postMessage(
        { scrollHeight: document.body.scrollHeight + 'px' },
        "*"
    );
  });

  addEventListener("DOMContentLoaded", () => {
    console.log('DomContentLoaded', event);
    window.parent.postMessage(
        { scrollHeight: document.body.scrollHeight + 'px' },
        "*"
    );
  });
})
</script>

<template>
  <div style="height: 600px; border: 1px orange solid; padding: 1rem">
    <h1>Page: SECOND</h1>
    <a href="/">Second page</a>
  </div>
</template>

<style scoped></style>
