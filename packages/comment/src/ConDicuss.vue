<template>
  <div>
    <div class="header">
      <div class="headerImg">
          <img :src="imgurl"/>
      </div>
      <div class="headerUse">
          <span>{{username}}</span>
          <span>{{vip}}</span>
          <span>{{chenhao}}</span>
      </div>
    </div>
    <div class="center">
        <p>{{conent}}</p>
    </div>
    <div class="footer">
        <ul slot="commentimg">
            <li v-for="(img,index) in commentimg ||imgs" :key="index"><img :src="img"/></li>
        </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ConDicuss",
        props:{
            imgurl:{
                type:String,
                default:'http://img3.imgtn.bdimg.com/it/u=909393762,3225910161&fm=26&gp=0.jpg'
            },
            username:{
                type:String,
                default:"我去前面探探路"
            },
            vip:{
                type:String,
                default:"vip0"
            },
            chenhao:{
                type:String,
                default:"评论家"
            },
            conent:{
                type:String,
                default:"输入你的评论内容"
            },
            commentimg:{
                type:Array,
            }
        },
        data(){
            return{
                imgs:['http://img0.imgtn.bdimg.com/it/u=3577367496,2515679260&fm=26&gp=0.jpg',
                    'http://img4.imgtn.bdimg.com/it/u=4202401692,1194780962&fm=26&gp=0.jpg',
                    'http://img3.imgtn.bdimg.com/it/u=729343294,3008484881&fm=26&gp=0.jpg','http://img5.imgtn.bdimg.com/it/u=1755020933,1088467722&fm=26&gp=0.jpg'
                ]
            }
        }
    }
</script>

<style scoped>
  .header{
    display: flex;
    height: 30px;
    justify-content: flex-start;
    padding:10px 0;
  }
  .headerImg{
    height:30px;
    width:30px;
  }
  .headerImg img{
    width: 100%;
    height:100%;
    border-radius: 50% 50%;

  }
  .headerUse{
    line-height: 30px;
  }
  .headerUse span{
    margin-left:6px;
    padding:0 6px;
    font-size: 10px;
  }
  .headerUse span:nth-child(2){
    background: #e3b867;
    color: #fff;
  }
  .headerUse span:nth-child(3){
    background: #67c0ff;
    color: #fff;
  }
  .center{
    margin-top: 10px;
  }
  .center p{
    font-size: 14px;
    line-height: 26px;
  }
  .footer{
    padding-top: 10px;
    padding-bottom: 12px;
  }
  .footer ul{
    display: flex;
    justify-content: space-between;
  }
  .footer li{
    flex: 1;
  }
  .footer li img{
    height:80px;
    width:90%;
    margin: 0 auto;
  }
</style>
