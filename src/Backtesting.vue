<!-- Pagina que contiene el scanner para hacer un backtesting -->
<template>
  <div class="px-4 py-2">
    <!-- Calendar -->
    <div class="mb-2">
      <m-date-picker @updated-dates="handleBacktestingDates"></m-date-picker>
    </div>
    <vs-button class="mb-4" color="#7d33ff" @click="getBacktestingResults"
      >Obtener resultados</vs-button
    >
    <div class="flex justify-between">
      <!-- Highlights table && Summary notes -->
      <div class="w-2/3">
        <div class="flex items-center mb-2">
          <h2 class="text-3xl text-white uppercase">Highlights</h2>
          <i class="pl-4 text-white fill-current bx bx-trophy bx-md"></i>
        </div>
        <div class="mb-8">
          <m-backtesting-table></m-backtesting-table>
        </div>
        <div v-if="backtestingResults !== null">
          <div
            v-for="(note, index) in backtestingResults.highlights"
            :key="note.id"
            class="mb-2"
          >
            <a-backtesting-highlight
              :highlightText="note"
              :index="index"
            ></a-backtesting-highlight>
          </div>
        </div>
      </div>
      <!-- Circle snapshots animation -->
      <div class="w-1/3"></div>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import ABacktestingHighlight from '@/components/atoms/ABacktestingHighlight'
import MDatePicker from '@/components/molecules/MDatePicker'
import MBacktestingTable from '@/components/molecules/MBacktestingTable'
export default {
  name: 'Backtesting',
  components: {
    ABacktestingHighlight,
    MDatePicker,
    MBacktestingTable,
  },
  data() {
    return {
      highlights: [
        'Los mejores rendimientos medios se han obtenido en la industria de “Healthcare”',
        'Los mejores rendimientos han venido de patrones tipo “Cup&Handle”',
      ],
      startDate: null,
      endDate: null,
      backtestingResults: null,
      skipQuery: false,
    }
  },
  apollo: {
    backtestingResults: {
      query: gql`
        query backtestingResults($startDate: String!, $endDate: String!) {
          backtestingResults(startDate: $startDate, endDate: $endDate) {
            highlights
          }
        }
      `,
      variables() {
        return {
          startDate: this.startDate,
          endDate: this.endDate,
        }
      },
      skip() {
        return this.skipQuery
      },
    },
  },
  methods: {
    handleBacktestingDates(start, end) {
      this.startDate = start
      this.endDate = end
    },
    getBacktestingResults() {
      console.log('entro a get backtesting results')
      // this.$apollo.queries.backtestingResults.skip = false
      this.$apollo.queries.backtestingResults.refetch()
    },
  },
}
</script>

<style></style>
