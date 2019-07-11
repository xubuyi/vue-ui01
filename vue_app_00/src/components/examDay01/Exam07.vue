<template>
  <div>
    <h2>tabbar 组件</h2>
    <!-- 面板 -->
    <div>
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="外卖">美食面板</mt-tab-container-item>
        <mt-tab-container-item id="购物">购物面板</mt-tab-container-item>
        <mt-tab-container-item id="休闲">休闲面板</mt-tab-container-item>
      </mt-tab-container>
    </div>
    <!-- 底部导航栏 -->
    <div>
      <mt-tabbar v-model="selected" fixed>
        <mt-tab-item id="外卖">
          <img slot="icon" src="../../assets/resource/01.png" alt="">美食
        </mt-tab-item>
        <mt-tab-item id="购物">
          <img slot="icon" src="../../assets/resource/02.png" alt="">购物
        </mt-tab-item>
        <mt-tab-item id="休闲">
          <img slot="icon" src="../../assets/resource/03.png" alt="">休闲
        </mt-tab-item>
      </mt-tabbar>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      selected:"外卖",
    }
  }
}
</script>
<style>
  
</style>