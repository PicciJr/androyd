<!-- Modal para introducir nuevas notas en el diario de trading -->
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
        class="inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
        v-click-outside="closeModal"
      >
        <div class="px-4 pt-5 pb-4 bg-black sm:p-6 sm:pb-4">
          <!-- Body del modal -->
          <div class="flex flex-col">
            <label class="mb-2 text-lg italic text-white"
              >({{ noteDate }})</label
            >
            <div class="relative mb-6">
              <textarea
                cols="55"
                rows="5"
                class="p-2 text-white bg-gray-300 border border-white rounded-lg outline-none resize-none"
                placeholder="Nueva nota sobre el valor..."
              >
              </textarea>
              <i
                class="absolute right-0 -mt-12 text-green-500 cursor-pointer fill-current bx bxs-check-circle bx-md"
              ></i>
            </div>
            <div class="self-start" @click="closeModal">
              <a-labeled-button btnType="cancel"></a-labeled-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'
import ALabeledButton from '@/components/atoms/ALabeledButton'

export default {
  components: {
    ALabeledButton,
  },
  directives: {
    ClickOutside,
  },
  data() {
    return {
      isOpen: true,
      noteDate: '20/8/2020',
    }
  },
  methods: {
    closeModal() {
      this.isOpen = false
    },
  },
}
</script>
