<script setup>
defineProps({
  title: String,
  description: String,
  img: String,
})
</script>

<template>
  <div class="h-full flex flex-col border  border-gray-800 rounded-lg  overflow-hidden transition duration-300  hover:-translate-y-1">
    <div class="w-full h-48 bg-gray-800/40 overflow-hidden flex-shrink-0">
      <img :src="img" alt="project image" class="w-full h-full object-cover" />
    </div>

    <div class="flex-1 p-6 flex flex-col backdrop-blur-xl border border-white/10">
      <h3 class="mb-3 text-2xl font-bold text-white tracking-tight">{{ title }}</h3>
      <p class="text-base leading-relaxed text-gray-400">{{ description }}</p>
    </div>
  </div>
</template>
