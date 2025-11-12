<script setup lang="ts">
import { ref } from 'vue'
import ProjectCardComponent from '@/components/ProjectCardComponent.vue'

const projets = ref([
  { title: 'Mon Premier Projet', description: 'Fait avec Vue et Tailwind.' },
  { title: 'Un Autre Projet', description: 'Description pour le projet 2.' },
  { title: 'Portfolio', description: 'Ce site même !' }
])
</script>

<template>
  <h1 class="text-3xl text-blue-500 mb-6">Mes Projets</h1>
    
    <div class="flex flex-col gap-5 items-center ">

      <ProjectCardComponent v-for="projet in projets" :key="projet.title" :title="projet.title" :description="projet.description" />
      
  </div>

</template>
