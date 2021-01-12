<!-- Input para entrada de texto aleatorio -->
<template>
  <div class="p-1 text-white">
    <!-- Input field -->
    <input
      class="w-full h-10 px-2 py-1 bg-gray-300 rounded-lg"
      v-bind="$attrs"
      v-bind:value="value"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: ['value'],
}
</script>
