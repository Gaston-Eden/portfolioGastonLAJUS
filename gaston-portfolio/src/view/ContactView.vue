<script setup lang="ts">
import { ref } from 'vue'

const monEmail = 'gaston.lajus@etu.u-bordeaux.fr'
const tel = '+33 6 31 15 09 75'

const copierEmail = () => {
  navigator.clipboard.writeText(monEmail)
  emailCopie.value = true
  setTimeout(() => {
    emailCopie.value = false
  }, 2000)
}

const copierTelephone = () => {
  navigator.clipboard.writeText(tel)
  telCopie.value = true
  setTimeout(() => {
    telCopie.value = false
  }, 2000)
}
const emailCopie = ref(false)
const telCopie = ref(false)


</script>

<template>
  <section class=" mx-auto py-16 px-4 flex justify-center">
    <div class="bg-gray-900 border border-gray-800 rounded-lg  p-8 w-full max-w-lg">
      <h1 class="text-3xl font-bold text-white mb-6 text-center">Contact</h1>

      <div class="mb-6 text-center">
        <p class="text-gray-400 text-sm mb-2">Email</p>
        <div class="flex flex-row gap-3 items-center justify-center">
          <a :href="`mailto:${monEmail}`" class="text-white font-medium hover:text-indigo-400">{{ monEmail }}</a>
          <button @click="copierEmail()" class="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded text-sm flex items-center gap-2">
            <img src="../../img/copie.png" class="w-4 h-4">
            Copier
          </button>
          <span v-if="emailCopie" class="text-green-400 text-sm">✓ Copié !</span>
        </div>
      </div>

      <div class="mb-8 text-center">
        <p class="text-gray-400 text-sm mb-2">Téléphone</p>
        <div class="flex flex-row gap-3 items-center justify-center">
          <a :href="`tel:${tel}`" class="text-white font-medium hover:text-indigo-400">{{ tel }}</a>
          <button @click="copierTelephone()"
            class="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded text-sm flex items-center gap-2">
            <img src="/img/copie.png" class="w-4 h-4">
            Copier
          </button>
          <span v-if="telCopie" class="text-green-400 text-sm">✓ Copié !</span>
        </div>
      </div>

      <div class="text-center">
        <p class="text-gray-400 text-sm mb-3">Réseaux</p>
        <a href="https://www.linkedin.com/in/gaston-lajus-713372384/" target="_blank" rel="noopener"
          class="inline-flex gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded items-center">
          <img src="/img/linkedin.png" class="w-5 h-5" >
          LinkedIn
        </a>
      </div>
    </div>
  </section>
</template>
