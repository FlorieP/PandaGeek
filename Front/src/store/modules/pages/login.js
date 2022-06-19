///// Importation des moduldes de Vue /////
const axios = require('axios');

const state = () => ({
    pseudo: '',
    email: '',
    password:''
})

const getters = {
    //
}

const actions = {
    //Fonction d'inscription de l'utilisateur
    signup ({ state, commit }) {
        console.log(state)
        console.log(commit)
       // return new Promise ((resolve, reject) => {
       //     axios.post('http://localhost:3000/api/user/signup',  )
       // })
    },
    //Fonction de connexion de l'utilisateur
    login ({ state, commit }) {
        return
    }

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