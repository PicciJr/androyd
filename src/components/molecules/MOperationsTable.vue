<!-- Tabla para introducir / modificar detalles de operacion -->
<template>
  <div class="p-2">
    <div v-for="field in tableFields" :key="field.id" class="flex w-2/5">
      <div class="w-full">
        <a-table-field :fieldText="field.label"></a-table-field>
      </div>
      <div class="w-full">
        <a-table-edit-field
          :field="field"
          @table-edit="handleTableEdit"
        ></a-table-edit-field>
      </div>
    </div>
  </div>
</template>

<script>
import ATableField from '@/components/atoms/ATableField'
import ATableEditField from '@/components/atoms/ATableEditField'
export default {
  components: {
    ATableField,
    ATableEditField,
  },
  props: {
    // si tiene que ser más grande no pasa nada
    stockData: {
      type: Object,
      default() {
        return {
          entryPrice: null,
          initialSize: null,
          initialPriceAction: null,
          initialVolume: null,
          entryDate: null,
          supportLevel_1: null,
          supportLevel_2: null,
          technicalPattern: null,
        }
      },
    },
  },
  data() {
    return {
      tableFields: [
        {
          id: 'entryPrice',
          label: 'Precio entrada',
          value: null,
        },
        {
          id: 'initialSize',
          label: 'Posición inicial',
          value: null,
        },
        {
          id: 'initialPriceAction',
          label: 'Price Action Entrada',
          value: null,
        },
        {
          id: 'initialVolume',
          label: 'Volumen entrada',
          value: null,
        },
        {
          id: 'entryDate',
          label: 'Fecha entrada',
          value: '',
        },
        {
          id: 'supportLevel_1',
          label: 'Soporte 1',
          value: null,
        },
        {
          id: 'supportLevel_2',
          label: 'Soporte 2',
          value: null,
        },
        {
          id: 'technicalPattern',
          label: 'Patrón técnico',
          value: '',
        },
      ],
    }
  },
  methods: {
    handleTableEdit(value, field) {
      this.$emit('table-edit', value, field)
    },
  },
}
</script>

<style></style>
