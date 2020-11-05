<!-- Frase highlight de los resultados de un backtesting -->
<template>
  <div
    :class="[
      'px-4 py-2 text-white rounded-lg text-xl w-2/3',
      index % 2 === 0 ? 'bg-gray-300' : 'bg-gray-200',
    ]"
  >
    {{ highlightText }}
  </div>
</template>

<script>
export default {
  props: {
    highlightText: {
      type: String,
      default:
        'Los mejores rendimientos medios se han obtenido en la industria de “Healthcare”',
    },
    index: {
      // para determinar si el fondo que se pinta es de un color u otro
      type: Number,
      default: 0,
    },
  },
}
</script>

<style></style>
