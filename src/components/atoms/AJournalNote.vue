<!-- Nota tomada de un valor -->
<template>
  <div class="flex items-center mb-1 text-lg text-white">
    <!-- Flag icon -->
    <i
      :class="setIcon"
    ></i>
    <div class="px-4">{{ journalNoteData.noteText }}</div>
    <div class="pl-2 italic">({{ journalNoteData.noteDate }})</div>
  </div>
</template>

<script>
export default {
  props: {
    journalNoteData: {
      type: Object,
      default() {
        return {
          isSuccessNote: false, // para notas del tipo 'Se tomaron profits el dia'
          isFailureNote: false, // para notas de tipo 'Salto el stop loss el dia...'
          noteDate: '10/10/2010',
          noteText: 'Se tomaron profits al 20%',
        }
      },
    },
  },
  computed: {
    setIcon() {
      return this.journalNoteData.isSuccessNote
        ? 'text-green-500 fill-current bx bxs-check-circle bx-sm'
        : this.journalNoteData.isFailureNote
          ? 'text-red-500 fill-current bx bx-error-circle bx-sm'
          : 'bx bxs-send bx-sm'
    },
  },
}
</script>

<style></style>
