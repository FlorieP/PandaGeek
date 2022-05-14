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
        border-right: 1px solid #E7EBF0;
    }

    .p-menu-item {
        font-size: 14px;
        padding: 10px 20px;
        cursor: pointer;
        user-select: none;
        transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    }
    .p-menu-item:hover {
        background-color: rgba(77, 208, 225, 0.1);
    }
    .p-menu-item:active  {
        background-color: rgba(77, 208, 225, 0.2);
    }
</style>
