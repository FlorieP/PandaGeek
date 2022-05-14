<template>
    <div class="p-menu" v-if="open" >
        <div class="p-menu-item" @click="handleMenuItemClick">
            Playground
        </div>    
    </div>
</template>

<script>
//Importation module Vuex
//import { mapState } from 'vuex'
export default { 
    computed: {
        open() {
            return this.$store.state.menu.open
        }
    },
    methods: {
        //Fonction de modification du profil
        handleMenuItemClick: function () {
            this.$router.push("/playground");
        },
    },
}
</script>

<style scoped>
    .p-menu {
        padding: 10px;
        background-color: #eceff1;
    }
</style>
