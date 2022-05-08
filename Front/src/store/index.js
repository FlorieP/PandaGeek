import { createStore } from 'vuex'
import menu from './modules/ui/menu.js'
import profile from './modules/profile.js'

// Create a new store instance.
const store = createStore({
    modules: {
        menu,
        profile
    },
    state () {
        return {
            initialized : false
        }
    },
})

//Permet d'accéder au store depuis la console
window.store = store;

//Exportation du store
export default store;