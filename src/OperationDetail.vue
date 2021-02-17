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
        <div class="pr-4 text-2xl">{{ stockData.tickerSymbol }}</div>
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
      <m-operations-table @table-edit="handleEditedField"></m-operations-table>
    </div>
    <!-- Notas de la operación -->
    <div class="flex items-center justify-start w-64 mb-2">
      <span class="pr-4 text-lg font-extrabold text-gray-200 uppercase"
        >Notas</span
      >
      <div
        class="px-2 py-1 bg-gray-200 rounded-full cursor-pointer"
        @click.stop="handleOpenNewJournalModal"
      >
        <i class="text-white fill-current bx bx-pencil bx-xs"></i>
      </div>
    </div>
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
        @cancel="handleCloseOperationAction"
        @confirm="handleSaveChangesAction"
      ></a-labeled-button>
    </div>
    <!-- Modal de confirmación -->
    <m-confirm-action-modal
      v-if="isModalOpened"
      @closed="closeConfirmationModal"
      @confirmed-action="handleModalConfirmationAction"
      @cancelled-action="handleModalCancellationAction"
      :modalMessage="modalMessage"
    ></m-confirm-action-modal>
    <!-- Modal para introducir nuevas notas -->
    <m-new-journal-note
      v-if="isNewJournalModalOpened"
      @close-modal="handleCloseNewJournalNote"
      @save-note="handleSaveNote"
    ></m-new-journal-note>
  </div>
</template>

<script>
import AFlagBadge from '@/components/atoms/AFlagBadge'
import ALabeledButton from '@/components/atoms/ALabeledButton'
import AJournalNote from '@/components/atoms/AJournalNote'
import MOperationsTable from '@/components/molecules/MOperationsTable'
import MConfirmActionModal from '@/components/molecules/MConfirmActionModal'
import MNewJournalNote from '@/components/molecules/MNewJournalNote'
export default {
  name: 'OperationDetail',
  components: {
    AFlagBadge,
    ALabeledButton,
    AJournalNote,
    MOperationsTable,
    MConfirmActionModal,
    MNewJournalNote,
  },
  data() {
    return {
      stockData: {
        tickerSymbol: null,
        currentPrice: null, // API financiera
        currentPerformance: null, // rendimiento que le estoy sacando a una operación actual
        daysActive: null,
        weeksActive: null,
        priceChgYesterday: null, // API financiera
        currentStopLoss: null,
        bestPerformanceToDate: null,
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
        entryPrice: null,
        initialSize: null,
        initialPriceAction: null,
        initialVolume: null,
        entryDate: null,
        supportLevel_1: null,
        supportLevel_2: null,
        technicalPattern: null,
      },
      hasStockBeenEdited: false,
      isModalOpened: false,
      isNewJournalModalOpened: false,
      modalMessage: null,
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
  methods: {
    closeConfirmationModal() {
      this.isModalOpened = false
      this.setModalMessage('')
    },
    handleCloseOperationAction() {
      this.isModalOpened = true
      this.setModalMessage('¿Seguro que deseas cerrar la operación?')
    },
    handleSaveChangesAction() {
      this.isModalOpened = true
      this.setModalMessage('¿Son correctos todos los datos?')
    },
    setModalMessage(message) {
      this.modalMessage = message
    },
    handleEditedField(value, field) {
      this.hasStockBeenEdited = true
      this.updateStockData(value, field)
    },
    updateStockData(value, field) {
      this.stockData[this.getObjectKeyById(field.id)] = value
    },
    getObjectKeyById(id) {
      return Object.keys(this.stockData).find((key) => key === id)
    },
    handleModalConfirmationAction() {
      this.isModalOpened = false
      console.log('este es el objeto que voy a enviar', this.stockData)
      // TODO: enviar datos a back
    },
    handleModalCancellationAction() {
      this.isModalOpened = false
      // TODO: enviar datos a back
    },
    handleOpenNewJournalModal() {
      this.isNewJournalModalOpened = true
    },
    handleCloseNewJournalNote() {
      this.isNewJournalModalOpened = false
    },
    handleSaveNote({ noteDate, noteContent }) {
      // TODO: enviar info a backend
      console.log('la nota que voy a enviar es', noteDate, noteContent)
    },
  },
}
</script>

<style></style>
