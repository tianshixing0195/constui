<template>
  <div style="padding:20px;" id="app">
    <div>
      <div>用户管理</div>
      <div>
      <input type="text" placeholder="用户名" v-model="val" class="seach"/>
      <input type="button" @click="seach" value="搜索" class="btn">
      </div>
      <table>
        <thead>
        <tr>
          <th>序号</th>
          <th v-for="(i,index) in data[0]" :key="index">{{index}}</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for ="(user,index) in newarr">
          <td>{{index+1}}</td>
          <td>{{user.name}}</td>
          <td>{{user.age}}</td>
          <td>{{user.school}}</td>
          <td><button v-on:click="remove(index)">remove</button></td>
        </tr>
        <tr>
          <td>添加</td>
          <td><input type="text"  class="name" v-model="user.name"/></td>
          <td><input type="text" class="age" v-model="user.age"/></td>
          <td><input type="text" class="school" v-model="user.school"/></td>
          <td><button @click="insert">insert</button></td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: "conTable",
    data () {
      return {
        user:{'name': '', 'age': '', 'school': ''},
        val:"",
        newarr:[]
      }
    },
    props:{
      data:Array
    },
    computed: {
      Newitems() {
        var _this = this;
        var Newitems = [];
        _this.data.map(function(item) {
          if (item.name.search(_this.val) !== -1) {
            Newitems.push(item);
          }
        });
        return Newitems;
      },
    },
    methods: {
      seach(){
        if(this.val===""){
          this.newarr=this.data
        }else{
          this.newarr=this.Newitems
        }
      },
      insert(){
        if(this.user.name==""){
          alert("请输入你的名字")
        }else{
          this.data.push(this.user);
          this.user={'name': '', 'age': '', 'school': ''}
        }
      },
      remove(index){
        this.data.splice(index, 1)
      },

    },
    mounted(){
      this.newarr=this.data;
    }
  }
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  table{border-collapse:collapse ;width:100%;text-align: center}
  table>thead{background: #eee;}
  tr,td,th{border:1px solid #ccc}
  td,th{height:30px; line-height: 30px}
  input{width:100%;height:100%; border: 0}
  .seach{width:150px;height:30px; border: 1px solid #ccc}
  .btn{width:50px;height:30px;background: #999}
</style>
