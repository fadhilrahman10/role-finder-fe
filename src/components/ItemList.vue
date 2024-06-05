<template>
  <div class="flex flex-wrap w-4/5">
    <div class="grid grid-cols-3 gap-4" v-if="items.length > 0">
      <div
          v-for="(item, index) in items"
          :key="index"
          class="max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <button @click="clickItem(item)">
          <img class="rounded-t-lg" :src="item.displayIcon" alt="" />
        </button>
        <div class="p-5">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ item.displayName }}</h5>
          <p class="mb-3 font-normal text-gray-700 truncate dark:text-gray-400">
            {{ item.description }}
          </p>
          <button type="button" @click="clickItem(item)" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </button>
        </div>
      </div>

    </div>

    <div class="text-center text-gray-400 italic w-full" v-else>
      There is no item for this item!
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  items: {
    type: Array,
    default: [],
  }
})

const emit = defineEmits(["itemClick"]);

const clickItem = (item) => {
  emit('itemClick', item);
}
</script>
