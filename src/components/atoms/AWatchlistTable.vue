<!-- Tabla para visualizar los valores en vigilancia. Se puede ordenar por sus cabeceras. -->
<template>
  <div class="p-4 bg-gray-400 border border-white rounded-lg cursor-pointer">
    <vs-table>
      <template #thead>
        <!-- Cabeceras que permiten ordenar por contenido -->
        <vs-tr>
          <vs-th
            sort
            @click="
              watchlistStocks = $vs.sortData($event, watchlistStocks, 'symbol')
            "
          >
            Valor
          </vs-th>
          <vs-th
            sort
            @click="
              watchlistStocks = $vs.sortData(
                $event,
                watchlistStocks,
                'description'
              )
            "
          >
            Nombre
          </vs-th>
          <vs-th
            sort
            @click="
              watchlistStocks = $vs.sortData(
                $event,
                watchlistStocks,
                'hasCurrentPosition'
              )
            "
          >
            Posición actual
          </vs-th>
          <vs-th
            sort
            @click="
              watchlistStocks = $vs.sortData($event, watchlistStocks, 'isHot')
            "
          >
            Hot
          </vs-th>
        </vs-tr>
      </template>
      <template #tbody>
        <vs-tr
          :key="i"
          v-for="(stock, i) in watchlistStocks"
          class="text-white"
        >
          <vs-td>
            <span class="text-xl">{{ stock.symbol }}</span>
          </vs-td>
          <vs-td>
            <span class="font-bold text-gray-200">{{ stock.description }}</span>
          </vs-td>
          <vs-td>
            <i
              v-show="stock.hasCurrentPosition"
              class="text-green-500 fill-current bx bxs-check-circle bx-sm"
            ></i>
          </vs-td>
          <vs-td>
            <i v-show="stock.isHot" class="bx bxs-hot bx-sm"></i>
          </vs-td>
        </vs-tr>
      </template>
    </vs-table>
  </div>
</template>

<script>
export default {
  props: {
    watchlistStocks: {
      type: Array,
      default() {
        return [
          {
            symbol: '$ROKU',
            description: 'Roku Entertainment',
            hasCurrentPosition: true,
            isHot: false,
          },
          {
            symbol: '$OLED',
            description: 'Oled',
            hasCurrentPosition: true,
            isHot: true,
          },
          {
            symbol: '$ACCD',
            description: 'Accolade',
            hasCurrentPosition: false,
            isHot: false,
          },
          {
            symbol: '$ACCD',
            description: 'Accolade',
            hasCurrentPosition: false,
            isHot: true,
          },
        ]
      },
    },
  },
}
</script>

<style></style>
