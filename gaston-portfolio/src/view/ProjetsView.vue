<script setup lang="ts">
import ProjectCardComponent from '@/components/ProjectCardComponent.vue'
</script>

<template>
  <div>
    <h1 class="text-3xl text-blue-500">Mes Projets</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ProjectCardComponent title="test" description="testtesttesttesttest" />
      <ProjectCardComponent title="test" description="testtesttesttest" />
      <ProjectCardComponent title="test" description="testtesttest" />
    </div>
  </div>
</template>
