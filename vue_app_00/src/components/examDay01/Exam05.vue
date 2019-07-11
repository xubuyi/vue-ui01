<template>
  <div>
    <h2>面板组件</h2>
    <div>
      <mt-button type="danger" @click.prevent="active='tab1'">按钮1</mt-button>
      <mt-button type=""  @click.prevent="active='tab2'">按钮2</mt-button>
      <mt-button type="primary"  @click.prevent="active='tab3'">按钮3</mt-button>
    </div>
    <div>
      <mt-tab-container v-model="active">
        <mt-tab-container-item id="tab1">子面板1</mt-tab-container-item>
        <mt-tab-container-item id="tab2">子面板2</mt-tab-container-item>
        <mt-tab-container-item id="tab3">子面板3</mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: ""
    };
  },
  methods:{
    active(){
      
    }
  }
};
</script>
<style>
</style>
