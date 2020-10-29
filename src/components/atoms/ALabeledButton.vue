<!-- Boton para confirmaciones o cancelaciones -->
<template>
  <div class="flex items-center cursor-pointer">
    <i :class="['pr-1', setButtonIcon]"></i>
    <label :class="setTextStyle">{{ btnText }}</label>
  </div>
</template>

<script>
export default {
  props: {
    btnType: {
      type: String,
      default: 'confirm', // 'cancel' o 'confirm'
    },
    btnText: {
      type: String,
      default: 'Cancelar',
    },
  },
  computed: {
    setTextStyle() {
      return this.btnType === 'cancel'
        ? 'text-red-500 font-black cursor-pointer'
        : 'text-green-500 font-black cursor-pointer'
    },
    setButtonIcon() {
      return this.btnType === 'cancel'
        ? 'bx bxs-x-square bx-sm text-red-500 fill-current'
        : 'bx bxs-check-circle bx-sm text-green-500 fill-current'
    },
  },
}
</script>

<style></style>
