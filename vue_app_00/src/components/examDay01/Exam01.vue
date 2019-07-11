<template>
  <div class="one">
    第一个组件,唯一的根元素div<hr>
    <button @click="openText">显示提示信息</button>
  </div>
</template>
<script>
//导出一个默认的组件对象
export default {
  data() {
    //当前组件共享的数据
    return {}; //数据
  },
  methods: {
    openText() {
      //显示短消息
      this.$toast({
        message:"密码输入错误......",//内容
        position:"top",//位置
        duration:1500,//时间
        className:"mytoast",//添加样式
        iconClass:"iconfont icon-food-sushi"
      })
    }
  }
};
</script>
<style>
.mytoast{
  color: #fff !important;
  background:#f0f !important;
}
.iconfont{
  font-size:36px !important;
  color: #f00;
}
</style>


