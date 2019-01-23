<template>
    <div class="con-head con-flexBetween ">
        <div class="con-icon" @click="goBack">
            <i class="iconfont" :class="leftIcon" ></i>
        </div>
        <div class="box">
            <slot name="center">
                <p>{{text}}</p>
            </slot>

        </div>
        <div class="con-icon" @click="goAway">
            <i class="iconfont" :class="rightIcon" ></i>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ConHeader",
        props:{
            leftIcon:{
                type:String,
                default:"icon-xiaoxi"
            },
            rightIcon:{
                type:String,
                default:"icon-dd"
            },
            text:{
                type:String,
                default:"头部显示文字"
            }
        },
        methods:{
            goBack(){
                this.$emit("click-left")
            },
            goAway(){
                this.$emit("click-right")
            }
        }

    }
</script>


<style scoped lang="less">
    .con-icon{
        width: 50px;
    }
    .iconfont{
        color: #444;
        font-size: 18px;
    }
    .box{
        width: 70%;
        height: 30px;
        margin-top: 5px;
        border-radius: 5px;

        p{
            text-align: center;
        }

        span{
            height: 100%;
            width: 30px;
            display: inline-block;
            background-color: #ccc;
            float: left;
        }
        input{
            width: 90%;
            height: 30px;
            border: 1px solid #ccc;
            padding-left: 10px;
            margin-top: 2px;
            float: left;
        }
    }
</style>