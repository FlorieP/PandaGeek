<template>
    <div class="p-icon-button">
        <i :class="[base, icon]" :style="[iconStyle]"></i>
    </div>    
</template>

<script>
    export default {
        props: {
            id: {
                icon: String,
                default: "",
            },
            base: {
                type: String,
                default: 'fa-solid', // fa-solid, fas, far
            },
            icon: {
                type: String,
                default: "",
            },
            color: {
                type: String,
                default: "black",
            },
        },
        name: 'IconButton',
        computed: {
            iconStyle () {
                return {
                    color : (this.color) ? this.color : "black",
                }
            }
        }
    }
</script>

<style scoped>
.p-icon-button {
    padding: 10px;
    border-radius: 100%;
    display: inline-block;
    width: 42px;
    height: 42px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    cursor: pointer;
}
.p-icon-button i {
    width: 100%;
    text-align: center;
}
.p-icon-button:hover {
    background-color: rgba(210, 210, 210, 0.31);
}
.p-icon-button:active  {
    transform: scale(0.95);
}
h1 {
    text-align: center;
}
</style>
