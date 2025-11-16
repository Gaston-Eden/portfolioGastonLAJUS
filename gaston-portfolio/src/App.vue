<script setup>

import Header from './components/headerComponents.vue'



</script>

<template>
  <div class="min-h-screen bg-black text-white antialiased">
    <Header/>
    <main class="container mx-auto p-4">
      <RouterView />
    </main>
  </div>
</template>

<style scoped></style>
