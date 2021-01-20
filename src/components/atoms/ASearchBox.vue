<template>
  <!-- Full width text search box -->
  <div class="flex">
    <div
      class="flex justify-between w-full p-2 bg-gray-300 border border-white rounded-full"
    >
      <input
        v-model="searchText"
        type="text"
        class="w-full pl-4 text-white bg-transparent"
        placeholder="Busca un valor..."
        @change="$emit('searching-stock', searchText)"
      />
      <i class="pr-4 text-white bx bx-search-alt bx-sm"></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchText: '',
    }
  },
}
</script>

<style></style>
