<template>
    <div>
        <p v-if="isShowp" @click="change"  class="send">{{title1}}</p>
        <p v-if="!isShowp">
          <span v-if="flag">{{time}}s</span>
          <span v-if="!flag" style="color: #09f;font-size: 12px" @click="timego(timelong)">{{title2}}</span>
        </p>
    </div>
</template>

<script>
    export default {
        name: "ConTimeDown",
      props:{

            timelong:{
                default:60
            },
            title1:{
                default:"发送验证码"
            },
            title2:{
                default:"重发验证码"
            }

      },
      data(){
          return {
            time:60,
            flag:true,
            isShowp:true
          }
      },
      methods:{
          change(){
              this.isShowp=false;
              this.timego(this.timelong)

          },
          timego(timelong){
            this.time=timelong;
            this.myTimer=setInterval(()=>{
              if(this.time>0&& this.time<=timelong){
                this.flag=true;
                this.time--
              }else {
                this.flag=false;
                clearInterval(this.myTimer);
                this.myTimer=null
              }
            },1000)
          }
      },
      mounted(){
      }
    }
</script>

<style scoped lang="less">
    div {
    height: 36px;
    line-height: 36px;
    color: #444;
    width: 80px;
    text-align: center;
     .send{
        font-size: 12px;
        color: #09f;
         width: 100%;
         height: 100%;
      }
    }
</style>
