<template>
  <div>
    <ul>
      <li v-for="i in arrs">第{{i}}个li</li>
    </ul>
    <infinite-loading @infinite='onInfinite'>
      <span slot="no-more">没有啦</span>
    </infinite-loading>
  </div>
</template>
<script>
    import infiniteLoading from "vue-infinite-loading"
    export default {
      name: "conUpload",
      components:{infiniteLoading},
      data(){
        return{
          page:0,
          arrs:20
        }
      },
      methods:{
        onInfinite($state) {
          if (this.page<3) {
            setTimeout(()=>{
              this.page += 1;
              this.arrs=this.arrs+10
              $state.loaded();
            },2000)
          }else{
            $state.complete();
            console.log("111")
          }
        },
      }
    }
</script>

<style scoped>
  li{
    margin-bottom: 20px;
    height:50px;
    width:100%;
    background: #00c3ff;
    line-height: 50px;
    text-align: center;
  }

</style>
