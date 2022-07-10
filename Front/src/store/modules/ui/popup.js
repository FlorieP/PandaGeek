
const state = () => ({
    open: [],
})

const actions = {

    open ({ state, commit }, popupId) {
        if (state.open.indexOf(popupId) == -1) {
            state.open.push(popupId);
        }
        return
    },

    close ({ state, commit }, popupId) {
        if (popupId) {
            const openIdx = state.open.indexOf(popupId);
            if (openIdx > -1) {
                state.open.splice(openIdx, 1);
                commit('setOpen', state.open);
            }
        } else {
            commit('setOpen', []);
        }
        return
    }

}

const mutations = {

    setOpen (state, open) {
        state.open = open;
    }

}

const getters = {

    isOpen: (state) => (popupId) => {
      return state.open.indexOf(popupId) > -1;
    }

}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
