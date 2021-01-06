<!-- Pagina para registrar nueva operacion -->
<template>
  <div class="px-4 py-2 rounded-lg bg-gray-999">
    <!-- Flag advertencia -->
    <div v-if="hasStockFlagMessage">
      <a-flag-badge></a-flag-badge>
    </div>
    <!-- Heading -->
    <div class="flex items-center mb-2">
      <i class="text-white fill-current bx bx-plus bx-md"></i>
      <h2 class="text-3xl text-white">Nueva operación</h2>
    </div>
    <!-- Stock info -->
    <div class="flex mb-1 text-2xl">
      <span class="pr-4">{{ tickerSymbol }}</span>
      <span class="pr-4 font-thin">(${{ stockPrice }})</span>
      <span class="font-bold text-gray-200"
        >{{ priceChgSymbol }} {{ priceChg }}%</span
      >
    </div>
    <span class="font-bold text-gray-200">{{ stockFullName }}</span>
    <!-- Form para introducir datos -->
    <div class="mt-1 mb-12">
      <!-- First -->
      <div class="flex items-center mb-4">
        <a-input-box
          placeholder="Posición inicial (%)"
          v-model="initialPositionSize"
        ></a-input-box>
        <span class="">({{ nominalCalculated }})</span>
      </div>
      <!-- Second -->
      <div class="flex items-center">
        <a-input-box
          placeholder="Precio entrada ($)"
          v-model="entryPrice"
        ></a-input-box>
        <a-input-box
          placeholder="Stop Loss (%)"
          v-model="stopLossDistance"
        ></a-input-box>

        <span class="">({{ stopLossCalculated }})</span>
      </div>
      <!-- Third -->
      <div class="flex items-center">
        <div class="w-2/3">
          <a-input-box
            placeholder="Patrón técnico"
            v-model="technicalPattern"
          ></a-input-box>
        </div>
        <div class="w-1/3">
          <a-input-box
            placeholder="Duración patrón (sem.)"
            v-model="technicalPatternDuration"
          ></a-input-box>
        </div>
      </div>
    </div>
    <!-- Tags to be entered -->
    <div class="w-2/3 mb-2">
      <m-tag-groups></m-tag-groups>
    </div>
    <!-- Principles checklist -->
    <div v-for="principle in strategyPrinciples" :key="principle.id">
      <a-strategy-principle :principleText="principle"></a-strategy-principle>
    </div>
    <!-- Confirmation checkbox -->
    <div class="flex justify-end">
      <i class="text-green-500 fill-current bx bxs-check-circle bx-md"></i>
    </div>
  </div>
</template>

<script>
import AFlagBadge from '@/components/atoms/AFlagBadge'
import AInputBox from '@/components/atoms/AInputBox'
import AStrategyPrinciple from '@/components/atoms/AStrategyPrinciple'
import MTagGroups from '@/components/molecules/MTagGroups'
export default {
  components: {
    AFlagBadge,
    AInputBox,
    AStrategyPrinciple,
    MTagGroups,
  },
  data() {
    return {
      myCurrentBudget: 17000,
      hasStockFlagMessage: true,
      stockPrice: 20.5,
      initialPositionSize: 0.0,
      entryPrice: 0.0,
      stopLossDistance: 0.0,
      technicalPatternsAvailable: [],
      technicalPattern: '',
      technicalPatternDuration: 0,
      priceChg: 1.1,
      stockFullName: 'Roku Entertainment',
      strategyPrinciples: [
        'Buenos fundamentales',
        'Fuerza relativa',
        'Contracción precio parte derecha',
        'Acumulación institucional',
      ],
    }
  },
  computed: {
    tickerSymbol() {
      return this.$route.params.valor.toUpperCase()
    },
    priceChgSymbol() {
      return this.priceChg >= 0 ? '+' : '-'
    },
    nominalCalculated() {
      return (
        this.stockPrice *
        ((this.initialPositionSize / 100) * this.myCurrentBudget)
      )
    },
    stopLossCalculated() {
      return (this.entryPrice * this.stopLossDistance) / 100
    },
  },
}
</script>

<style></style>
