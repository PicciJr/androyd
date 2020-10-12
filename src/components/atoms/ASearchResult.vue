<template>
  <div class="flex p-2 mb-1 text-lg bg-gray-300">
    <!-- Symbol and Name -->
    <div class="flex items-center w-full">
      <div class="pl-4 text-xl text-white">{{ tickerSymbol }}</div>
      <div class="pl-16 font-bold text-gray-200">{{ tickerName }}</div>
    </div>
    <!-- Icons/Flags -->
    <div v-show="onWatchlist" class="pr-4">
      <i class="text-white bx bx-list-check bx-sm"></i>
    </div>
    <div v-show="hasRedFlag">
      <i class="text-red-500 bx bxs-flag bx-sm"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tickerSymbol: {
      type: String,
      default: '$ROKU',
    },
    tickerName: {
      type: String,
      default: 'Roku Entertainment',
    },
    hasRedFlag: {
      type: Boolean,
      default: true,
    },
    onWatchlist: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

<style></style>
