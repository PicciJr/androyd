<!-- Pagina para el detalle de operacion. Dinámica, se requiere ID de la operación para consultarla -->
<template>
  <div class="px-4 py-2 bg-gray-400 border border-white rounded-lg">
    <!-- Flag de advertencia, si aplica -->
    <div class="mb-4">
      <a-flag-badge></a-flag-badge>
    </div>
    <!-- Info de cabecera -->
    <div class="flex justify-between text-white">
      <div class="flex items-center w-3/4">
        <div class="pr-4 text-2xl">{{ stockData.symbol }}</div>
        <div class="pr-4 text-lg font-thin">({{ stockData.currentPrice }})</div>
        <div class="pr-4 font-bold text-gray-200">
          {{ stockData.currentPerformance }}%
        </div>
        <div class="font-bold text-gray-200">
          {{ stockData.daysActive }}D / {{ stockData.weeksActive }}W
        </div>
      </div>
      <div class="flex flex-col w-1/4">
        <div class="flex">
          <label class="pr-4">Ayer: </label>
          <div class="font-bold text-gray-200">
            {{ stockData.priceChgYesterday }}
          </div>
        </div>
        <div class="flex">
          <label class="pr-4">SL: </label>
          <div class="font-bold text-gray-200">
            {{ stockData.currentStopLoss }}
          </div>
        </div>
        <div class="flex">
          <label class="pr-4">Máx %: </label>
          <div class="font-bold text-gray-200">
            {{ stockData.bestPerformanceToDate }}
          </div>
        </div>
      </div>
    </div>
    <!-- Tabla con datos de la operación -->
  </div>
</template>

<script>
import AFlagBadge from '@/components/atoms/AFlagBadge'
export default {
  name: 'OperationDetail',
  components: {
    AFlagBadge,
  },
  data() {
    return {
      stockData: {
        symbol: '$ROKU',
        currentPrice: 48.5,
        currentPerformance: 0.0,
        daysActive: 0.0,
        weeksActive: 0.0,
        priceChgYesterday: 0.0,
        currentStopLoss: 0.0,
        bestPerformanceToDate: 0.0,
        pendingAction: {
          type: 'red',
          smallText: 'Ceñir Stop Loss',
          longText: 'Nivel técnico recomendado: $34.50',
        },
      },
    }
  },
}
</script>

<style></style>
