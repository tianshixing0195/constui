<template>
    <div style="padding:20px;" id="app">
        <div>
            <div>用户管理</div>
          <input type="text" placeholder="用户名" v-model="val"/>
          <input type="button" @click="seach" value="搜索">
            <table class="table table-bordered table-striped text-center">
                <thead>
                <tr>
                    <th>序号</th>
                    <th>用户名</th>
                    <th>年龄</th>
                    <th>地址</th>
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
                user: {'name': '', 'age': '', 'school': ''},
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
          this.newarr=this.data
        }
    }
</script>

<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
    tr,th,td{
        text-align:center;
        border: 1px solid #ccc;
    }
  table{
    border-collapse: collapse;
  }

</style>
