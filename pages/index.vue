<script setup lang="ts">
const iframe = ref(null)
const adjustHeight = () => {
  console.log('iframe', iframe.value)
  console.log('contentWindow', iframe.value.contentWindow.document.body.scrollHeight)
  console.log('TEST')

  if(iframe.value) {
    iframe.value.style.height = (iframe.value.contentWindow.document.body.scrollHeight + 256) + 'px';
  }
}
</script>

<template>
  <div>
    <iframe ref="iframe" src="https://iframe.rsmsp.dk/iframe" @load="adjustHeight" frameborder="0" height="100%" width="100%" />
  </div>
</template>

<style scoped></style>
