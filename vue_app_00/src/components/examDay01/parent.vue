<template>
  <div>
    <h2>父组件传参parent</h2>
    <child msg="消息(11)" :img_url="require('../../assets/resource/02.png')" :add3="myadd"></child>
  </div>
</template>
<script>
//1.引入子组件
import children from "./children";
export default {
  data(){
    return {}
  },
  methods:{
    myadd(){
      alert("向子组件传参");
    }
  },
  //2.注册子组件
  components: {
    "child":children
  }
}


</script>
<style>

</style>
