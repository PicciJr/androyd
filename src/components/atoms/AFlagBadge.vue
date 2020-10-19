<!-- Contiene mensajes de advertencia con icono -->
<template>
  <div :class="['py-1 px-4 mb-1 text-white rounded-full flex items-center', badgeBgStyle]">
      <i class="pr-2 bx bxs-flag bx-sm"></i>
    <span class="pr-2 font-extrabold">{{ flagMessage.smallText }}</span
    ><span v-show="isLongTextVisible">{{ flagMessage.longText }}</span>
  </div>
</template>

<script>
export default {
  props: {
    flagMessage: {
      type: Object,
      default() {
        return {
          type: 'red', // red, green
          smallText: 'Ceñir Stop Loss.',
          longText: 'Nivel técnico recomendado: $34.50',
        }
      },
    },
    // El texto largo solo se debería ver en ciertos contextos en los que se usa el badge
    isLongTextVisible: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    badgeBgStyle() {
      return this.flagMessage.type === 'red'
        ? 'bg-red-500'
        : this.flagMessage.type === 'green'
        ? 'bg-green-400'
        : 'bg-gray-800'
    },
  },
}
</script>

<style></style>
