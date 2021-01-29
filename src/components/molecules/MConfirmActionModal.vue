<!-- Modal genérico para confirmacion de acciones -->
<template>
  <div class="fixed inset-0 z-10 overflow-y-auto" v-if="isOpen">
    <div
      class="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0"
    >
      <!--
      Background overlay, show/hide based on modal state.
    -->
      <div class="fixed inset-0 transition-opacity">
        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>

      <!-- This element is to trick the browser into centering the modal contents. -->
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span
      >&#8203;
      <!--
      Modal panel, show/hide based on modal state.
    -->
      <div
        class="inline-block overflow-hidden text-center align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
        v-click-outside="closeModal"
      >
        <div class="px-4 pt-5 pb-4 bg-black sm:p-6 sm:pb-4">
          <!-- Close button -->
          <div v-show="hasCloseButton" class="flex justify-end mb-1">
            <i class="text-red-500 fill-current bx bxs-x-circle bx-sm"></i>
          </div>
          <!-- Body del modal -->
          <div class="flex flex-col items-center justify-center">
            <i
              :class="['mb-1 text-5xl text-red-500 fill-current bx', svgIcon]"
            ></i>
            <p class="mb-6 text-3xl text-gray-200">{{ modalMessage }}</p>
            <div class="flex justify-between">
              <!-- Accion de negacion, cancelar -->
              <vs-button
                class="w-20 border border-white cursor-pointer"
                border
                @click="handleCancelledAction"
                ><span class="text-white">{{
                  btnSecondaryText
                }}</span></vs-button
              >
              <!-- Accion de confirmacion, positiva -->
              <vs-button
                class="w-20 cursor-pointer"
                color="#524E4E"
                @click="handleConfirmAction"
                >{{ btnPrimaryText }}</vs-button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'

export default {
  directives: {
    ClickOutside,
  },
  props: {
    hasCloseButton: {
      type: Boolean,
      default: false,
    },
    svgIcon: {
      type: String,
      default: 'bx-info-circle',
    },
    modalMessage: {
      type: String,
      default: '¿Confirmar operación?',
    },
    btnSecondaryText: {
      type: String,
      default: 'NO',
    },
    btnPrimaryText: {
      type: String,
      default: 'SI',
    },
  },
  data() {
    return {
      isOpen: true,
    }
  },
  methods: {
    closeModal() {
      this.isOpen = false
      this.$emit('closed')
    },
    handleConfirmAction() {
      this.isOpen = false
      this.$emit('confirmed-action')
    },
    handleCancelledAction() {
      this.isOpen = false
      this.$emit('cancelled-action')
    },
  },
}
</script>
