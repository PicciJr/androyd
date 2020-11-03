<template>
  <div class="h-screen bg-gray-300">
    <m-stock-card></m-stock-card>
    <div class="mt-8">
      <m-operations-table></m-operations-table>
      <a-journal-note></a-journal-note>
      <a-labeled-button></a-labeled-button>
      <a-circle-snapshot></a-circle-snapshot>
      <m-tag-groups></m-tag-groups>
      <a-strategy-principles-group></a-strategy-principles-group>
      <m-date-picker></m-date-picker>
    </div>
  </div>
</template>

<script>
import MStockCard from '@/components/molecules/MStockCard'
import MOperationsTable from '@/components/molecules/MOperationsTable'
import AJournalNote from '@/components/atoms/AJournalNote'
import ALabeledButton from '@/components/atoms/ALabeledButton'
import ACircleSnapshot from '@/components/atoms/ACircleSnapshot'
import MTagGroups from '@/components/molecules/MTagGroups'
import AStrategyPrinciplesGroup from '@/components/atoms/AStrategyPrinciplesGroup'
import MDatePicker from '@/components/molecules/MDatePicker'
export default {
  name: 'App',
  components: {
    AJournalNote,
    MStockCard,
    MOperationsTable,
    ALabeledButton,
    ACircleSnapshot,
    MTagGroups,
    AStrategyPrinciplesGroup,
    MDatePicker
  },
}
</script>
