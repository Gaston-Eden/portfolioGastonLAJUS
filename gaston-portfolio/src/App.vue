<script setup>
import Header from './components/headerComponents.vue'
</script>

<template>
  <div class="relative min-h-screen bg-slate-950 text-white overflow-hidden font-sans">

    <div class="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[120px] animate-pulse"></div>

    <div class="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[100px]"></div>

    <div class="absolute top-[40%] left-[30%] w-[300px] h-[300px] bg-pink-600/20 rounded-full blur-[80px] opacity-50"></div>

    <div class="relative z-10">

      <Header /> <main class="container mx-auto p-4">
        <RouterView />
      </main>

    </div>
  </div>
</template>
