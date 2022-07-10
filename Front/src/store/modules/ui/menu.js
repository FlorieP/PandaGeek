
const state = () => ({
    open: true
})

const actions = {
    //Permet l'affichage ou non du Menu
    toggle ({ state, commit }) {
        commit('setOpen', !state.open)
        return
    }

}

const mutations = {
    //Permet la maj du status d'open dans state
    setOpen (state, open) {
        state.open = open;
    }

}

export default {
    namespaced: true,
    state,
    actions,
    mutations
  }
