<template>
  <div class="login_container">
    <h2>User login</h2>
    <mt-field
      class="myinput"
      label="用户名:"
      :placeholder="unamemsg"
      :attr="{maxlength:15}"
      v-model="uname"
    ></mt-field>
    <mt-field
      class="myinput"
      label="用户密码:"
      type="password"
      :placeholder="upwdmsg"
      :attr="{maxlength:15}"
      v-model="upwd"
    ></mt-field>
    <mt-button class="mybtn" type="primary" @click="check" size="large">登录</mt-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      uname: "",
      upwd: "",
      unamemsg: "请输入用户名",
      upwdmsg: "请输入用户密码",
    };
  },
  methods: {
    check(){
      var uname=this.uname;
      var upwd=this.upwd;
      //创建一个正则表达式字母数字下滑线3-19位
      var reg=/^\w{3,12}$/i;
      //验证用户名 提示信息
      if(!reg.test(uname)){
        this.$toast("用户名格式不正确");
        return;
      }
      //验证密码 提示信息
      if(!reg.test(upwd)){
        this.$toast("密码名格式不正确");
        return;
      }
      //发送ajax请求
      var url="login";
      var obj={uname,upwd};
      var canSend=true;
      this.axios.get(url,{params:obj}).then(result=>{
        var code = result.data.code;
          if(code>0 && canSend){
             this.$toast("登陆成功");
             canSend=false;
             setTimeout(()=>{
                this.$router.push("/cart");
             },500)
          }else{
            this.$toast("密码名格式不正确");
          }
      })
    }
  }
}
</script>
<style>
.login_container h2 {
  height: 3rem;
  line-height: 3rem;
  text-align: center;
  background-color: turquoise;
  color: #fff;
  padding: 0px;
  margin: 0px;
}
</style>
