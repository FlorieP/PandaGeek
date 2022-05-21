import { createStore } from 'vuex'
import menu from './modules/ui/menu.js'
import playground from './modules/pages/playground.js'
import profile from './modules/profile.js'
import theme from './modules/theme.js'


// Create a new store instance.
const store = createStore({
    modules: {

        // UI
        // -

        menu,

        // Pages
        // -

        playground,

        // -

        profile,
        theme,
    },

    state () {
        return {
            initialized : false,
        }
    },
})

//Permet d'accéder au store depuis la console
window.store = store;

//Exportation du store
export default store;
