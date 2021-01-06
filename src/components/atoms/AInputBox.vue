<template>
  <div class="p-1 text-white">
    <!-- Input field -->
    <input
      type="text"
      class="w-full h-10 px-2 py-1 bg-gray-300 rounded-lg"
      v-model="inputValue"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      default: 'Busca un valor...',
      type: String,
    },
    inputValue: {
      default: '',
      type: String,
    },
  },
}
</script>
