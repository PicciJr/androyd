<template>
  <div class="p-2 font-extrabold text-white border border-white">
    <input
      v-bind="$attrs"
      v-bind:value="value"
      class="w-full font-extrabold bg-transparent"
      @keyup="handleInputEvent"
    />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      default: null
    },
    field: {
      type: Object,
      default: null
    }
  },
  methods: {
    handleInputEvent(event) {
      this.$emit('table-edit', event.target.value, this.field)
    },
  },
}
</script>

<style></style>
