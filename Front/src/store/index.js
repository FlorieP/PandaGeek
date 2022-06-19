import { createStore } from 'vuex'
import menu from './modules/ui/menu.js'
import playground from './modules/pages/playground.js'
import profile from './modules/pages/profile.js'
import login from './modules/pages/login'
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
        login,
        profile,

        // -

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
