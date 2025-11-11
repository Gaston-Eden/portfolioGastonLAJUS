<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="bg-gray-800 text-white p-4">
    <nav class="container mx-auto flex justify-between">
      <RouterLink to="/" class="text-xl font-bold">Mon Portfolio</RouterLink>

      <div class="space-x-4">
        <RouterLink to="/" class="hover:text-gray-300">Accueil</RouterLink>
        <RouterLink to="/Projets">Projets</RouterLink>
        <RouterLink to="/Contact">Contact</RouterLink>
      </div>
    </nav>
  </header>
</template>
