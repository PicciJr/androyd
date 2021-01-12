<!-- Sistema de busqueda -->
<template>
  <div>
    <!-- Search Box -->
    <a-search-box></a-search-box>
    <!-- Results or Not found -->
    <div class="px-12 mt-1">
      <div v-if="foundStockValues.length > 0">
        <a-search-result
          v-for="stock in foundStockValues"
          :key="stock.id"
        ></a-search-result>
      </div>
      <div v-else>
        <a-result-not-found></a-result-not-found>
      </div>
    </div>
  </div>
</template>

<script>
import ASearchBox from '@/components/atoms/ASearchBox'
import ASearchResult from '@/components/atoms/ASearchResult'
import AResultNotFound from '@/components/atoms/AResultNotFound'
export default {
  components: {
    ASearchBox,
    ASearchResult,
    AResultNotFound,
  },
  props: {
    hasFoundResults: {
      type: Boolean,
      default: false,
    },
    foundStockValues: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>

<style></style>
