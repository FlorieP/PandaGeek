import { createApp } from 'vue'

import App from './App.vue'
import store from './store/index.js'

//Importation du router
import router from './router';


//Création et montage de l'application 
// const app = createApp(App).use(router).use(store).mount('#app')

const app = createApp(App)
const rootComponent = app.use(store)
  .use(router)
  .mount("#app");

// app.config.compilerOptions.isCustomElement = tag => [
// 	'Column'
// ].includes(tag)
