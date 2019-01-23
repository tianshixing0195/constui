<template>
    <div>
        <p><span>非常不愿意</span><span>非常愿意</span></p>
        <ul>
            <li v-for="number in numbers" :key="number" :class="{'curr':nowNum===number}" @click="change(number)">{{number}}</li>
        </ul>
    </div>

</template>

<script>
    export default {
        name: "ConPoint",
        data(){
            return{
                numbers:[1,2,3,4,5,6,7,8,9,10],
                nowNum:10
            }
        },
        methods:{
            change(number){
                this.nowNum = number;
                this.$emit(sendNum,number)
            }
        }
    }
</script>

<style scoped>
     p{
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 20px;
        line-height: 20px;
    }
     ul{
        height: 24px;
        width: 100%;
        border: 1px solid #4383f2;
        display: flex;
        border-radius: 0.05rem;
        overflow: hidden;
    }
     ul li{
        flex: 1;
        height: 24px;
        line-height: 24px;
        text-align: center;
        border-right: 1px solid #4383f2;
    }
     ul li:last-of-type{
        border-right: 0;
    }
    .curr{
        background-color:#4383f2;
        color:#fff;
    }
</style>