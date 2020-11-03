<!-- Simboliza un principio a cumplir y verificar en el desarrollo de la estrategia -->
<template>
  <div class="flex items-center text-white">
    <i class="pr-2 fill-current bx bx-check-square bx-md"></i>
    <label class="text-lg">{{ principleText }}</label>
  </div>
</template>

<script>
export default {
  props: {
    principleText: {
      type: String,
      default: 'Buenos fundamentales',
    },
  },
}
</script>

<style></style>
