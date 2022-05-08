<template>
    <Header/>
        <div class="p-content">
            <Menu/>
            <div class="p-page">
                <router-view />
            </div>
        </div>
</template>

<script>
    import Header from './views/layout/Header.vue'
    import Menu from './views/layout/Menu.vue'

    export default {
        name: 'App',
        components: {
            Header,
            Menu,
        }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Audiowide&display=swap');
    html {
        height: 100%;
    }
    body {
        margin:  0px;
        height: 100%;
    }
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: stretch;
    }
    .p-content {
        display: flex;
        flex: 1;
        overflow: auto;
    }
    .p-page {
        overflow-y: scroll;
        flex: 1;
    }
    .p-audiowide {
        font-family: 'Audiowide', cursive;
    }
</style>
