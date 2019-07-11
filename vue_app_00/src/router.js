//router.js 引入路由
import Vue from 'vue'
import Router from 'vue-router'
//自定义组件
/********************* 第一天 *********************/
import HelloContainer from "./components/HelloWorld.vue"
//1.引入消息提示 Exam01.vue组件
import Exam01 from "./components/examDay01/Exam01.vue"
//2.引入交互提示框 Exam02.vue 组件
import Exam02 from "./components/examDay01/Exam02.vue"
//3.引入输入域 Exam03.vue 组件
import Exam03 from "./components/examDay01/Exam03.vue"
//4.引入作业login Homework03组件
import Homework03 from "./components/examDay01/Homework03.vue"
//5. 引入开关 Exam04.vue组件
import Exam04 from "./components/examDay01/Exam04.vue"
//6. 引入面板组件container Exam05.vue组件
import Exam05 from "./components/examDay01/Exam05.vue"
//6. 引入面板组件container Exam06.vue组件
import Exam06 from "./components/examDay01/Exam06.vue"
//7. 引入面板组件tabbar(底部导航) Exam07.vue组件
import Exam07 from "./components/examDay01/Exam07.vue"
//8. 引入父组件 parent.vue组件
import parent from "./components/examDay01/parent.vue"

/********************* 第二天 *********************/
import Home from "./components/weixin/Home.vue"
// import MessageList from "./components/weixin/common/MessageList.vue"
/*********************  xz项目*********************/
import login from "./components/xz/Login.vue"
import home1 from "./components/xz/home1.vue";
import product from "./components/xz/product.vue";
import cart from "./components/xz/cart.vue";

Vue.use(Router)
//2.为Exam01.vue 配置路劲

export default new Router({
  routes: [
     /*********************  xz项目*********************/
     {path:"/login",component:login},
     {path:"/home1",component:home1},
     {path:"/product",component:product},
     {path:"/cart",component:cart},
    /********************* 第二天 *********************/
    {path:'/Home',component:Home},
    // {path:'/MessageList',component:MessageList},
    /********************* 第一天 *********************/
    {path:'/',component:HelloContainer},
    {path:'/Exam01',component:Exam01},
    {path:'/Exam02',component:Exam02},
    {path:'/Exam03',component:Exam03},
    {path:'/Homework03',component:Homework03},
    {path:'/Exam04',component:Exam04},
    {path:'/Exam05',component:Exam05},
    {path:'/Exam06',component:Exam06},
    {path:'/Exam07',component:Exam07},
    {path:'/parent',component:parent},
  ]
})
