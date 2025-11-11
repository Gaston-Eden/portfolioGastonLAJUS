import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../view/homeView.vue'
import ProjetsView from '@/view/ProjetsView.vue'
import ContactView from '@/view/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },

    {
      path: '/Contact',
      name: 'contact',
      component: ContactView,
    },

    {
      path: '/Projets',
      name: 'projets',
      component: ProjetsView,
    },
  ],
})

export default router
