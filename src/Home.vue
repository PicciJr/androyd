<!-- Pagina para dashboard de la Home --->
<template>
  <div>
    <!-- Buscador -->
    <div class="mb-4">
      <m-search-system></m-search-system>
    </div>
  </div>
</template>

<script>
import MSearchSystem from '@/components/molecules/MSearchSystem'
export default {
  name: 'Home',
  components: {
    MSearchSystem,
  },
}
</script>

<style></style>
