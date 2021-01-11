<!-- Etiqueta para clasificar stock -->
<template>
  <div class="flex items-center p-2 bg-gray-800 border-none rounded-md">
    <label class="px-2 text-white text-md">{{ tagText }}</label>
    <i
      class="text-white cursor-pointer fill-current bx bxs-x-circle bx-sm"
      @click="$emit('delete-tag', tagText)"
    ></i>
  </div>
</template>

<script>
export default {
  props: {
    tagText: {
      type: String,
      default: 'post-er',
    },
  },
};
</script>

<style></style>
