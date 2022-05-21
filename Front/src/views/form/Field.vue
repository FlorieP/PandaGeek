<template>
    <div class="p-field">

        <!-- Input -->
        <input
            v-if="kind == 'input'"

            :value="getValue"
            :type="[type]"
            :placeholder="[placeholder]"
            :class="[
                'p-input',
                variant
            ]"

            @click="handleInputFocus()"
            @blur="handleInputBlur()"
            @input="setValue"
        />

        <!-- Select -->

        <!-- Checkbox -->

    </div>
</template>

<script>
     import { mapState } from "vuex";

    let self = '';

    export default {
        name: 'Field',

        data: function () {
            return {
                focused: false,
            }
        },

        props: {
            kind: {
                type: String,
                default: 'input', // input, select, checkbox
            },
            placeholder: {
                type: String,
                default: '',
            },
            type: {
                type: String,
                default: 'text', // text, number, password, date ...
            },
            variant: {
                type: String,
                default: 'flat', // flat, outlined
            },
            color: {
                type: String,
                default: 'primary', // primary, secondary, ...
            },
            savePath: {
                type: Array,
                default: [],
            },
        },

        computed: {

            focusedColor() {
                if (this.color == 'primary') {
                    return this.$store.state.theme.colors.primary;
                }
                if (this.color == 'secondary') {
                    return this.$store.state.theme.colors.secondary;
                }
                return (this.color) ? this.color : 'black';
            },

            getValue() {

                // VB : Petit algo pour choper la valeur à afficher dans l'input en parcourant le store à partir de la racine
                // Ex : savePath = ['playground', 'test_input'] -> this.$store.playground.test_input

                if (this.savePath && this.savePath.length > 0) {
                    let loadTarget = this.$store.state;
                    for (const idxPath in this.savePath) {
                        var target = this.savePath[idxPath];
                        if (idxPath == this.savePath.length - 1) {
                            return loadTarget[target];
                        } else {
                            loadTarget = loadTarget[target];
                        }
                    }
                }
                return '';
            },

            ...mapState([self.savePath]),
        },

        methods: {

            handleInputFocus: function () {
                this.focused = true;
            },

            handleInputBlur: function () {
                this.focused = false;
            },

            // -

            setValue(e) {
                const value = e.target.value;

                // VB : Presque le même algo que dans getValue, mais cette fois pour mettre à jour la valeur

                let saveTarget = this.$store.state;
                for (const idxPath in this.savePath) {
                    var target = this.savePath[idxPath];
                    if (idxPath == this.savePath.length - 1) {
                        saveTarget[target] = value;
                    } else {
                        try {
                            saveTarget[target];
                        } catch(err) {
                            if (!saveTarget.hasOwnProperty(target)) {
                                saveTarget[target] = {};
                            }
                        }
                        saveTarget = saveTarget[target];
                    }
                }
            },
        },

        beforeCreate() {
            // VB : Cette diablerie sert à pouvoir accéder aux props dans computed (pour info, on s'en sert par pour l'instant)
            self = this;
        },
    }
</script>

<style scoped>

    /* Input */

    .p-input {
        padding: 8px;
        border: none;
        border-radius: 8px;
        background: white;
        font-weight: 500;
        font-size: 16px;
        flex: 1;
        min-width: 40px;
        color: black;
        border: 2px solid transparent;
        outline: none;
    }

    .p-input.outlined {
        border: 2px solid lightgray;
    }

    .p-input:focus {
        border: 2px solid v-bind(focusedColor);
    }

    /* Select */

    /* Checkbox */

</style>
