<template>
  <div>
    <h1>输入域</h1>
    <div>
      <mt-field label="用户名:" placeholder="请输入用户名" :attr="{maxlength:15}" v-model="uname"></mt-field>
      <mt-field label="用户密码:" type="password" placeholder="请输入用户密码" :attr="{maxlength:15}" v-model="upwd"></mt-field>
      <mt-field label="用户生日:" type="date" placeholder="请输入用户生日" :attr="{maxlength:15}" v-model="birthday"></mt-field>
      <mt-field label="用户邮箱:" placeholder="请输入用户邮箱" :attr="{maxlength:15}" v-model="email"></mt-field>
      <mt-field label="用户联系方式:" placeholder="请输入用户手机号码" :attr="{maxlength:11}" v-model="phone"></mt-field>

    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      uname:"dingding",
      upwd:"123456",
      birthday:"",
      email:"dingding@163.com",
      phone:"13145987896"
    }
  },
  methods:{}
}
</script>
<style>

</style>

