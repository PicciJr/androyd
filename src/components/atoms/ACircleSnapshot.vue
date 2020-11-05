<!-- Circulo para desplegar información muy resumida -->
<template>
  <div
    class="flex flex-col items-center justify-center w-40 h-40 text-center bg-gray-200 border-none rounded-full shadow-lg"
  >
    <div class="mb-1 text-xl font-bold text-white">{{ text }}</div>
    <div class="font-medium text-white text-md">{{ secondaryText }}</div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'Información',
    },
    secondaryText: {
      type: String,
      default: 'Información secundaria',
    },
  },
}
</script>

<style>

</style>
