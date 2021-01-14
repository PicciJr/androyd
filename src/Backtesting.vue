<!-- Pagina que contiene el scanner para hacer un backtesting -->
<template>
  <div class="px-4 py-2">
    <!-- Calendar -->
    <div class="mb-2">
      <m-date-picker></m-date-picker>
    </div>
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
        <div>
          <div v-for="(note, index) in highlights" :key="note.id" class="mb-2">
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
    }
  },
}
</script>

<style></style>
