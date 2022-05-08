//Importation des modules du routeur
import { createWebHistory, createRouter } from "vue-router";

//Importation des routes
import HomePage from "@/views/pages/HomePage.vue";
import PlaygroundPage from "@/views/pages/PlaygroundPage.vue";
import ProfilePage from "@/views/pages/ProfilePage.vue";
import LoginPage from "@/views/pages/LoginPage.vue";

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
  {
    name: 'profile',
    path: '/profile',
    component: ProfilePage,
  },
  {
    name: 'login',
    path: '/login',
    component: LoginPage,
  },
]

//Création du router
const router = createRouter({
  history: createWebHistory(),
  routes,
})

//Exportation du router
export default router;