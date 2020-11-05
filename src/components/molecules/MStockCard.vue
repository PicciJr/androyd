<!-- Trade en activo, en cartera. Shape rectangular con resumen básico. -->
<template>
  <div
    class="w-1/3 p-2"
  >
    <div class="p-2 bg-gray-400 border border-white rounded-lg cursor-pointer">
      <!-- Heading text -->
      <div class="flex flex-wrap items-center justify-between mb-2">
        <span class="pr-4 text-2xl font-bold text-white">{{
          stockData.symbol
        }}</span>
        <span class="text-xl font-bold text-gray-200"
          ><span class="pr-1">{{ priceChgIndication }}</span
          >{{ stockData.currentPerformance }} %</span
        >
      </div>
      <!-- Main data -->
      <div class="flex flex-col flex-wrap mb-2 text-lg">
        <div class="mb-2 font-bold text-gray-200">
          <span>{{ stockData.daysActive }} D</span> /
          <span>{{ stockData.weeksActive }} W</span>
        </div>
        <div class="mb-2">
          <span class="pr-2 text-white">Ayer: </span
          ><span class="font-bold text-gray-200"
            >{{ stockData.priceChgYesterday }} %</span
          >
        </div>
        <div class="mb-2">
          <span class="pr-2 text-white">SL: </span>
          <span class="font-bold text-gray-200"
            >{{ stockData.currentStopLoss }} %</span
          >
        </div>
      </div>
      <!-- Flag at the bottom -->
      <div v-show="stockData.pendingAction.smallText.length > 0">
        <a-flag-badge :flagMessage="stockData.pendingAction"></a-flag-badge>
      </div>
    </div>
  </div>
</template>

<script>
import AFlagBadge from '@/components/atoms/AFlagBadge'
export default {
  components: {
    AFlagBadge,
  },
  props: {
    stockData: {
      type: Object,
      default() {
        return {
          symbol: '$ROKU',
          currentPerformance: 0.0,
          daysActive: 0.0,
          weeksActive: 0.0,
          priceChgYesterday: 0.0,
          currentStopLoss: 0.0,
          pendingAction: {
            type: 'red',
            smallText: 'Ceñir Stop Loss',
            longText: 'Nivel técnico recomendado: $34.50',
          },
        }
      },
    },
  },
  computed: {
    priceChgIndication() {
      return this.stockData.currentPerformance >= 0 ? '+' : '-'
    },
  },
}
</script>

<style></style>
