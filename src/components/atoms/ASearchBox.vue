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
        @keyup="handleSearchingStock"
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
      timeoutForNextSearch: null,
    }
  },
  methods: {
    // debounce function to make one query at a time
    handleSearchingStock() {
      clearTimeout(this.timeoutForNextSearch)
      this.timeoutForNextSearch = setTimeout(() => {
        this.$emit('searching-stock', this.searchText)
      }, 1500)
    },
  },
}
</script>

<style></style>
