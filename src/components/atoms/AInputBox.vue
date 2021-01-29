<!-- Input para entrada de texto aleatorio -->
<template>
  <div class="p-1 text-white">
    <!-- Input field -->
    <input
      class="w-full h-10 px-2 py-1 bg-gray-300 rounded-lg"
      v-bind="$attrs"
      v-bind:value="value"
      @keyup="handleInputEvent"
    />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: ['value'],
  methods: {
    handleInputEvent(event) {
      this.preventCommaCharAsInput(event)
    },
    preventCommaCharAsInput(event) {
      // TODO: no funciona todavía el mecanismo de prevención del carácter ','
      if (event.keyCode !== 188) {
        this.$emit('input', event.target.value)
      } else event.preventDefault()
    },
  },
}
</script>
