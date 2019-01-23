<template>
  <li class="outer">
    <dl>
      <dt> <img :src="list.picUrl"/></dt>
      <dd>
          <h2>{{list.title}}</h2>
          <p v-if="list.profile">{{list.profile}}</p>
          <ul>
              <li class="inner" v-if="list.themes" v-for="(theme,index) in list.themes" :key="index">{{theme}}</li>
          </ul>
        <div class="msg"><p v-if="list.price" class="l">{{list.price}}</p><p v-if="list.distance" class="r">{{list.distance}}</p></div>
      </dd>
    </dl>
     <p class="bottommsg" v-if="list.bottomMsg">{{list.bottomMsg}}</p>
  </li>

</template>
npm
<script>
    export default {
        name: "ConList",
        props:{
           list:Object
        },
        data(){
          return{

          }
        }
    }
</script>

<style scoped>
  li.outer{
    width: 100%;
    padding: 15px 10px;
    border-bottom: 1px solid #ccc;
  }
  dl{
    /*padding: 0.15rem 0;*/
  display: flex;
  justify-content: space-between;
  }

  dl dt{
    width: 100px;
    height: 100px;}
  dl dt img{
    width: 100%;
    height: 100%;
  }
  dl dd{
    width: 200px;
    position: relative;}
  h2{
    line-height: 26px;
    font-size: 16px;
    font-weight: normal;
  }
  ul{
    height: 18px;
    margin-top: 2px;
    overflow: hidden;}
  ul >li.inner{
    float: left;
    height: 18px;
    border: 1px solid #8ed1f1;
    color: #8ed1f1;
    border-radius: 4px;
    margin-right: 5px;
    font-size: 10px;
    line-height: 18px;
    padding: 0 3px;
  }
  div.msg{
    height: 26px;
    width: 100%;
    line-height: 26px;
    position: absolute;
    left: 0;
    bottom: 0;
  }

  div p:nth-of-type(1) {
    color: #f9833d;
    font-size: 14px;
  }
  div p:nth-of-type(1) b {
    font-size: 18px
  }
  div p:nth-of-type(2){
    color: #cacaca;
    font-size:14px;

  }
  .bottommsg{
    line-height: 30px;
    font-weight: normal;
    font-size: 16px;
  }
</style>
