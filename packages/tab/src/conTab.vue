<template>
  <div class="all">
    <ul :class="action">
      <li
        :key="index"
        v-for="(i,index) in lists"
        :class="{'con-active':nowIndex===index}"
        :style="{width:w,height:h,background:bg}"
        @click="liClick(index)">
        <span>{{i.name}}</span>
      </li>
    </ul>
    <div class="center">{{lists[nowIndex].center}}</div>
  </div>
</template>

<script>
    export default {
        name: "conTab",
      props:{
        action:{type:String,default:"move"},
        w:{type:String,default:"30%"},
        h:{type:String,default:"30px"},
        bg:{type:String,default:"#f1f1ff"},
        lists:{
          type:Array,
          default:()=>[
              {name:"标签一",center:"内容1"},

              {name:"标签二",center:"内容2"},

              {name:"标签三",center:"内容3"},

              {name:"标签四",center:"内容4"}

          ],
        }
      },
      data(){
        return {
          nowIndex:0,
          center:""
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
    padding-bottom: 10px;
    border-bottom: 2px solid #555;
  }
  .norm{
    display: flex;
    text-align: center;
    flex-direction: row;
    justify-content: space-between;
  }
  .move{
    display: -webkit-box;
    text-align: center;
    flex-direction: row;
  }
  .all{
    position: relative;
  }
  li{width:30%}
  .center{
    position: absolute;
    top:50px;
    left: 0;
    width: 100%;
    height:50px;
    line-height: 50px;
    text-align: center;
    background: #d9edf7;
  }
</style>

