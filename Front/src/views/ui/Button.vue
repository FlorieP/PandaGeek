<template>
    <div class="p-box-button">

        <!-- Button -->
        <button
            :class ="[
                'p-button',
                variant,
                className,
                {'enabled': !disabled},
                {'disabled': disabled}
            ]"
            :id = "id"
            :disabled= "disabled"
            @click="handleClick()"
        ><slot /></button>
    </div>
</template>

<script>
    export default {
        name: 'Button',

        mounted() {
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
                default: "",
            },
            disabled: {
                type: Boolean,
                default: false,
            },
            id: {
                type: String, 
                default: "",
            },
            onClick: {
                type: Object,
                default: null,
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
            }
        },

        methods: {
            handleInputFocus: function() {
                this.focused = true;
            },
            handleInputBlur: function() {
                this.focused = false;
            },
            handleClick: function() {
                if (this.onClick) {
                    this.onClick();
                }
            }
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
        border-radius: 8px;
        border: none;
        color: #424242;
        padding: 18px;
    }

    .p-button.disabled {
        background: white;
        pointer-events: none !important;
    }

    .p-button.enabled {
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
