<template>
  <div class="list">
    <ul class="movenav">
      <li  class="moveli" :key="index" v-for="(tab,index) in lists"  @click="tabClick(index)">
        <span>{{tab}}</span>
      </li>
    </ul>
  </div>

</template>

<script>
    export default {
        name: "ConMoveNav",
        props:{
            lists:{
                type:Array,
                default:function () {
                    return {
                        lists:["nav1","nav2","nav3","nav4","nav5"]
                    }
                }
            }
        },
        data(){
            return {
                nowIndex:0
            }
        },
        methods:{
            liClick(index){
                this.nowIndex=index;
            }
        }
    }
</script>

<style scoped>

    .con-active{
        color:#f60;
        padding-bottom: .05rem;
        border-bottom: 2px solid #f60;
    }
</style>
