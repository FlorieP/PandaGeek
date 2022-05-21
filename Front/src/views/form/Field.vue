<template>
    <div class="p-field">

        <!-- Input -->
        <input
            v-if="kind == 'input'"
            v-model="value"

            :type="[type]"
            :placeholder="[placeholder]"
            :class="[
                'p-input',
                variant
            ]"

            @click="handleInputFocus()"
            @blur="handleInputBlur()"
        />

        <!-- Select -->

        <!-- Checkbox -->

    </div>
</template>

<script>
    // let self = '';

    export default {
        name: 'Field',

        created() {

            // On chope la valeur au bout du "savePath" dans l'arborescence du store pour la recopier dans le state "value"
            // ---

            if (this.savePath && this.savePath.length > 0) {
                let loadTarget = this.$store.state;
                for (const idxPath in this.savePath) {
                    var target = this.savePath[idxPath];
                    if (idxPath == this.savePath.length - 1) {
                        const value = loadTarget[target];
                        this.value = value;
                    } else {
                        loadTarget = loadTarget[target];
                    }
                }
            }
        },

        data: function () {
            return {
                value: '',
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
                type: String,
                default: '',
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

            inputValue() {
                return this.value;
            },

        },

        methods: {

            handleInputFocus: function () {
                this.focused = true;
            },

            handleInputBlur: function () {
                this.focused = false;

                let saveTarget = this.$store.state;
                for (const idxPath in this.savePath) {
                    var target = this.savePath[idxPath];
                    if (idxPath == this.savePath.length - 1) {
                        saveTarget[target] = this.value;
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

        // beforeCreate() {

        //     // VB : Cette diablerie sert à pouvoir accéder aux props dans computed (pour info, on s'en sert par pour l'instant)
        //     self = this;
        // },
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
