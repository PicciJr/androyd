<template>
  <div class="h-screen bg-black">
    <m-stock-card></m-stock-card>
  </div>
</template>

<script>
import MStockCard from '@/components/molecules/MStockCard'
export default {
  name: 'App',
  components: {
    MStockCard,
  },
}
</script>
