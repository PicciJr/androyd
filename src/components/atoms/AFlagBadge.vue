<!-- Contiene mensajes de advertencia con icono -->
<template>
  <div
    :class="[
      'py-1 px-4 mb-1 text-white rounded-full flex items-center',
      badgeBgStyle,
    ]"
  >
    <i :class="['pr-2', setIcon]"></i>
    <span class="pr-2 font-bold">{{ flagMessage.smallText }}</span
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
    // Background del flag según sea mensaje positivo o negativo
    badgeBgStyle() {
      return this.flagMessage.type === 'red'
        ? 'bg-red-500'
        : this.flagMessage.type === 'green'
          ? 'bg-green-400'
          : 'bg-gray-800'
    },
    // Icono que se ve en el flag según sea mensaje positivo o negativo
    setIcon() {
      return this.flagMessage.type === 'red'
        ? 'bx bxs-error bx-sm'
        : this.flagMessage.type === 'green'
          ? 'bx bxs-error bx-sm'
          : 'bx bxs-error bx-sm'
    },
  },
}
</script>

<style></style>
