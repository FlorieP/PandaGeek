<template>
    <div class="p-box-button">

        <!-- Button -->
        <button
            :class="[
                'p-button',
                variant,
                className, 
            ]"
        ><slot /></button>
    </div>
</template>

<script>
    export default {
        name: 'Button',

        mounted() {
            console.log(this.color);
        },

        data: function () {
            return {
                focused: false,
            }
        },

        props: {
            variant: {
                type: String,
                default: 'contained', // text, contained, outlined, ...
            },
            color: {
                type: String,
                default: 'secondary', // primary, secondary, ...
            },
            className: {
                type: String,
                dafault: "",
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

<style>
    .p-box-button {
        flex: 1;
    }

    /* Base Button */

    .p-button {
        color: #424242;
        font-weight: 800;
        width: 100%;
        padding: 16px;
        transition: 0.4s background-color;
        margin: 5px 0px;
    }

    /* Text Button */

    .p-button.text {
        color: #424242;
        border-radius: 8px;
        border: none;
        padding: 18px;
        background-color: transparent;
    }

    .p-button.text:hover {
        cursor: pointer;
        background: v-bind(focusedColor);      
    }

    /* Contained Button */

    .p-button.contained {
        background: white;
        color: #424242;
        border-radius: 8px;
        border: none;
        padding: 18px;
    }

    .p-button.contained:hover {
        cursor: pointer;
        background: v-bind(focusedColor);      
    }

    /* Outlined Button */

    .p-button.outlined {
        color: #424242;
        border: 2px solid #424242;  
        border-radius: 8px;
    }

    .p-button.outlined:hover {
        cursor: pointer;
        border: 2px solid v-bind(focusedColor);   
        color: v-bind(focusedColor);
        background : lightgray;
    }


</style>
