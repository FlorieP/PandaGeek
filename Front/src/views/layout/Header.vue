<template>
    <div class="p-header">
        <IconButton
            icon="fa-bars"
            color="black"
            @click="handleMenuClick()"
        />
        <IconButton
            icon="fa-home"
            color="white"
            @click="handleHomeClick()"
        />
        <div class="p-header-title p-audiowide">
            PandaGeek
        </div>
        <IconButton
            icon="fa-user-plus"
            color="white"
            @click="handleLoginClick()"
            v-if="!isLogged"
        />
        <IconButton
            icon="fa-user-astronaut"
            color="white"
            @click="handleProfileClick()"
            v-if="isLogged"
        />
    </div>
</template>

<script>
    //Importation Getters / State
    import { mapGetters } from "vuex"; 
    //Importation composants vue
    import IconButton from '../ui/IconButton.vue'

    export default {
        name: 'PlaygroungPage',
        components: {
            IconButton
        },
        computed: {
            ...mapGetters(
                "profile", ["isLogged"]
            ),
        },
        methods: {
            handleMenuClick: function () {
                this.$store.dispatch("menu/toggle")
            },
            handleHomeClick: function () {
                this.$router.push("/");
            },
            handleLoginClick: function () {
                this.$router.push("/login");
            },
            handleProfileClick: function () {
                this.$router.push("/profile");
            },

        },
    }

</script>

<style scoped>
    .p-header {
        padding: 10px;
        background-color: #4DD0E1;
        color: black;
        display: flex;
        align-items: center;
    }
    .p-header-title {
        color: black;
        padding: 0px 10px;
        font-size: 1.75em;
        text-align: center;
        flex: 1;
    }
</style>
