<template>
    <div class="con-text-move">
        <marquee
                :scrollAmount="speed || 6"
                :scrollDelay="size || 10"
                :style="{fontSize:font||'16px'}"
        >
            {{text}}
        </marquee>
    </div>
</template>

<script>
    export default {
        name: "RunText",
        props:{
            speed:Number,
            size:Number,
            font:String,
            text:{type:String,default:"太阳当空照，花儿对我笑"},
        },
    }
</script>

<style scoped>
    marquee{
        display: inline-block;
        width:100%;
        height:100%;
    }
    span{
        display: inline-block;
        width:8%;
    }
</style>