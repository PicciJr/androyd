<!-- Grupo de principios a verificar y cumplir en el desarrollo de la estrategia -->
<template>
  <div class="flex flex-col p-2">
    <div v-for="principle in principles" :key="principle.id">
      <a-strategy-principle :principleText="principle"></a-strategy-principle>
    </div>
  </div>
</template>

<script>
import AStrategyPrinciple from '@/components/atoms/AStrategyPrinciple'
export default {
  components: {
    AStrategyPrinciple,
  },
  props: {
    principles: {
      type: Array,
      default() {
        return [
          'Buenos fundamentales',
          'Fuerza relativa',
          'Acumulación institucional',
        ]
      },
    },
  },
}
</script>

<style></style>
