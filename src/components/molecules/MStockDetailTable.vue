<!-- Detalle de stock con historico de operaciones / Tabla no editable -->
<template>
  <div class="p-2">
    <div v-for="(data, index) in operationsLogData" :key="data.id" class="flex">
      <div class="w-1/4">
        <a-table-field
          :class="setTextColorBasedOnStatus(data)"
          v-if="isActiveOperation(data)"
          fieldText="Operación activa"
        ></a-table-field>
        <a-table-field v-else :fieldText="`Operación ${index}`"></a-table-field>
      </div>
      <div class="w-1/4">
        <a-table-field
          v-if="isActiveOperation(data)"
          :fieldText="data.operationStatus"
        ></a-table-field>
        <a-table-field
          v-else
          :fieldText="data.operationEndDate"
        ></a-table-field>
      </div>
      <div class="w-1/4">
        <a-table-field :fieldText="data.operationActiveDays"></a-table-field>
      </div>
      <div class="w-1/4">
        <a-table-field :fieldText="data.operationPerformance"></a-table-field>
      </div>
    </div>
  </div>
</template>

<script>
import ATableField from '@/components/atoms/ATableField'
export default {
  components: {
    ATableField,
  },
  props: {
    operationsLogData: {
      type: Array,
      default() {
        return [
          {
            operationStatus: 'In progress',
            operationActiveDays: 4,
            operationEndDate: null,
            operationPerformance: 5.5,
          },
          {
            operationStatus: 'Closed',
            operationEndDate: '9/9/2011',
            operationActiveDays: 4,
            operationPerformance: -3.5,
          },
          {
            operationStatus: 'Closed',
            operationEndDate: '9/9/2011',
            operationActiveDays: 4,
            operationPerformance: -3.5,
          },
          {
            operationStatus: 'Closed',
            operationEndDate: '9/9/2011',
            operationActiveDays: 4,
            operationPerformance: -3.5,
          },
        ]
      },
    },
  },
  methods: {
    setTextColorBasedOnStatus(operation) {
      return this.isActiveOperation(operation) ? 'text-green-500' : ''
    },
    isActiveOperation(operation) {
      return operation.operationStatus === 'In progress'
    },
  },
}
</script>
