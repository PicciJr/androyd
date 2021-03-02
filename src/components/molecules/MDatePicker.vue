<!-- Grupo de ADateCalendar para seleccionar fechas de inicio y fin -->
<template>
  <div class="flex">
    <div class="pr-6">
      <a-date-calendar @updated-date="handleStartDate"></a-date-calendar>
    </div>
    <div>
      <a-date-calendar
        dateHeadingText="Fecha fin"
        @updated-date="handleEndDate"
      ></a-date-calendar>
    </div>
  </div>
</template>

<script>
import ADateCalendar from '@/components/atoms/ADateCalendar'
export default {
  components: {
    ADateCalendar,
  },
  data() {
    return {
      startDate: null,
      endDate: null,
    }
  },
  methods: {
    handleStartDate(date) {
      this.startDate = date
      this.$emit('updated-dates', this.startDate, this.endDate)
    },
    handleEndDate(date) {
      this.endDate = date
      this.$emit('updated-dates', this.startDate, this.endDate)
    },
  },
}
</script>

<style></style>
