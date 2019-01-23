<template>
    <ul>
      <slot name="one">
        <li slot="one" class="one">
          <div @click="clickIcon1"><i class="iconfont" :class="icon1"></i><p>{{p1}}</p></div>
          <div @click="clickIcon2"><i class="iconfont" :class="icon2"></i><p>{{p2}}</p></div>
        </li>
      </slot>
      <li class="two"  @click="clickBtn1">{{title1}}</li>
      <li class="three" @click="clickBtn2">{{title2}}</li>
    </ul>
</template>

<script>
    export default {
        name: "ConShopping",
        props:{
            title1:{
                type:String,
                default:"加入购物车"
            },
            title2:{
                type:String,
                default:"立即购买"
            },
            p1:{
                type:String,
                default:"问问店家"
            },
            p2:{
                type:String,
                default:"查询"
            },
            icon1:{
                type:String,
                default:"icon-kefu"
            },
            icon2:{
                type:String,
                default:"icon-xin"
            }
        },
        methods:{
            clickIcon1(){
                this.$emit("clickLeftIcon");
            },
            clickIcon2(){
                this.$emit("clickRightIcon");
            },
            clickBtn1(){
                this.$emit("clickLeftBtn");
            },
            clickBtn2(){
                this.$emit("clickRightBtn");
            },
        }
    }
</script>

<style scoped lang="less">

    ul{
      background-color: #fff;
      border-top: 1px solid #ccc;
      width: 100%;
      height:50px;
      display: flex;
      li{
        flex: 1;
        text-align: center;
      }
      .one{
        display: flex;
        justify-content: center;
        align-items: center;

        div{
          flex: 1;

          i{
            font-size: 18px;
          }
          p{
            font-size:10px;
          }
        }
      }
      .two{
        line-height: 50px;
        background-color: #ffbb02;
        color: #fff;
      }
      .three{
        line-height:50px;
        background-color: #ff6914;
        color: #fff;
      }
    }
</style>
