<template>
  <div class="h-screen bg-black">
    <m-stock-card></m-stock-card>
    <div class="mt-8">
      <m-operations-table></m-operations-table>
      <a-journal-note></a-journal-note>
    </div>
  </div>
</template>

<script>
import MStockCard from '@/components/molecules/MStockCard'
import MOperationsTable from '@/components/molecules/MOperationsTable'
import AJournalNote from '@/components/atoms/AJournalNote'
export default {
  name: 'App',
  components: {
    AJournalNote,
    MStockCard,
    MOperationsTable,
  },
}
</script>
