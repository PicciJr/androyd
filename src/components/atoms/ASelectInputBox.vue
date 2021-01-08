<template>
  <select
    :placeholder="placeholder"
    v-model="value"
    class="w-full h-10 p-1 px-2 py-1 text-white bg-gray-300 rounded-lg"
    @input="$emit('select', $event.target.value)"
  >
    <option value="">--Patrón técnico--</option>
    <option :value="option" v-for="option in options" :key="option.id">
      {{ option }}
    </option>
  </select>
</template>

<script>
export default {
  data() {
    return {
      value: '',
    }
  },
  props: {
    placeholder: {
      type: String,
      default: 'Opciones',
    },
    options: {
      type: Array,
      default: null,
    },
  },
}
</script>

<style></style>
