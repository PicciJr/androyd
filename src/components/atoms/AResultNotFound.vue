<template>
  <div
    class="flex items-center justify-center p-2 text-lg bg-gray-300 cursor-pointer justify-centermb-2"
  >
    <div class="pl-8 pr-4 text-white">
      Valor no encontrado, ¿quieres realizar una operación con él?
    </div>
    <!-- Create new operation -->
    <div>
      <i
        class="text-white bx bxs-plus-square bx-sm"
        @click="goToNewOperation"
      ></i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    queriedStock: {
      type: String,
      default: '',
    },
  },
  methods: {
    goToNewOperation() {
      this.$router.push(`/nueva-operacion/${this.queriedStock}`)
    },
  },
}
</script>
