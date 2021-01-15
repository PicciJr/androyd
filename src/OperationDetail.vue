<!-- Pagina para el detalle de operacion. Dinámica, se requiere ID de la operación para consultarla -->
<template>
  <div class="px-4 py-2 bg-gray-400 border border-white rounded-lg">
    <!-- Flag de advertencia, si aplica -->
    <div class="mb-4">
      <a-flag-badge></a-flag-badge>
    </div>
    <!-- Info de cabecera -->
    <div class="flex justify-between mb-2 text-white">
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
    <div class="mb-2">
      <m-operations-table></m-operations-table>
    </div>
    <!-- Notas de la operación -->
    <div class="pl-2">
      <a-journal-note
        v-for="note in stockData.journalNotes"
        :key="note.id"
        :journalNoteData="note"
      ></a-journal-note>
    </div>
    <!-- Botón confirmación de acción -->
    <div class="flex justify-end">
      <a-labeled-button
        :btnType="setButtonTypeBasedOnOperationType"
        :btnText="setButtonTextBasedOnOperationType"
      ></a-labeled-button>
    </div>
  </div>
</template>

<script>
import AFlagBadge from '@/components/atoms/AFlagBadge'
import ALabeledButton from '@/components/atoms/ALabeledButton'
import AJournalNote from '@/components/atoms/AJournalNote'
import MOperationsTable from '@/components/molecules/MOperationsTable'
export default {
  name: 'OperationDetail',
  components: {
    AFlagBadge,
    ALabeledButton,
    AJournalNote,
    MOperationsTable,
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
      },
      hasStockBeenEdited: false,
    }
  },
  computed: {
    setButtonTextBasedOnOperationType() {
      return this.hasStockBeenEdited ? 'Guardar cambios' : 'Cerrar operación'
    },
    setButtonTypeBasedOnOperationType() {
      return this.hasStockBeenEdited ? 'confirm' : 'cancel'
    },
  },
}
</script>

<style></style>
