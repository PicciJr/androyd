<!-- Pagina para dashboard de la Home --->
<template>
  <div>
    <!-- Buscador -->
    <div class="mb-4">
      <m-search-system
        :foundStockValues="stocksFound"
        @searching-stock="searchForStock"
      ></m-search-system>
    </div>
  </div>
</template>

<script>
import MSearchSystem from '@/components/molecules/MSearchSystem'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    MSearchSystem,
  },
  data() {
    return {
      stocksFound: [
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
    searchForStock(queriedStock) {
      const finhubApi = axios.create({
        baseURL: 'https://finnhub.io/api/v1',
        timeout: 10000,
      })
      finhubApi
        .get(
          `/search?q=${queriedStock.toUpperCase()}&token=c07rbdn48v6retjarkrg`
        )
        .then(({ data }) => {
          if (data.count > 0) this.stocksFound = this.normalizeData(data.result)
          else {
            this.stocksFound = []
          }
        })
        .catch((error) => {
          this.stocksFound = []
          console.log('error', error)
        })
    },
    normalizeData(result) {
      return result.map(({ symbol, description }) => {
        return {
          tickerSymbol: symbol,
          tickerName: description,
        }
      })
    },
  },
}
</script>

<style></style>
