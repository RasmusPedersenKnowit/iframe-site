<script setup lang="ts">
onMounted(() => {
  window.addEventListener('message', (event) => {
    console.log('🤖message', event.data)
    console.log(event.origin)
  })
})
</script>

<template>
  <div>
    <iframe ref="iframe" src="https://iframe.rsmsp.dk/__iframe.html" frameborder="0" height="100%" width="100%" />
  </div>
</template>

<style scoped></style>
