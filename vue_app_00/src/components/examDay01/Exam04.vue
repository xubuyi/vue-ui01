<template>
  <div>
    <h2>表单练习</h2>
    <h2>开关组件</h2>
    <mt-switch v-model="val1">开关</mt-switch>
    <h2>单选框组件</h2>
    <mt-radio title="选项列表" v-model="val2" :options="['A','B','C','D']"></mt-radio>
    <button @click="chooseRadio">确定</button>
    <h2>复选框组件</h2>
    <mt-checklist title="菜单列表" v-model="val3" :options="['小炒肉','西红丝炒蛋','鱼香肉丝','白切鸡']"></mt-checklist>
    <button @click="chooseList">确定</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      val1: false,
      val2: "", //单选保存的是单个字符串
      val3: [] //多选是数组保存的选项
    };
  },
  methods: {
    chooseRadio() {
      //alert(`您选中的答案是:${this.val2}`)
      this.$toast({
        message: `您选中的答案是:${this.val2}`,
        duration: 1500
      });
    },
    chooseList() {
      //alert(`您选中的菜品是:${this.val3}`)
      this.$toast({
        message: `您选中的菜品是:${this.val3}`,
        duration: 1500
      });
    }
  }
};
</script>
<style>
</style>
