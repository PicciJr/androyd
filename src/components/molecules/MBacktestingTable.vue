<!-- Tabla para resumen de backtesting / Solo lectura -->
<template>
  <div class="w-2/3 py-2 text-xl bg-gray-900 rounded-lg">
    <t-table :data="tableData">
      <template slot="row" slot-scope="props">
        <tr :class="[props.rowIndex % 2 === 0 ? 'bg-gray-900' : 'bg-gray-200']">
          <td
            :class="[props.rowIndex % 2 !== 0 ? 'text-white' : 'text-gray-300', 'px-4 font-bold']"
          >
            {{ props.row.field }}
          </td>
          <td class="font-medium text-white">
            {{ props.row.value }}
          </td>
        </tr>
      </template>
    </t-table>
  </div>
</template>

<script>
export default {
  props: {
    tableData: {
      type: Array,
      default() {
        return [
          {
            field: 'Rentabilidad',
            value: '4,5%',
          },
          {
            field: 'Hit rate',
            value: '26%',
          },
          {
            field: 'Esp. Matemática',
            value: '24',
          },
          {
            field: 'Exposición media',
            value: '9%',
          },
        ]
      },
    },
  },
}
</script>

<style></style>
