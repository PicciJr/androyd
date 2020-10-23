<template>
  <div class="p-2 font-extrabold text-white border border-white cursor-pointer">
    <input type="text" :value="data" class="w-full font-extrabold bg-transparent" />
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: String,
      default: '',
    },
  },
}
</script>

<style></style>
