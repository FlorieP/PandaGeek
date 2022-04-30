<template>
    <div class="p-menu">
        <div class="p-menu-item" @click="handleMenuItemClick">
            Playground
        </div>    
    </div>
</template>

<script>
export default { 
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
        background-color: lightgray;
    }
</style>
