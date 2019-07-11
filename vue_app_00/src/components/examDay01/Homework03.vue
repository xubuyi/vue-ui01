<template>
  <div>
    <h2>用户登录界面</h2>
    <mt-field label="用户名称:" placeholder="请输入您的用户名" type="text" :attr="{maxlength:15}" v-model="uname"></mt-field>
    <mt-field label="用户密码:" placeholder="请输入您的用密码" type="password" :attr="{maxlength:15}" v-model="upwd"></mt-field>
    <div>
       <button @click="Login">登陆</button><hr>
       <mt-switch>开关</mt-switch>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      uname:"",
      upwd:""
    }
  },
  methods:{
    Login(){
      //alert(123)
      //1.功能--验证用户名
     var u=this.uname.trim();
     //2.如果用户名为空,提示用户
     if(!u){
       this.$toast({
         message:"用户名不能为空",
         duration:1500,
         className:"msg"
         });
       return;
     }
    }
  }
}
</script>
<style>
  .msg{
    color:#f00 !important;
    background-color: #ddd !important;
  }
  
</style>