<script setup lang="ts">
import { ref } from 'vue'
import ProjectCardComponent from '@/components/ProjectCardComponent.vue'

const projets = ref([
  { title: 'Mon Premier Projet', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae fugiat sit doloribus eius cum, amet quas. Non natus beatae quis nihil magni? Fugiat repellat quis voluptatum suscipit, molestias nam corrupti!' },
  { title: 'Un Autre Projet', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae fugiat sit doloribus eius cum, amet quas. Non natus beatae quis nihil magni? Fugiat repellat quis voluptatum suscipit, molestias nam corrupti! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae fugiat sit doloribus eius cum, amet quas. Non natus beatae quis nihil magni? Fugiat repellat quis voluptatum suscipit, molestias nam corrupti!' },
  { title: 'Portfolio', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae fugiat sit doloribus eius cum, amet quas. Non natus beatae quis nihil magni? Fugiat repellat quis voluptatum suscipit, molestias nam corrupti! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae fugiat sit doloribus eius cum, amet quas. Non natus beatae quis nihil magni? Fugiat repellat quis voluptatum suscipit, molestias nam corrupti! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae fugiat sit doloribus eius cum, amet quas. Non natus beatae quis nihil magni? Fugiat repellat quis voluptatum suscipit, molestias nam corrupti!' }
])
</script>

<template>


  <div class="mx-auto flex flex-col gap-8 items-center py-16 max-w-5xl px-4">
    <h1 class="text-3xl font-bold text-white mb-4">
      Mes Projets
    </h1>
    <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
      <ProjectCardComponent v-for="projet in projets" :key="projet.title" :title="projet.title"
        :description="projet.description" />
    </div>
  </div>

</template>
