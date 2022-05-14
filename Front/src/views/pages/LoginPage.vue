<template>
  <div class="p-body">
    <div class="p-card">
      <!----- Entête ----->
      <h1 class="p-card-title p-audiowide" v-if="mode == 'login'">Connexion</h1>
      <h1 class="p-card-title p-audiowide" v-else>Inscription</h1>
      <p class="p-card-subtitle" v-if="mode == 'login'">
        Tu n'as pas encore de compte ?
        <span class="p-card-action" @click="switchToSignup()"
          >Créer un compte</span
        >
      </p>
      <p class="p-card-subtitle" v-else>
        Tu as déjà un compte ?
        <span class="p-card-action" @click="switchToLogin()">Se connecter</span>
      </p>
      <!----- Formulaire ----->
      <div class="p-form" v-if="mode == 'signup'">
        <input v-model="pseudo" class="p-form-input" type="text" placeholder="Pseudo"/>
      </div>
      <div class="p-form">
        <input v-model="email" class="p-form-input" type="email" placeholder="Adresse mail"/>
      </div>
      <div class="p-form">
        <input v-model="password" class="p-form-input" type="password" placeholder="Mot de passe"/>
      </div>
      <div class="p-form message_error" v-if="mode == 'login' && status == 'error_login'">
        <p>Adresse mail et/ou mot de passe invalide</p>
      </div>
      <div class="p-form message_error" v-if="mode == 'create' && status == 'error_create'">
        <p>Adresse mail déjà utilisée</p>
      </div>
      <!----- Boutons ----->
      <div class="p-form">
        <button @click="login()" class="button" :class="{ 'button--disabled': !validatedFields }" v-if="mode == 'login'">
          <span v-if="status == 'loading'">Connexion en cours</span>
          <span v-else>Se connecter</span>
        </button>
        <button @click="signup()" class="button" :class="{ 'button--disabled': !validatedFields }" v-else>
          <span v-if="status == 'loading'">Création en cours</span>
          <span v-else>Créer mon compte</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
//Importation module Vuex
import { mapState } from 'vuex'

export default {
  data: function () {
    //déclération de variable
    return {
      mode: "login",
      pseudo: "",
      email: "",
      password: "",
    };
  },
  computed: {
    //Permet de valider si les champs sont remplis ou non
    validatedFields: function () {
      if (this.mode == "signup") {
        if (
          this.pseudo != "" &&
          this.email != "" &&
          this.password != ""
        ) {
          return true;
        } else {
          return false;
        }
      } else {
        if (this.email != "" && this.password != "") {
          return true;
        } else {
          return false;
        }
      }
    },
    //Permet de récupérer les données du state du store 
    ...mapState(['status'])
  },
  methods: {
    //Permet de passer de la fonction connexion à inscription
    switchToLogin: function () {
      this.mode = "login";
    },
    //Permet de passer de la fonction inscription à connexion
    switchToSignup: function () {
      this.mode = "signup";
    },
    //Fonction d'inscription de l'utilisateur
    signup: function () {
      const self = this;
      this.$store.dispatch('signup',  {
        email: this.email,
        pseudo: this.pseudo,
        password: this.password
      })
      .then(response => {
        console.log(response);
        self.login();
      }, error => {
        console.log(error.message)
      })
    },
    //Fonction de connexion de l'utilisateur
    login: function () {
      const self = this.$router;
      this.$store.dispatch('login',  {
        email: this.email,
        password: this.password
      })
      .then(response => {
        console.log(response);
        self.push('/accueil');
      }, error => {
        console.log(error.message)
      })
    },
  },
};
</script>

<style scoped>
.p-body {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 88vh;
}
.p-card {
  max-width: 100%;
  width: 400px;
  background: #ffecb3;
  /*background: #eceff1;*/
  border-radius: 16px;
  padding: 20px 30px;
}
.p-card-title {
  text-align: center;
  font-weight: 800;
  margin: 5px;
}
.p-card-subtitle {
  text-align: center;
  color: #424242;
  font-weight: 500;
}
.button {
  background: #ffb74d;
  color: black;
  border-radius: 8px;
  font-weight: 800;
  font-size: 15px;
  border: none;
  width: 100%;
  padding: 16px;
  transition: 0.4s background-color;
}
.p-card-action {
  color: #ffb74d;
  text-decoration: underline;
}
.p-card-action:hover {
  cursor: pointer;
}
.button:hover {
  cursor: pointer;
  background: #ffb74d;
}
.button {
  background: white;
  color: #424242;
}
.button:hover {
  background: #ffb74d;
}

.p-form {
  display: flex;
  margin: 16px 0px;
  gap: 16px;
  flex-wrap: wrap;
}

.message_error {
  color: #b71c1c;
  justify-content: center;
  font-size: 13px;
}

.p-form-input {
  padding: 8px;
  border: none;
  border-radius: 8px;
  background: white;
  font-weight: 500;
  font-size: 16px;
  flex: 1;
  min-width: 100px;
  color: black;
}

.p-form-input::placeholder {
  color: #aaaaaa;
}
/******************** RESPONSIVE ********************/
/******** MOBILE ********/
@media screen and (max-width: 505px){
body{
  margin: 5px;
} 
.p-card {
  width: 100%;
}
.p-card .p-card-subtitle{
  display: flex;
  flex-direction: column;
}
}
</style>