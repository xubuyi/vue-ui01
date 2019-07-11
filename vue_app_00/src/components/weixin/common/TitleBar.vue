<template>
  <div class="page-head">
    <span>{{titlemsg}}</span>
    <div class="right-head">
      <div @click="search" class="search">
        <img :src="img_url01" alt />
      </div>
      <div @click="add3" class="search" style="margin-left:20px; margin-right:15px;">
        <img :src="img_url02" alt />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    titlemsg: { deflaut: "" },
    img_url01: { deflaut: "" },
    img_url02: { deflaut: "" },
    search: { type: Function },
    add3: { type: Function }
  },
  data() {
    return {};
  }
};
</script>
<style scoped>

/*1.最外层的父元素*/
/*2.右侧图片区域*/
/*3.图片*/
.page-head{
  display: flex;
  position: fixed;
  z-index: 999;
  justify-content: space-between;
  align-items: center;
  background-color: #3e3a39;
  width: 100%;
  height: 48px;
  padding:0 7px 0 7px;
  color:#fff;
  font-size:18px;
}
/*2.右侧图片区域*/
.right-head{
  display: flex;
}
/*3.图片*/
.search{
  display: flex;
  align-items:center;
  height:48px;
}
.search img{
  width:25px;
 
}
</style>