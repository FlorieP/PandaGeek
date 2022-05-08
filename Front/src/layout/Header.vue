<template>
    <div class="p-header">
        <IconButton
            icon="fa-bars"
            color="white"
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
    </div>
</template>

<script>
    import IconButton from '../ui/IconButton.vue'

    export default {
        name: 'PlaygroungPage',
        components: {
            IconButton
        },
        methods: {
            handleMenuClick: function () {
                this.$store.dispatch("menu/toggle")
            },
            handleHomeClick: function () {
                this.$router.push("/");
            },

        },
    }

</script>

<style scoped>
    .p-header {
        padding: 10px;
        background-color: rebeccapurple;
        color: white;
        display: flex;
        align-items: center;
    }
    .p-header-title {
        color: white;
        padding: 0px 10px;
        font-size: 1.75em;
        text-align: center;
        flex: 1;
    }
</style>
