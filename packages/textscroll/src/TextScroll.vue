<template>
    <div class="swiper-container swiper-text">
        <div class="swiper-wrapper">
            <!-- 第一个swiper -->
            <div class="swiper-slide" v-if="texts" :key="index" v-for="(text,index) in  texts">
                <p>{{text}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import Swiper from "../swiper"
    import "../swiper.min.css"
    export default {
        name: "TextScroll",
        props:{
            texts:{
                type:Array,
                default:function () {
                    return {
                        texts:["text1","text2","text3","text4","text5"]
                    }
                }
            }
        },
        data() {
            return {

            }
        },
        mounted(){
            var mySwiper1 = new Swiper('.swiper-text',{
                autoplay:true,
                delay:1500,
                direction:"vertical",
                loop:true
            })
        }
    }
</script>

<style scoped>
    .swiper-container{
        color: black;
        height: .32rem;
        width: 100%;
    }
</style>
