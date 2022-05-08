<template>
    <h1 class="p-audiowide" >Playground 🐼🎮</h1>
    <p>
        <h2 class="p-playground-title">Icon Button</h2>
        <div class="p-flex">
            <IconButton
                icon="fa-ghost"
                color="orange"
                class="flex-0"
            />
            <IconButton
                icon="fa-ghost"
                color="blue"
                class="flex-0"
            />
            <IconButton
                icon="fa-ghost"
                color="red"
                class="flex-0"
            />
            <IconButton
                icon="fa-ghost"
                color="green"
                class="flex-0"
            />
        </div>

        <h2 class="p-playground-title">Button</h2>
        <!-- TODO : Button -->

        <h2 class="p-playground-title">Input</h2>
        <!-- TODO : Field -->
    </p>
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
h1 {
    text-align: center;
}
.p-playground-title {
    padding: 10px 0px;
    border-bottom: 1px solid lightgray;
}
</style>
