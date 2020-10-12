<template>
  <div class="flex">
    <!-- Input field -->
    <vs-input
      type="text"
      v-model="inputValue"
      icon-after
      placeholder="Busca un valor..."
    >
      <template #icon> <i class="bx bx-search-alt"></i> </template
    ></vs-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: '',
    }
  },
}
</script>
