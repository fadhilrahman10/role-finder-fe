<script setup>
import AppHeader from "./components/AppHeader.vue";
import {computed, onMounted, ref} from "vue";
import { fetchData } from './services/api';
import CategoryList from "./components/CategoryList.vue";
import ItemList from "./components/ItemList.vue";
import ItemModal from "./components/ItemModal.vue";

const data = ref([]);
const searchTerm = ref('');
const selectedCategory = ref('');
const selectedItem = ref(null);
const loading = ref(false);

onMounted(async () => {
  data.value = await fetchData();
});

const handleSearchChange = (term) => {
  searchTerm.value = term;
};

const handleCategorySelect = (category) => {
  selectedCategory.value = category;
};

const handleItemClick = (item) => {
  selectedItem.value = item;
};

const handleCloseModal = () => {
  selectedItem.value = null;
};

const categories = computed(() => {
  return [...new Set(data.value.map(item => item.role))];
});

const filteredItems = computed(() => {
  return data.value.filter(item =>
      item.displayName.toLowerCase().includes(searchTerm.value.toLowerCase()) &&
      (!selectedCategory.value || item.role === selectedCategory.value)
  );
});

</script>

<template>
  <div class="container mx-auto p-4">
    <AppHeader @searchChange="handleSearchChange" />
    <div class="flex flex-col items-center">
      <CategoryList :activeCategory="selectedCategory" :categories="categories" :data="data" @categorySelect="handleCategorySelect" />
      <ItemList :items="filteredItems" @itemClick="handleItemClick" />
    </div>
    <ItemModal v-if="selectedItem" :item="selectedItem" @close="handleCloseModal" />
  </div>
</template>

<style scoped>
</style>
