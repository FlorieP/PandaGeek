<template>
    <Header/>
    <div class="p-content">
        <Menu/>
        <div class="p-page">
            <HomePage/>
        </div>
    </div>
</template>

<script>
    import Header from './layout/Header.vue'
    import Menu from './layout/Menu.vue'
    import HomePage from './views/HomePage.vue'

    export default {
        name: 'App',
        components: {
            Header,
            Menu,
            HomePage
        }
    }
</script>

<style>
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
</style>
