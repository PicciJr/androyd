<!-- Campo de tabla no editable / Puede contener campos o datos que no se modifican -->
<template>
  <div class="p-2 font-bold text-gray-200 border border-white">
    {{ fieldText }}
    <!-- Slot por si se quiere estilizar algún campo de forma especial -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    fieldText: {
      type: [String, Number],
      default: '',
    },
  },
}
</script>

<style></style>
