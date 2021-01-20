<!-- Pagina para dashboard de la Home --->
<template>
  <div>
    <!-- Buscador -->
    <div class="mb-4">
      <m-search-system :foundStockValues="stocksDatabase"></m-search-system>
    </div>
  </div>
</template>

<script>
import MSearchSystem from '@/components/molecules/MSearchSystem'
export default {
  name: 'Home',
  components: {
    MSearchSystem,
  },
  data() {
    return {
      stocksDatabase: [
        {
          tickerSymbol: '$ROKU',
          tickerName: 'Roku Entertainment',
          hasRedFlag: true,
          onWatchlist: true,
        },
        {
          tickerSymbol: '$CGC',
          tickerName: 'Canopy Growth',
          hasRedFlag: false,
          onWatchlist: true,
        },
        {
          tickerSymbol: '$FB',
          tickerName: 'Facebook Inc.',
          hasRedFlag: true,
          onWatchlist: false,
        },
      ],
    }
  },
  methods: {
    searchForStock() {},
  },
}
</script>

<style></style>
