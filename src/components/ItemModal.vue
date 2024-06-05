<template>
  <div class="fixed inset-0 mt-10 bg-gray-500 bg-opacity-75 flex items-center justify-center">
    <div class="bg-white rounded-lg w-1/2 dark:bg-gray-700 p-8">
      <div class="flex justify-between items-center border-b pb-2 mb-2">
        <h3 class="text-xl font-bold dark:text-white">{{ item.displayName }}</h3>
        <button @click="closeModal" class="text-2xl text-white">&times;</button>
      </div>
      <div class="flex justify-center">
        <img :src="item.fullPortrait" :alt="item.displayName" class="w-72 h-full object-cover mb-4 rounded" />
      </div>
      <p class="dark:text-gray-400">{{ item.description }}</p>
      <div v-if="item.video" class="mt-4">
        <iframe
            :src="getEmbedUrl(item.video)"
            class="w-full h-64"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
        </iframe>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    default: null
  }
})

const emit = defineEmits(["close"]);

const closeModal = () => {
  emit("close");
}

const getEmbedUrl = (item) => {
  const videoId = item.split('/');
  return `https://www.youtube.com/embed/${videoId[videoId.length - 1]}`;
}
</script>
