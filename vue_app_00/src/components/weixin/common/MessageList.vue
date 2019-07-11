<template>
  <div>
    <message 
      v-for="(item,i) in list.data" :key="i" :img_url03="require('../../../assets/a_7.png')" :title="item.title" 
      :subtitle="item.subtitle" 
      :sendtime="item.time" 
      :id="item.id"
      :itemClick="clickItem"
      class="itemstyle"
      >
    </message> 
  </div>
</template>
<script>
//1. 引用子组件
import Message from "./Message"
//1.1引入json文件[数据]
//json文件 引入就是 js 对象了
import messagejson from "../json/messagelist.json"
export default {
  data(){
    return {
      //放入data中就可以直接使用
      list:messagejson
    }
  },
  methods:{
    clickItem(id){
     alert(12233);
    }
  },
  //2. 注册子组件
  components:{
    "message":Message
  }
}
</script>
<style scoped>
  .itemstyle{
    padding:5px;
    border-bottom:1px solid #d9d9d9;
  }
</style>