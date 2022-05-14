<template>
    <h1 class="p-audiowide" >Playground 🐼🎮</h1>
    <p>
        <h2 class="p-playground-title">Icon Button</h2>
        <Row :elastic="false">
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
        </Row>

        <h2 class="p-playground-title">Button</h2>
        <!-- TODO : Button -->

        <h2 class="p-playground-title">Fields</h2>
        <Column>

            <div class="p-playground-subtitle">Input</div>
            <Row class="p-playground-card">
                <Field
                    placeholder="flat"
                    type="text"
                    variant="flat"
                />
                <Field
                    placeholder="outlined primary"
                    type="text"
                    variant="outlined"
                    color="primary"
                />
                <Field
                    placeholder="outlined secondary"
                    type="text"
                    variant="outlined"
                    color="secondary"
                />
                <Field
                    placeholder="outlined custom color"
                    type="text"
                    variant="outlined"
                    color="#BA68C8"
                />
            </Row>

            <div class="p-playground-subtitle">Select</div>

            <div class="p-playground-subtitle">Checkbox</div>
        </Column>
    </p>
</template>

<script>
    import IconButton from '../ui/IconButton.vue'
    import Field from '../form/Field.vue'
    import Row from '../form/Row.vue'
    import Column from '../form/Column.vue'

    export default {
        name: 'PlaygroungPage',

        components: {
            IconButton,
            Field,
            Row
        },

        data: function () {
            return {
                inputValue: '',
            }
        },
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

    .p-playground-subtitle {
        font-weight: bold;
        color: gray;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .p-playground-card {
        padding: 10px;
        background: #ECEFF1;
        border-radius: 8px;
    }

</style>
