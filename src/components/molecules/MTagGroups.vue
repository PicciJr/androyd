<!-- Grupo de etiquetas individuales -->
<template>
  <div
    class="relative flex flex-wrap items-center p-2 border border-white"
  >
    <!-- Etiquetas -->
    <div class="p-1" v-for="tag in tags" :key="tag.id">
      <a-tag-element
        :tagText="tag"
        @delete-tag="$emit('delete-tag', tag)"
      ></a-tag-element>
    </div>
    <input
      type="text"
      class="w-full bg-transparent"
      v-model="newTag"
      @keypress.enter="newTagInput"
    />
    <i
      class="absolute top-0 right-0 pr-2 text-white fill-current bx bx-hash bx-md"
    ></i>
  </div>
</template>

<script>
import ATagElement from '@/components/atoms/ATagElement'
export default {
  data() {
    return {
      newTag: '',
    }
  },
  components: {
    ATagElement,
  },
  props: {
    tags: {
      type: Array,
      default: null,
    },
  },
  computed: {
    isValidTag() {
      return this.newTag.trim() !== ''
    },
  },
  methods: {
    newTagInput($event) {
      if (this.isValidTag) this.$emit('new-tag', $event.target.value)
      this.resetTagValue()
    },
    resetTagValue() {
      this.newTag = ''
    },
  },
}
</script>

<style></style>
