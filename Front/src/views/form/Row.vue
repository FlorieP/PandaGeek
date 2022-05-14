<template>
    <div
        :class="['p-row', (elastic) ? 'elastic' : '']"
    >
        <slot />
    </div>
</template>

<script>
    export default {
        props: {
            elastic: {
                type: Boolean,
                defaut: false,
            }
        },
        name: 'Row',
    }
</script>

<style>

    .p-row {
        display: flex;
        align-items: flex-start;
    }

    .p-row.elastic * {
        flex: 1;
    }

</style>
