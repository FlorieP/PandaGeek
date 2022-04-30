//Importation des modules du routeur
import { createWebHistory, createRouter } from "vue-router";

//Importation des routes
import HomePage from "@/views/HomePage.vue";
import PlaygroundPage from "@/views/PlaygroundPage.vue";

//Création du tableau de routes
const routes = [
  //route pour la page d'accueil
  {
    name: 'home',
    path: '/',
    component: HomePage,
  },
  {
    name: 'playground',
    path: '/playground',
    component: PlaygroundPage,
  },
]

//Création du router
const router = createRouter({
  history: createWebHistory(),
  routes,
})

//Exportation du router
export default router;