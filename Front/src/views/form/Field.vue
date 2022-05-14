<template>
    <div class="p-field">

        <!-- Input -->
        <input
            :class="[
                'p-input',
                variant
            ]"
            v-if="kind == 'input'"
            :type="[type]"
            :placeholder="[placeholder]"

            @click="handleInputFocus()"
            @blur="handleInputBlur()"
        />

        <!-- Select -->

        <!-- Checkbox -->

    </div>
</template>

<script>
    export default {
        name: 'Field',

        mounted() {
            console.log(this.color);
        },

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
            }
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
            }
        },

        methods: {
            handleInputFocus: function () {
                console.log('handleInputFocus');
                this.focused = true;
            },
            handleInputBlur: function () {
                console.log('handleInputBlur');
                this.focused = false;
            },
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
        min-width: 100px;
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
