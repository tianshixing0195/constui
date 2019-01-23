<template>
  <div>
    <span>
       <img :src="picUrl"/>
    </span>
    <p>{{title}}</p>
    <slot name="profile">{{profile}}</slot>
  </div>
</template>

<script>
    export default {
        name: "ConListTop",
      props:{
          picUrl:{
                type:String,
                default:"http://img4.imgtn.bdimg.com/it/u=369786962,1961186336&fm=26&gp=0.jpg"
            },
          title:{
              type:String,
              default:"盲僧"
          },
          profile:{
              type:String,
              default:"我用双手成就你的梦想"
          }
      },
       data(){
          return {

          }
       }
    }
</script>

<style scoped>

   div{
    width: 100%;
    height: 100%;
  }
   div>span{
     width: 80%;
     display: inline-block;
     overflow: hidden;
     border-radius: 0;
     height: 120px;
   }
  img{
   width: 100%;
   height: 100%;
  }
   p{
    margin-top: 10px;
    line-height: 22px;
    font-weight: 500;
  }
  
</style>
