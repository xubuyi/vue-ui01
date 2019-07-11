<template>
  <div>
    <h2>tabbar 组件</h2>
    <div class="nav">
      <!--1. 循环遍历创建btn按钮 -->
      <mt-button class="btn" v-for="(elem,i) of list" :key="i" @click="openTab" :data-idx="i">{{elem}}</mt-button>
    </div>
    <div>
      <mt-tab-container v-model="active">
        <mt-tab-container-item id="tab1">美食</mt-tab-container-item>
        <mt-tab-container-item id="tab2">购物</mt-tab-container-item>
        <mt-tab-container-item id="tab3">休闲</mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      list:['美食','购物','休闲'],
      active:"tab1"
    }
  },
  methods:{
    openTab(e){
      var idx=e.target.dataset.idx;
      this.active='tab'+(idx-0+1);
    }
  }
}
</script>
<style>
.btn:hover{
  background-color:rgba(255,0,0,.8) !important;
  color:#fff;
  
}
</style>
