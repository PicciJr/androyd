<!-- Resultados que se despliegan al encontrar un resultado -->
<template>
  <div class="flex items-center justify-between p-2 mb-1 text-lg bg-gray-300 hover:bg-gray-600">
    <!-- Symbol and Name -->
    <router-link
      :to="'/detalle-valor/' + foundStock.tickerSymbol"
      class="flex w-3/4"
    >
      <div class="w-32 pl-4 text-xl text-white">
        {{ foundStock.tickerSymbol }}
      </div>
      <div class="pl-16 font-bold text-gray-200">
        {{ foundStock.tickerName }}
      </div>
    </router-link>
    <!-- Icons/Flags -->
    <div class="flex">
      <div
        v-show="foundStock.onWatchlist"
        class="p-1 mr-2 rounded-full cursor-pointer hover:bg-gray-200"
      >
        <i class="text-white bx bx-list-check bx-sm"></i>
      </div>
      <div
        v-show="foundStock.hasRedFlag"
        class="p-1 mr-2 rounded-full cursor-pointer hover:bg-gray-200"
      >
        <i class="text-red-500 bx bxs-flag bx-sm"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    foundStock: {
      type: Object,
      default() {
        return {
          tickerSymbol: '$ROKU',
          tickerName: 'Roku Entertainment',
          hasRedFlag: true,
          onWatchlist: true,
        }
      },
    },
  },
}
</script>

<style></style>
