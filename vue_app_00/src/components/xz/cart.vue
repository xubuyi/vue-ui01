<template>
  <div>
    <div class="cart">
      <div class="selectAll">
        全选
        <input type="checkbox" @click="selectAll" />
        <!-- 全选的按钮 -->
      </div>
      <div class="cart-item" v-for="(item,i) of list" :key="i">
        <!-- 商品列表 -->
        <div class="leftImgText">
          <input type="checkbox" v-model="item.cb" />
          <img :src="`http://127.0.0.1:3000/images/`+item.img_url" alt />
          <div class="detials">
            <span class="title">{{item.title}}</span>
            <span class="price">¥{{item.price}}</span>
          </div>
        </div>
        <mt-button type="danger" size="small" @click="delItem" :data-id="item.id">删除</mt-button>
      </div>
      <div>
        <!-- 删除选中的按钮 -->
        <mt-button type="primary" @click="delAll">删除选中的商品</mt-button>
        <h3 style="color:red">购物车的数量:<span>{{$store.getters.getCartCount}}</span></h3>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    this.loadMore();
  },
  methods: {
    loadMore() {
      //清除购物车
      this.$store.commit("clear");
      //创建url
      var url = "cart";
      this.axios.get(url).then(result => {
        //console.log(result.data.data);
        //1.获取服务器数组
        var obj = result.data.data;
        //2.创建循环为数组中每一个对象中添加cb属性值.cb控制商品前的复选框
        for (var item of obj) {
         //2.1添加一个cb属性值来判断选中
         item.cb = false;
         //2.2:更新购物车数量
         this.$store.commit("addCount");
        }
       
        //3.将新数组保存
        this.list = obj;
      });
    },
    selectAll(e) {
      var cb = e.target.checked;
      //alert(cb);
      for (var item of this.list) {
        item.cb = cb;
      }
    },
    //单选商品删除功能
    delItem(e) {
      //1.获取当前商品的id
      var id = e.target.dataset.id;
     // var url = "delItem";
      var obj = { id }; //结构赋值
      id = obj.id; //重新赋值
     //2.显示交互确认框
     this.operate(id);
    },
    //多选商品删除功能
    delAll() {
      var id = "";
      for (var item of this.list) {
        if (item.cb == true) {
          id += item.id + ",";//将获取到的id进行拼接 如1,2,3,
        }
      }
      id = id.slice(0, id.length - 1); //截取不包含最后一个逗号 如1,2,3
      //console.log(id);
      //2.如果用户未选择则提示用户选择商品
      if(id.length==""){
        this.$toast("请选择需要删除的商品");
        return;
      }
      //3.显示交互确认框
      this.operate(id);
    },
    //创建一个操作:operate函数将用户交互和axios请求封装到函数内,通过事件获取的id进行传值请求
    operate(id){
      //console.log(id);//传值已接收到ok
      var url = "delItem";//定义url
      this.$messagebox.confirm("是否删数指定的商品").then(action => {
        //3.如果用户选择确认
        //4.发送ajax删除数据
        this.axios
          .get(url, { params: id })
          .then(result => {
            var msg = result.data.msg;
            this.$toast({
              message: msg,
              duration: 500
            });
            this.loadMore();
            //5.如果用户选择取消
          })
          .catch(err => {
             this.$toast("已取消");
          });
      });
    },
  }
};
</script>
<style scoped>
/* 弹性布局 */
.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  padding: 5px;
  border-bottom: 1px solid #ddd;
}
.leftImgText {
  display: flex;
  align-items: center;
}
.leftImgText img {
  width: 50%;
  height: 50%;
}
.leftImgText .detials {
  display: flex;
  flex-direction: column;
  margin-left: 5px;
}
.leftImgText .detials .title {
  margin-bottom: 10px;
  color: #f40;
  font-size: 12px;
  font-weight: 700;
}
.leftImgText .detials .price {
  color: #27b1f6;
  font-size: 12px;
  font-weight: 700;
}
</style>
