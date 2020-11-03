<!-- Selección de una fecha -->
<template>
  <div class="flex flex-col w-64 text-center">
    <div class="px-8">
      <div class="px-6 py-2 mb-2 text-xl text-white bg-gray-300 rounded-lg">
        {{ dateHeadingText }}
      </div>
    </div>
    <t-datepicker
      v-model="date"
      class="cursor-pointer"
      placeholder="Seleccione una fecha"
      date-format="Y-m-d"
      user-format="d/m/Y"
    />
  </div>
</template>

<script>
export default {
  props: {
    dateHeadingText: {
      type: String,
      default: 'Fecha inicio',
    },
  },
  data() {
    return {
      date: '', // año/mes/dia
    }
  },
  computed: {
    /** Retornar en formato dia/mes/año de la fecha seleccionada */
    formatedDate() {
      let date = new Date(this.date)
      const dd = String(date.getDate()).padStart(2, '0')
      const mm = String(date.getMonth() + 1).padStart(2, '0') //January is 0!
      const yyyy = date.getFullYear()

      date = dd + '/' + mm + '/' + yyyy
      return date
    },
  },
}
</script>

<style></style>
