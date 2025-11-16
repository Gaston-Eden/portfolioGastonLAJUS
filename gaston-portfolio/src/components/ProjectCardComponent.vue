<script setup>
defineProps({
  title: String,
  description: String,
  img: String,
})
</script>

<template>
  <div class="h-full flex flex-col bg-gray-900 border border-gray-800 rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-xl hover:-translate-y-1">
    <div class="w-full h-48 bg-gray-800 overflow-hidden flex-shrink-0">
      <img :src="img" alt="project image" class="w-full h-full object-cover" />
    </div>

    <div class="flex-1 p-6 flex flex-col">
      <h3 class="text-lg font-bold text-white mb-3">{{ title }}</h3>
      <p class="text-gray-300 text-sm flex-1">{{ description }}</p>
    </div>
  </div>
</template>
