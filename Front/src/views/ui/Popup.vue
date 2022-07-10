<template>
    <div
        class="p-popup-overlay"
        v-if="open"
    >
        <div
            :id = "id"
            :class ="[
                'p-popup',
                variant,
                className,
            ]"
        >
            <div class="p-popup-header">
                <div
                    v-if="title"
                    class="p-popup-title"
                >
                    {{title}}
                </div>
                <IconButton
                    base="fas"
                    icon="fa-times"
                    color="black"
                    class="btn-close-popup flex-0"
                    @click="handleCloseClick()"
                />
            </div>

            <div class="p-popup-content">
                <!-- slot = 👶👶👶 (ex: <Popup>👶👶👶</Popup>) -->
                <slot />
            </div>

            <div
                class="p-popup-footer"
                v-if="showFooter"
            >
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
</template>

<script>
    import IconButton from '../ui/IconButton.vue'

    export default {
        name: 'Popup',

        // data: function () {
        //     return {
        //         focused: false,
        //     }
        // },

        components: {
            IconButton
        },

        props: {
            id: {
                type: String,
                default: "",
            },
            title: {
                type: String,
                default: "",
            },
            variant: {
                type: String,
                default: 'dialog', // dialog, modal
            },
            showFooter: {
                type: Boolean,
                default: true,
            },
            className: {
                type: String,
                default: "",
            }
        },

        computed: {
            open() {
                return this.$store.getters['popup/isOpen'](this.id);
                // return this.$store.state.popup.open.indexOf(this.id) > -1
            }
        },

        methods: {
            handleCloseClick: function() {
                this.$store.dispatch('popup/close', this.id);
            }
        }
    }
</script>

<style>

    .p-popup-overlay {
        position: fixed;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        z-index: 1000;
        /*background-color: rgba(0, 0, 0, 0.5);*/

        background-color: rgba(111, 126, 140, 0.2);
        -webkit-backdrop-filter: blur(4px);

        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    .p-popup {
        position: relative;
        min-width: 400px;
        background-color: white;
        border-radius: 16px;
        box-shadow: rgba(62, 80, 96, 0.2) 0px 4px 20px;
    }

    .p-popup-header {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
    }

    .p-popup-title {
        font-weight: bold;
        flex: 1;
        padding: 20px 30px;
    }

    .btn-close-popup {
        position: absolute;
        top: 0px;
        right: 0px;
    }

    .p-popup-content {
        padding: 0px 30px 20px 30px;
    }

    .p-popup-footer {
        display: flex;
        align-items: center;
        padding: 0px 10px 5px 10px;
    }

    .p-popup-footer > *:not(:last-child) {
        margin-right: 10px;
    }

</style>
