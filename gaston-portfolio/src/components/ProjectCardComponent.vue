<script setup>
defineProps({
  title: String,
  description: String,
})
</script>

<template>
  <div class="border rounded-lg p-4 shadow-md bg-white">
    <h3 class="text-xl font-bold text-gray-900">{{ title }}</h3>
    <p class="text-gray-600 mt-2">{{ description }}</p>
  </div>
</template>
