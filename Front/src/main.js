import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index.js'

//Importation du router
import router from './router';

//Création et montage de l'application 
createApp(App).use(router).use(store).mount('#app')
