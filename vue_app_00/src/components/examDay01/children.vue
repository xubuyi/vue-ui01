<template>
  <div>
    <h2>子组件传参</h2>
    <h3>{{msg}}</h3>
    <img :src="img_url" alt="">
    <button @click="add3">点击事件</button>
  </div>
</template>
<script>
export default {
  props:{            //声明接收父组件的数据
    msg:{deflaut:""},//消息
    img_url:{deflaut:""},//图片
    add3:{type:Function}//函数
  },
  data(){
    return {}
  }
}
</script>
<style>

</style>