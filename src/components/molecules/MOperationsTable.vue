<!-- Tabla para introducir / modificar detalles de operacion -->
<template>
  <div class="p-2">
    <div v-for="field in tableFields" :key="field.id" class="flex w-2/5">
      <div class="w-full">
        <a-table-field :fieldText="field.label"></a-table-field>
      </div>
      <div class="w-full">
        <a-table-edit-field :data="field.value"></a-table-edit-field>
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
          entryPrice: 0.0,
          initialSize: 0.0,
          initialPriceAction: 0.0,
          initialVolume: 0.0,
          entryDate: '10/10/2010',
          supportLevel_1: 0.0,
          supportLevel_2: 0.0,
          technicalPattern: 'Cup & Handle',
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
}
</script>

<style></style>
