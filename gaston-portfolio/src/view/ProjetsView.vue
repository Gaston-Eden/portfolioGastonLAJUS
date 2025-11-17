<script setup lang="ts">
import { ref } from 'vue'
import ProjectCardComponent from '@/components/ProjectCardComponent.vue'

const projets = ref([
  { title: 'Installation de poste' ,description: "Dans le cadre de ce projet, une machine virtuelle allégée a été mise en place et paramétrée afin de fournir un environnement de développement complet.  L'installation neuve comprend les outils indispensables pour le développeur, tels que SSH, Git, Gforth et Visual Studio Code, accompagnés d'un manuel d'utilisation détaillé.  L'implémentation se base sur l'emploi de scripts Bash et de commandes propres à la distribution Linux Ubuntu.  Cette tâche a contribué à améliorer les compétences en gestion des systèmes Linux, en configuration d'utilisateurs et en automatisation grâce à Bash." , img:"img/lubuntu.png"},
  { title: 'Creation BD', description: "Dans le cadre de ce projet, j'ai élaboré une base de données relationnelle en SQL, apte à traiter les AOP (options) ainsi que les requêtes et contraintes qui y sont liées.  Le projet contient un script SQL exhaustif qui garantit la construction structurée de la base de données et l'insertion de données d'essai, assurant ainsi la fiabilité et la reproductibilité du système.  La technologie utilisée se base sur la modélisation MCD et l'exploitation poussée du langage SQL pour une structuration idéale, ce qui perfectionne mes aptitudes en conception relationnelle et en gestion de bases de données professionnelles. ​", img:"img/sql.webp" },
  { title: 'Presentation JPO', description: "Lors de la journée portes ouvertes de l'IUT informatique de Bordeaux, nous avons élaboré à plusieurs un jeu éducatif en Java, avec des niveaux interactifs et scénarisés, afin d'aider à l'apprentissage de la programmation en traitant les concepts de fonctions, variables, boucles et conditions.  Le projet comportait un guide approfondi pour diriger l'atelier et mettait l'accent sur l'emploi de git pour la coopération, améliorant par conséquent mes aptitudes en enseignement, collaboration et vulgarisation technique autour du langage Java." , img:"img/java2.png" },
  { title: 'Jeu de plateau', description:"Dans le cadre de ce projet, l'objectif était d'ajouter de nouvelles fonctionnalités sous forme de niveaux dans un jeu de société développé en Java, avec une exigence spécifique : créer trois niveaux chaque semaine dans un délai imparti.  Le produit final est un jeu jouable en Java qui comprend la majorité des niveaux prévus, et sa qualité est assurée grâce à des tests unitaires et fonctionnels.  Cette tâche souligne la capacité à intégrer des modifications dans une base de code déjà existante, tout en organisant et validant le développement logiciel grâce à une démarche méthodique et collaborative. ​",img:"img/lowatem.png"  },
  { title: 'Des graphes', description:"Dans le cadre de ce projet, une application Java a été conçue pour représenter des graphes en recourant à deux structures fondamentales : la liste d'adjacence et la matrice d'adjacence, dans le but de comparer leur complexité et leur performance.  Nous avons mis en place l'algorithme Force Directed avec auto-sizing pour assurer une représentation interactive et claire des graphes. Le code comprend également des tests unitaires et fonctionnels afin de garantir sa solidité.  Cette tâche a impliqué la compréhension d'un code existant, l'utilisation de principes mathématiques pour le graphisme ainsi qu'une rigueur et une communication efficace au sein du groupe.", img:"img/graph.png" },


])
</script>

<template>


  <div class="mx-auto flex flex-col gap-8 items-center py-16 max-w-5xl px-4">
    <h1 class="text-3xl font-bold text-white mb-4">
      Mes Projets
    </h1>
    <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
      <ProjectCardComponent v-for="projet in projets" :key="projet.title" :title="projet.title"
        :description="projet.description" :img="projet.img" />
    </div>
  </div>

</template>
