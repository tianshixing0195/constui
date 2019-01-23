<template>
  <div class="con-login">
    <div class="title">{{title}}</div>
    <div class="username"><input type="text" :placeholder="text" v-model="userid"></div>
    <div class="pass">
      <input type="text" placeholder="登录密码" v-model="userpass">
      <div class="pass-find">| <a @click="searchpass">找回密码</a></div>
    </div>
    <div class="loginbutton">
      <button class="conbutton" @click="login">登录</button>
    </div>
    <slot name="other"></slot>

  </div>

</template>

<script>

    export default {
        name: "ConLogin",
        props:{
            title:{
                type:String,
                default:"App登录"
            },
            text:{
                type:String,
                default:"输入手机号/邮箱/用户名"
            }

        },
   
      data(){
        return{
          userid:'',
          userpass:'',
          tipMsg:''
        }
      },
      methods:{
        login(){
           this.$emit("loginCheck",this.userid,this.userpass);
        },
          searchpass(){
            this.$emit("SearchPass");
          }

      }
    }
</script>

<style scoped lang="less">
  .con-login{
    width: 100%;
    padding: 20px;
    .title{
      width: 100%;
      height: 40px;
      line-height: 40px;
      font-weight: normal;
      font-size: 30px;
      text-align: center;

    }
    .username{width:100%;
      height: 40px;
      line-height: 40px;
      border-bottom: 1px solid #ccc;}
    .username input{border: 0;font-size: 15px;width: 100%;}
    .pass{
      width:100%;height:40px;
      line-height: 40px;
      border-bottom: 1px solid #ccc;
      margin-bottom: 20px;
      padding-left: 10px}
    .pass input{border: 0;
      font-size: 16px;
      padding-left: 10px;
      height: 100%;width: 60%;
      float: left;}
    .pass-find{float: right;}
    .pass-find a{color: #5d5d5d;}
    .loginbutton{
      height: 50px;
      width: 100%;


      .conbutton{
        width: 100%;
        height: 100%;
        background-color: #fc600c;
        color: #fff;
        border: 0;
        border-radius: 5px;
        font-size: 16px;
      }
    }

  }
</style>
