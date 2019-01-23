<template>
  <div class="toast"  v-if="isShow">
    <div class="toast-div">{{ text }}</div>
  </div>
</template>

<script>
  export default{
      name: "ConTip",
    data(){
      return {
        text:'提示信息',
        isShow:true,
        duration:1500    //间隔 1500s后消失
      }
    }
  }
</script>
<style>

  .toast{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, 0);
     z-index: 20;
    background: #444;
    line-height: 40px;
    color: #fff;
    padding: 0 10px;
    border-radius: 8px;
  }
</style>

