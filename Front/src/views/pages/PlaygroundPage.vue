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
        <Row class="p-playground-card">
            <Column class="p-playground-card">
                <div class="p-playground-subtitle">Text</div>
                <Button
                    variant="text"
                    color="primary"
                >
                Full Primary
                </Button>
                <Button
                    variant="text"
                    color="secondary"
                >
                Full Secondary
                </Button>
                <Button
                    variant="text"
                    color="#BA68C8"
                >
                Full Custom
                </Button>
            </Column>
            <Column class="p-playground-card">
                <div class="p-playground-subtitle">Contained</div>
                <Button
                    variant="contained"
                    color="primary"
                >
                Full Primary
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                >
                Full Secondary
                </Button>
                <Button
                    variant="contained"
                    color="#BA68C8"
                >
                Full Custom
                </Button>
            </Column>
            <Column class="p-playground-card">
                <div class="p-playground-subtitle">Outlined</div>
                <Button
                    variant="outlined"
                    color="primary"
                >
                Outlined Primary
                </Button>
                <Button
                    variant="outlined"
                    color="secondary"
                >
                Outlined Secondary
                </Button>
                <Button
                    variant="outlined"
                    color="#BA68C8"
                >
                Outlined Custom
                </Button>
            </Column>
        </Row>

        <h2 class="p-playground-title">Fields</h2>
        <Column>
            <div class="p-playground-subtitle">Input</div>
            <Row
                class="p-playground-card"
                :elastic="true"
            >
                <Field
                    placeholder="flat"
                    type="text"
                    variant="flat"
                    :savePath="['playground', 'test_input']"
                />
                <Field
                    placeholder="outlined primary"
                    type="text"
                    variant="outlined"
                    color="primary"
                    :savePath="['playground', 'test_input']"
                />
                <Field
                    placeholder="outlined secondary"
                    type="text"
                    variant="outlined"
                    color="secondary"
                    :savePath="['playground', 'test_input']"
                />
                <Field
                    placeholder="outlined custom color"
                    type="text"
                    variant="outlined"
                    color="#BA68C8"
                    :savePath="['playground', 'test_input']"
                />
            </Row>

            <div class="p-playground-subtitle">Select</div>

            <div class="p-playground-subtitle">Checkbox</div>
        </Column>

        <h2 class="p-playground-title">Popups</h2>
        <Row
            class="p-playground-card"
            :elastic="true"
        >
            <Button
                variant="contained"
                color="primary"
                @click="handleOpenPopup('popup1')"
            >
                Dialog
            </Button>
            <Button
                variant="contained"
                color="secondary"
                @click="handleOpenPopup('popup2')"
            >
                Modal
            </Button>
        </Row>
    </p>

    <Popup
        id="popup1"
        title="Dialog"
        :showFooter="true"
    >
        Contenu popup 1
        <template v-slot:footer>
            <Button
                color="default"
                @click="handleClosePopup('popup1')"
            >
                Annuler
            </Button>
            <Button
                color="primary"
            >
                Valider
            </Button>
        </template>
    </Popup>

    <Popup
        id="popup2"
        title="Modal"
        :showFooter="true"
    >
        Contenu popup 2
        <template v-slot:footer>
            Footer !
        </template>
    </Popup>

</template>

<script>
    import IconButton from '../ui/IconButton.vue'
    import Field from '../form/Field.vue'
    import Row from '../form/Row.vue'
    import Column from '../form/Column.vue'
    import Button from '../ui/Button.vue'
    import Popup from '../ui/Popup.vue'

    export default {
        name: 'PlaygroungPage',

        components: {
            IconButton,
            Field,
            Button,
            Row,
            Column,
            Popup
        },

        data: function () {
            return {
                inputValue: '',
            }
        },

        methods: {
            handleOpenPopup: function(popupId) {
                this.$store.dispatch('popup/open', popupId);
            },
            handleClosePopup: function(popupId) {
                this.$store.dispatch('popup/close', popupId);
            },
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
