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
        padding: 20px;
    }
    .p-audiowide {
        font-family: 'Audiowide', cursive;
    }
    .p-flex, .p-flex-spaced {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .p-flex-spaced > *:not(:last-child) {
        flex: 1;
        margin: 10px;
    }

    .p-flex > * {
        flex: 1;
    }
    .flex-0 { flex: none !important; }
    .flex-1 { flex: 1; }
    .flex-2 { flex: 2; }
    .flex-3 { flex: 3; }
    .flex-4 { flex: 4; }
    .flex-5 { flex: 5; }
    .flex-6 { flex: 6; }
    .flex-7 { flex: 7; }
    .flex-8 { flex: 8; }
    .flex-9 { flex: 9; }
    .flex-10 { flex: 10; }
    .flex-11 { flex: 11; }
    .flex-12 { flex: 12; }
</style>
