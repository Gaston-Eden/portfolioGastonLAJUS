<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="bg-black/90 text-white border-b border-gray-800">
    <nav class="container mx-auto flex items-center justify-between py-4 px-2 md:px-0">
      <RouterLink to="/" class="text-lg font-semibold">Mon Portfolio</RouterLink>

      <div class="space-x-4 hidden md:flex">
        <RouterLink to="/" class="hover:text-white text-gray-300 px-3 py-2 rounded" active-class="font-bold text-white">
          Accueil</RouterLink>
        <RouterLink to="/Projets" class="hover:text-white text-gray-300 px-3 py-2 rounded"
          active-class="font-bold text-white">Projets</RouterLink>
        <RouterLink to="/Contact" class="hover:text-white text-gray-300 px-3 py-2 rounded"
          active-class="font-bold text-white">Contact</RouterLink>
      </div>

      <div class="md:hidden">
        <RouterLink to="/Projets" class="text-gray-300 px-2">Projets</RouterLink>
      </div>
    </nav>
  </header>
</template>
