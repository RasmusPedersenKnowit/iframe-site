<script setup lang="ts">
const iframe = useTemplateRef('iframe')

onMounted(() => {
  window.addEventListener('message', (event) => {
    console.log('🤖message', event.data)
    if(!iframe.value) return
    iframe.value.style.height = (event.data.windowHeight + 32) + 'px'
  })
})
</script>

<template>
  <div>
    <iframe ref="iframe" src="https://staging.aura.dk/internet-new/waao-internet-umbraco/" frameborder="0" height="100%" width="100%" style="overflow: clip;" />
  </div>
</template>

<style scoped></style>
