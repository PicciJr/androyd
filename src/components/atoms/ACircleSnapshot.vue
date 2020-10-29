<!-- Circulo para desplegar información muy resumida -->
<template>
  <div
    class="flex items-center justify-center w-40 h-40 bg-gray-200 border-none rounded-full shadow-lg"
  >
    <div class="text-xl font-bold text-white">{{ text }}</div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'Información',
    },
  },
}
</script>

<style>

</style>
