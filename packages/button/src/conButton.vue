<template>
    <div>
        <input :type="btn"
               :value="value"
               :class="size"
               :style="{color:col, background:bg, fontSize:font}"
        >
    </div>
</template>

<script>
    export default {
        name: "conButton",
        props:{
            value:{
                type:String,
                default:'默认'
            },
            size:{
                type:String,
                default:"small"
            },
            col:{
                type:String,
                default:"#f60"
            },
            bg:{
                type:String,
                default:"#ccc"
            },
            font:{type:String,default:"16px"},
            btn:{type:String,default:"button"},
        }
    }
</script>

<style scoped>
    .small{
        height:30px;
        width:50px;
        font-size: 16px;
        border:1px solid #ccc;
        border-radius: 5px;
    }
    .middle{
        height:30px;
    width:100px;
    font-size: 18px;
    border:1px solid #ccc;
    border-radius: 5px;
    }
    .big{
        height:50px;
        width:100%;
        font-size: 20px;
        border:1px solid #ccc;
        border-radius: 5px;
    }
    .roundness{
        height:30px;
        width:30px;
        border-radius: 50%;
        border:1px solid #ccc;
    }
</style>