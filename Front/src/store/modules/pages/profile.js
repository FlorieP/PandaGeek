
const state = () => ({
    id: '',
    pseudo: '',
    email: ''
})

const getters = {
    //
    isLogged(state) {
        if (state.id) {
            return true
        }
        return false
    }
}

const actions = {
    //
    //toggle ({ state, commit }) {
    //    commit('setOpen', !state.open)
    //    return
    //}

}

const mutations = {

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
  }