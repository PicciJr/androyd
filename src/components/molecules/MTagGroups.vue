<!-- Grupo de etiquetas individuales -->
<template>
  <div class="flex items-center px-2 py-1 border border-white">
    <!-- Etiquetas -->
    <div class="p-1" v-for="tag in tags" :key="tag.id">
      <a-tag-element :tagText="tag"></a-tag-element>
    </div>
    <input type="text" class="bg-transparent" />
    <i class="text-white fill-current bx bx-hash bx-md"></i>
  </div>
</template>

<script>
import ATagElement from '@/components/atoms/ATagElement'
export default {
  components: {
    ATagElement,
  },
  props: {
    tags: {
      type: Array,
      default() {
        return ['retesteo', 'reentrada']
      },
    },
  },
}
</script>

<style></style>
