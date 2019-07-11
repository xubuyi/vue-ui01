<template>
  <div class="product-container" @mousewheel="loadMore">
    <!-- 产品分类列表 -->
    <div class="goods-item" v-for="(item,i) of list" :key="i">
      <img :src="`http://127.0.0.1:3000/images/${item.img_url}`" class="imgstyle" />
      <div class="info">
        <span class="title">{{item.title}}</span>
        <br />
        <span class="price">¥:{{item.price}}</span>
      </div>
    </div>
    <!-- <mt-button type="danger" size="large" @click="loadMore">加载更多</mt-button> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [], //保存服务器数据
      pno: 0, //页码
      pageSize: 4 //页大小
    };
  },
  methods: {
    loadMore() {
      //加载更多的数据
      //加载第1 2 3...页数据
      this.pno++;
      var url = "product";
      var obj = { pno: this.pno, pageSize: this.pageSize };
      this.axios.get(url, { params: obj }).then(result => {
        //console.log(result.data.data);
        //this.list=result.data.data;
        var rows = this.list.concat(result.data.data); //将数组拼接
        this.list = rows; //重新赋值到列表
      });
    }
  },
  created() {
    this.loadMore();
  }
};
</script>
<style scoped>
.product-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 4px;
}
.product-container .goods-item {
  width: 49%;
  border: 1px solid #eee;
  box-sizing:border-box;
  margin: 2px 0px;
  padding: 2px;
  display: flex;
  flex-direction: column;
  min-height: 247px;
  border-radius: 5px;
}
.product-container .goods-item .imgstyle {
  width: 100%;
  height: 50%;
  margin: 0 auto;
}
.product-container .goods-item .info .title {
  font-size:12px;
  color:#666;
  
}
.product-container .goods-item .info .price {
  display: inline-block;
  padding: 2px 10px;
  margin-top:.5rem;
  /* background: #27b1f6; */
  color:#27b1f6;
  font-size: 14px;
  font-weight: 700;
}
</style>