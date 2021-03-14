<!-- Detalle de un valor. Dinámica, se necesita la referencia del valor a consultar -->
<template>
  <div class="px-4 py-2 bg-gray-400 border border-white rounded-lg">
    <!-- Cabecera -->
    <div class="flex items-center mb-2">
      <router-link :to="`/nueva-operacion/${$route.params.valor}`">
        <i
          class="p-1 text-white rounded-full cursor-pointer fill-current bx bx-plus bx-md hover:bg-gray-200"
        ></i>
      </router-link>
      <div class="flex items-center justify-center w-full">
        <span class="pr-4 text-2xl">{{ stock.tickerSymbol }}</span>
        <span class="pr-4 text-lg font-thin">(${{ stock.currentPrice }})</span>
        <span class="pr-4 font-bold text-gray-200">{{
          stock.currentPerformance
        }}</span>
      </div>
      <!-- Flag buttons -->
      <div class="w-1/5">
        <div class="inline-block pr-4">
          <i
            :class="[
              'p-1 rounded-full cursor-pointer hover:bg-gray-200 bx bx-list-check bx-md',
              setWatchlistFlagStyle,
            ]"
            @click="updateWatchlistStatus"
          ></i>
        </div>
        <i
          v-show="isStockToAvoid"
          class="p-1 text-red-500 rounded-full cursor-pointer hover:bg-gray-200 bx bxs-flag bx-md"
        ></i>
      </div>
    </div>
    <!-- Tabla con operaciones -->
    <div v-if="stock.operationsList.length > 0" class="mb-8">
      <m-stock-detail-table
        :operationsLogData="stock.operationsList"
      ></m-stock-detail-table>
      <!-- Snapshot info en circulos -->
      <div class="flex justify-center mt-8 mb-4">
        <div class="px-2" v-for="info in stock.historicalData" :key="info.id">
          <a-circle-snapshot
            :text="info.data"
            :secondaryText="info.tooltipText"
          ></a-circle-snapshot>
        </div>
      </div>
    </div>
    <!-- No constan operaciones -->
    <div v-else class="mb-8">
      <span class="flex justify-center text-xl font-bold text-gray-200"
        >No hay operaciones hasta ahora</span
      >
    </div>
    <!-- Notas del valor -->
    <div class="flex" v-for="note in stock.journalNotes" :key="note.id">
      <a-journal-note :journalNoteData="note"></a-journal-note>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'
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
      stock: {
        tickerSymbol: null,
        currentPrice: null,
        currentPerformance: null, // rendimiento que le estoy sacando a una operación actual
        daysActive: null,
        weeksActive: null,
        currentStopLoss: null,
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
        operationsList: null,
      },
    }
  },
  apollo: {
    stock: {
      query: gql`
        query stock($tickerSymbol: String!) {
          stock(tickerSymbol: $tickerSymbol) {
            id
            tickerSymbol
            currentPrice
            hasActiveOperation
            journalNotes {
              isSuccessNote
              noteDate
              noteText
            }
            operationsList {
              id
              tickerSymbol
              operationStatus
              operationActiveDays
              operationPerformance
            }
            isOnWatchlist
            isStockToAvoid
          }
        }
      `,
      variables() {
        return {
          tickerSymbol: this.stock.tickerSymbol,
        }
      },
    },
  },
  created() {
    this.stock.tickerSymbol = this.$route.params.valor.toUpperCase()
  },
  computed: {
    isStockInWatchlist() {
      return this.stock.isOnWatchlist
    },
    isStockToAvoid() {
      return this.stock.isStockToAvoid !== null
    },
    setWatchlistFlagStyle() {
      return this.isStockInWatchlist ? 'text-green-500' : 'text-white'
    },
  },
  methods: {
    async updateWatchlistStatus() {
      try {
        if (!this.isStockInWatchlist) {
          await this.$apollo.mutate({
            mutation: gql`
              mutation($tickerSymbol: String!) {
                addStockToWatchlist(tickerSymbol: $tickerSymbol) {
                  tickerSymbol
                  isOnWatchlist
                }
              }
            `,
            // Parameters
            variables: {
              tickerSymbol: this.stock.tickerSymbol,
            },
          })
        } else {
          await this.$apollo.mutate({
            mutation: gql`
              mutation($tickerSymbol: String!) {
                removeStockFromWatchlist(tickerSymbol: $tickerSymbol) {
                  tickerSymbol
                  isOnWatchlist
                }
              }
            `,
            // Parameters
            variables: {
              tickerSymbol: this.stock.tickerSymbol,
            },
          })
        }
        this.stock.isOnWatchlist = !this.stock.isOnWatchlist
      } catch (err) {
        console.log('catch err', err)
      }
    },
  },
}
</script>
