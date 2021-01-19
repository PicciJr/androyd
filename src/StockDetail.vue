<!-- Detalle de un valor. Dinámica, se necesita la referencia del valor a consultar -->
<template>
  <div class="px-4 py-2 bg-gray-400 border border-white rounded-lg">
    <!-- Cabecera -->
    <div class="flex items-center mb-2">
      <i class="text-white fill-current bx bx-plus bx-md"></i>
      <div class="flex items-center justify-center w-full">
        <span class="pr-4 text-2xl">{{ stockData.symbol }}</span>
        <span class="pr-4 text-lg font-thin"
          >({{ stockData.currentPrice }})</span
        >
        <span class="pr-4 font-bold text-gray-200">{{
          stockData.currentPerformance
        }}</span>
        <label class="pr-4">Ayer: </label>
        <span class="font-bold text-gray-200">{{
          stockData.priceChgYesterday
        }}</span>
      </div>
      <!-- Flag buttons -->
      <div class="w-1/5">
        <div class="inline-block pr-4">
          <i class="text-white cursor-pointer bx bx-list-check bx-md"></i>
        </div>
        <i class="text-red-500 cursor-pointer bx bxs-flag bx-md"></i>
      </div>
    </div>
    <!-- Tabla con operaciones -->
    <div>
      <m-stock-detail-table></m-stock-detail-table>
    </div>
    <!-- Snapshot info en circulos -->
    <div class="flex justify-center mt-8 mb-4">
      <div class="px-2" v-for="info in stockData.historicalData" :key="info.id">
        <a-circle-snapshot
          :text="info.data"
          :secondaryText="info.tooltipText"
        ></a-circle-snapshot>
      </div>
    </div>
    <!-- Notas del valor -->
    <div class="flex" v-for="note in stockData.journalNotes" :key="note.id">
      <a-journal-note :journalNoteData="note"></a-journal-note>
    </div>
  </div>
</template>

<script>
import ACircleSnapshot from '@/components/atoms/ACircleSnapshot'
import AJournalNote from '@/components/atoms/AJournalNote'
import MStockDetailTable from '@/components/molecules/MStockDetailTable'

export default {
  name: 'StockDetail',
  components: {
    ACircleSnapshot,
    AJournalNote,
    MStockDetailTable,
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
        journalNotes: [
          {
            isSuccessNote: true,
            noteDate: '10/10/2010',
            noteText: 'Se tomaron profits al 20%',
          },
          {
            isFailureNote: true,
            noteDate: '10/20/2010',
            noteText: 'Salta el stop loss',
          },
          {
            noteDate: '10/10/2010',
            noteText: 'Un día cualquiera',
          },
        ],
        historicalData: [
          {
            data: '+20.5%',
            tooltipText: 'Rendimiento historico',
          },
          {
            data: 3,
            tooltipText: 'Numero de trades totales',
          },
        ],
      },
    }
  },
}
</script>
