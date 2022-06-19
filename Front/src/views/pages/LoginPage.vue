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
        <Field
          className="p-login-field"
          placeholder="Pseudo"
          type="text"
          variant="flat"
          :savePath="['login', 'pseudo']"
        />
      </div>
      <div class="p-form">
        <Field
          className="p-login-field"
          placeholder="Email"
          type="email"
          variant="flat"
          :savePath="['login', 'email']"
        />
      </div>
      <div class="p-form">
        <Field
          className="p-login-field"
          placeholder="Mot de passe"
          type="password"
          variant="flat"
          :savePath="['login', 'password']"
        />
      </div>
      <div class="p-form message_error" v-if="mode == 'login' && status == 'error_login'">
        <p>Adresse mail et/ou mot de passe invalide</p>
      </div>
      <div class="p-form message_error" v-if="mode == 'create' && status == 'error_create'">
        <p>Adresse mail déjà utilisée</p>
      </div>
      <!----- Boutons ----->
      <div class="p-form">
        <Button
          id="btn-login"
          @click="login()"
          variant= "contained"
          color="secondary"
          :disabled="!validatedFields"
          v-if="mode == 'login'"
        >
        <span>Se connecter</span>
        </Button>
        <Button
          id="btn-signup"
          @click="signup()"
          variant= "contained"
          color="secondary"
          :disabled="!validatedFields"
          v-if="mode == 'signup'"
        >
          <span>Créer mon compte</span>
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
//Importation module Vuex
import { mapState } from 'vuex'
import Field from '../form/Field.vue'
import Button from '../ui/Button.vue';

export default {
  name: 'PlaygroungPage',

  components: {
    Field,
    Button,
  },
  
  data: function () {
    
    //déclération de variable
    return {
      mode: "login"
    };
  },
  computed: {
    //Permet de valider si les champs sont remplis ou non
    validatedFields: function () {
      if (this.mode == "signup") {
        if (
          this.$store.state.login.pseudo != "" &&
          this.$store.state.login.email != "" &&
          this.$store.state.login.password != ""
        ) {
          return true;
        } else {
          return false;
        }
      } else {
        if (this.$store.state.login.email != "" && this.$store.state.login.password != "") {
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
      console.log("entrée signup")
      this.$store.dispatch('login/signup')
      .then(response => {
        console.log('signup' +response);
        self.login();
      }, error => {
        console.log(error.message)
      })
    },
    //Fonction de connexion de l'utilisateur
    login: function () {
      const self = this.$router;
      console.log("entrée login")
      this.$store.dispatch('login/login')
      .then(response => {
        console.log('login' + response);
        // self.push('/accueil');
      }, error => {
        console.log(error.message)
      })
    },
  },
};
</script>

<style>
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
.p-card-action {
  color: #ffb74d;
  text-decoration: underline;
}
.p-card-action:hover {
  cursor: pointer;
}
.p-form {
  display: flex;
  margin: 16px 0px;
  flex-wrap: wrap;
  flex: 1;
}
.p-login-field {
  padding: 16px;
}
.message_error {
  color: #b71c1c;
  justify-content: center;
  font-size: 13px;
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
