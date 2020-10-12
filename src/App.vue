<template>
  <div class="h-screen bg-black">
    <m-search-system></m-search-system>
  </div>
</template>

<script>
import MSearchSystem from '@/components/molecules/MSearchSystem'
export default {
  name: 'App',
  components: {
    MSearchSystem,
  },
}
</script>
