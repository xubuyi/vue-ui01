<template>
  <div>
    交互提示框!!!!!!<hr>
    <button @click="openAlert">简写提示框</button><hr>
    <button @click="openConfirm">提示确认</button><hr>
    <button @click="openPrompt">输入确认</button>
  </div>
</template>
<script>
export default {
  data(){
    return {
    }
  },
  methods:{
    openAlert(){
      //alert("这是个简写提示.....")
      /*this.$messagebox({
        title:"消息提示",
        message:"执行操作成功...."
      });*/
      //简写
      this.$messagebox("","删除成功");
    },
    openConfirm(){
      this.$messagebox.confirm("是否删除指定的数据").then(action=>{
        console.log(action)//确认返回信息
      }).catch(err=>{
        console.log(err);//取消返回信息
      });
    },
    openPrompt(){
      this.$messagebox.prompt("请输入出生日期").then(({value,action})=>{//值1,函数1
        console.log(value);
        console.log(action);
      }).catch(err=>{
        console.log(err);
      })
    }
  }
}
</script>
<style>

</style>

