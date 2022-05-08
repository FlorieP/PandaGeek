
const state = () => ({
    open: true
})

const actions = {

    toggle ({ state, commit }) {
        commit('setOpen', !state.open)
        return
    }

}

const mutations = {

    setField (state, {field, value}) {
        state[field] = value
    },

    setOpen (state, open) {
        state.open = open;
    }

}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
  }