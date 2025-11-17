<template>

  <div class="min-h-[50vh] flex flex-col justify-center items-center bg-black">
    <div class=" rounded-2xl flex flex-col items-center mt-16 w-full max-w-md  relative overflow-hidden">

      <img src="/img/PhotoGastonLAJUS.png" alt="Gaston LAJUS"
        class="w-24 h-24 rounded-full  mb-5 border-4 border-gray-700 object-cover" />
      <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-2">Gaston LAJUS</h1>
      <p class="text-lg md:text-xl font-medium text-gray-300">Développeur Full-Stack</p>
      <div class="mt-4 flex gap-3">
        <router-link to="/Projets" class="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md">Voir mes
          projets</router-link>
        <router-link to="/Contact" class="bg-transparent border border-gray-700 text-gray-200 px-4 py-2 rounded-md">Me
          contacter</router-link>
      </div>
    </div>
  </div>


  <div class="max-w-2xl mx-auto flex flex-col gap-8 text-center mt-16 mb-32 px-6">
    <h2 class="text-3xl font-bold text-white">
      À PROPOS DE MOI.
    </h2>
    <p class="text-lg text-gray-300">
      Je suis Gaston LAJUS, étudiant en IUT informatique à l'université de Bordeaux.
      Sur ce portfolio, vous découvrirez des projets qui m'ont tenu à cœur.
      À travers ce portfolio, je vous invite à découvrir mes projets et mon évolution depuis le début.
    </p>
  </div>
</template>
