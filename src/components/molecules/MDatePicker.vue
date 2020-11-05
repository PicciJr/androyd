<!-- Grupo de ADateCalendar para seleccionar fechas de inicio y fin -->
<template>
  <div class="flex">
    <div class="pr-6">
      <a-date-calendar></a-date-calendar>
    </div>
    <div>
      <a-date-calendar dateHeadingText="Fecha fin"></a-date-calendar>
    </div>
  </div>
</template>

<script>
import ADateCalendar from '@/components/atoms/ADateCalendar'
export default {
  components: {
    ADateCalendar,
  },
}
</script>

<style></style>
