<template>
    <div class="p-header">
        <IconButton
            icon="fa-bars"
            color="white"
        />
        <IconButton
            icon="fa-home"
            color="white"
        />
        <div class="p-header-title">
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
        }
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
        font-family: 'Audiowide', cursive;
        font-size: 1.75em;
        text-align: center;
        flex: 1;
    }
</style>
