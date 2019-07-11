<template>
  <div class="rootstyle"  @click="itemClick(id)">
    <div class="leftimgtxt">
      <img :src="img_url03" alt class="imgstyle"/>
      <div class="rightOfimg">
        <span class="title">{{title}}</span>
        <span  class="subtitle">{{subtitle}}</span>
      </div> 
    </div>
    <span class="sendtime">{{sendtime}}</span> 
  </div>
</template>
<script>
export default {
  props: {
    img_url03: { deflaut: "" },
    title: { deflaut: "" },
    subtitle: { deflaut: "" },
    sendtime: { deflaut: "" },
    id:{deflaut:""},
    itemClick:{type:Function},
  },
  data() {
    return {};
  }
};
</script>
<style scoped>
.rootstyle{
  display:flex;
  justify-content:space-between;
  align-items:center;
}
.leftimgtxt{
  display:flex;
}
.imgstyle{
  width:50px;
  height:50px;
}
.rightOfimg{
  display:flex;
  flex-direction: column;
  justify-content: center;
  margin-left:7px;
}
/*主标题*/
.title{
  color:#000;
  font-size:16px;

}
/*子标题*/
.subtitle{
  color:#666;
  margin-top:5px;
  font-size:12px;
}
/*发送时间*/
.sendtime{
  color:#333;
  font-size:12px;
}
</style>