<template>
    <ul>
      <li v-for="(info,index) in data" :key="index">
        <a @click="clickthis(index)" :class="{'ative':nowIndex===index}">
            <span>
               <i v-if="info.icon" class="iconfont" :class="info.icon"></i>
               <img v-if="info.imgurl" :src="info.imgurl"/>
            </span>
          <p>{{info.title}}</p>
        </a>

      </li>
    </ul>

</template>

<script>
    export default {
        name: "ConFooter",
        props:["data"],
      data(){
        return{
          nowIndex:0
        }
      },
      methods:{
        clickthis(index){
          this.$emit("handelClick",index);
          this.nowIndex= index

        }
      }
    }
</script>

<style scoped lang="less">
  ul{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;

    li{
      flex: 1;
      text-align: center;
      a{
        display: inline-block;
      }
      span{
        width: 20px;
        height: 20px;
        display: block;
        margin: 4px auto;
        img{
          width: 100%;
          height: 100%;
        }
      }
      p{
        font-size: 12px;
      }
    }
  }
  .ative i{
    color: #09f;
  }
  .ative p{
    color: #09f;
  }
</style>
