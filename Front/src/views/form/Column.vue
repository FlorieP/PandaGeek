<template>
    <div class="p-column">
        <slot />
    </div>
</template>

<script>
    export default {
        name: 'Column',
    }
</script>

<style>

    .p-column {
        display: flex;
        flex-direction: column;
        align-items: stretch;
    }

</style>
