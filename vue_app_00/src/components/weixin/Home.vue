<template>
  <div class="weixin_container">
    <div class="page-wrap">
      <!-- 顶部导航栏 -->
      <titlebar
        titlemsg="消息(11)"
        :img_url01="require('../../assets/ic_search.png')"
        :img_url02="require('../../assets/ic_add.png')"
        :search="mysearch"
        :add3="myadd3"
      ></titlebar>
      <!--2. 防止顶部内溢出 -->
      <!-- 保留顶部48px -->
      <div style="margin-top:48px;"></div>
      <!--3. 面板组件 1个父面板 4个子面板 -->
      <mt-tab-container v-model="active">
        <mt-tab-container-item id="message">
         <messagelist></messagelist>
        </mt-tab-container-item>
      </mt-tab-container>
      <!--4. 底部导航栏 -->
      <mt-tabbar v-model="active" fixed>
        <mt-tab-item id="message" @click.native="changeState(0)">
          <tabbaricon 
          :selectedImage="require('../../assets/ic_weixin_selected.png')" 
          :normalImage="require('../../assets/ic_weixin_normal.png')" 
          :focused="currentIndex[0].isSelect">
          </tabbaricon>
          微信
        </mt-tab-item>
         <mt-tab-item id="contacts" @click.native="changeState(1)">
          <tabbaricon 
          :selectedImage="require('../../assets/ic_contacts_selected.png')" 
          :normalImage="require('../../assets/ic_contacts_normal.png')" 
          :focused="currentIndex[1].isSelect">
          </tabbaricon>
          通讯录
        </mt-tab-item>
         <mt-tab-item id="find" @click.native="changeState(2)">
          <tabbaricon 
          :selectedImage="require('../../assets/ic_find_selected.png')" 
          :normalImage="require('../../assets/ic_find_normal.png')" 
          :focused="currentIndex[2].isSelect">
          </tabbaricon>
          发现
        </mt-tab-item>
         <mt-tab-item id="me" @click.native="changeState(3)">
          <tabbaricon 
          :selectedImage="require('../../assets/ic_me_selected.png')" 
          :normalImage="require('../../assets/ic_me_normal.png')" 
          :focused="currentIndex[3].isSelect">
          </tabbaricon>
          我的
        </mt-tab-item>
      </mt-tabbar>
    </div>
  </div>
</template>
<script>
//1.引入顶部子组件
import TitleBar from "./common/TitleBar.vue";
//2.引入消息列表子组件
import MessageList from "./common/MessageList.vue";
//3. 引入面板组件
import tabBaricon from "./common/TabBaricon.vue";
export default {
  data() {
    return {
      active:"message",
      currentIndex:[
        {isSelect:true},
        {isSelect:false},
        {isSelect:false},
        {isSelect:false},
      ],
    };
  },
  //2.组件注册
  components: {
    "titlebar": TitleBar,
    "messagelist": MessageList,
    "tabbaricon":tabBaricon
  },
  methods: {
    mysearch() {
      alert("搜索");
    },
    myadd3() {
      alert("添加");
    },
    changeState(n){
      //console.log(n);
      //1.n是当前的下标
      //2.创建循环数据
      for(var i=0;i<this.currentIndex.length;i++){
        //3.如果当前的下标与参数一致 true
        if(n==i){
          this.currentIndex[i].isSelect=true;
        }else{
          //4.其它的为false
          this.currentIndex[i].isSelect=false;
        }
      }  
    }
  }
};
</script>
<style>
body{
  margin:0px;
  padding:0px;
}
.weixin_container {
  overflow:hidden;
  
}
.page-wrap{
  overflow: auto;
  padding:0 0 60px 0;
}
/*修改tabbar 默认文字颜色*/
.mint-tabbar>.mint-tab-item{
  color:#999999 !important;
}
/*修改tabbar 选中文字颜色*/
.mint-tabbar>.mint-tab-item.is-selected{
  background:transparent !important; 
  color:#45c018 !important;
}

</style>