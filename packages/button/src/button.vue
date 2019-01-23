<template>
    <con-button
            :value="value"
            :size="size"
            :col="color"
            :font="font"
            :bg="bg">
    </con-button>
</template>

<script>
    import conButton from "./conButton";
    export default {
        name: "button",
        components: {conButton},
        data(){
            return{
                value:"提交",
                size:"roundness",
                color:"#f60",
                font:18,
                bg:"#ff0"
            }
        }
    }
</script>

<style scoped>

</style>