import Vue from 'vue'
import App from './App.vue'
import router from './router'
//以上的三行不要動固定保存原來位置
//原因引用有序
//第三方組件庫在下面引入

//1. 完整引入mint-ui
import MintUI from 'mint-ui'

//2.單引入mint-ui的樣式
import 'mint-ui/lib/style.css'

//3.將mint-ui註冊Vue
Vue.use(MintUI)

//4.引入图标字体样式文件
import "./font/iconfont.css"

//5.引入axios.js文件
import axios from "./axios"

//6.引入vuex
import Vuex from "vuex"

//7.注册vuex组件
Vue.use(Vuex)

//8.创建vuex实例store
var store=new Vuex.Store({
  //vuex中全局共享的数据
  state:{cartCount:0},
  //修改vuex中全局共享的数据
  mutations:{
    //购物车数量加1
    addCount(state){
       state.cartCount++;
    },
    //购物车数量减1
    subCount(state){
      state.cartCount--;
    },
    //清空购物车
    clear(state){
      state.cartCount=0;
    },
    //购物车数量增加指定值
    updateCount(state,c){
      state.cartCount+=c;
    }
  },
  //获取vuex中全局共享的数据
  getters:{
    getCartCount:function(state){
      return state.cartCount;
    }
  }
})

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
  //9.将store保存vue实例中
  store,
}).$mount('#app')