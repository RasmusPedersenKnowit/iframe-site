<script setup lang="ts">
const iframe = useTemplateRef('iframe')

onMounted(() => {
  window.addEventListener('message', (event) => {
    console.log('🤖message', event.data)
    if(!iframe.value) return
    iframe.value.style.height = (event.data.windowHeight ) + 'px'
  })
})
</script>

<template>
  <div>
    <iframe ref="iframe" src="https://iframe.rsmsp.dk/iframe" frameborder="0" height="100%" width="100%" />
  </div>
</template>

<style scoped></style>
