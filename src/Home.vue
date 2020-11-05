<!-- Pagina para dashboard de la Home --->
<template>
  <div>
    <!-- Buscador -->
    <div class="mb-4">
      <m-search-system></m-search-system>
    </div>
    <!-- Valores en cartera -->
    <div class="mb-4">
      <div class="flex items-center mb-2">
        <i
          class="pr-2 text-gray-200 fill-current bx bxs-shopping-bag bx-md"
        ></i>
        <h2 class="text-2xl">CARTERA</h2>
      </div>
      <!-- Grid de valores -->
      <div class="flex flex-wrap items-center justify-center mb-2">
        <m-stock-card></m-stock-card>
        <m-stock-card></m-stock-card>
        <m-stock-card></m-stock-card>
      </div>
      <!-- Icono crear nueva operación-->
      <div class="flex justify-end mb-4">
        <i class="text-white cursor-pointer fill-current bx bxs-message-square-add bx-md"></i>
      </div>
    </div>
    <!-- Valores en Vigilancia -->
    <div class="mb-4">
      <div class="flex items-center mb-2">
        <i
          class="pr-2 text-gray-200 fill-current bx bx-target-lock bx-md"
        ></i>
        <h2 class="text-2xl">VIGILANCIA</h2>
      </div>
      <!-- Tabla de valores en vigilancia -->
      <div>
        <a-watchlist-table></a-watchlist-table>
      </div>
    </div>
  </div>
</template>

<script>
import AWatchlistTable from '@/components/atoms/AWatchlistTable'
import MSearchSystem from '@/components/molecules/MSearchSystem'
import MStockCard from '@/components/molecules/MStockCard'
export default {
  components: {
    AWatchlistTable,
    MSearchSystem,
    MStockCard,
  },
}
</script>

<style></style>
