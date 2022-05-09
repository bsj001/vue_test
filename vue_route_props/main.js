/*
* 该文件是整个项目的入口文件
**/
//引入Vue
import Vue from 'vue'
//引入App组件，它是所有组件的父组件
import App from './App.vue'
//安装vue-router
//引入VueRouter
import VueRouter from 'vue-router'
//使用VueRouter
Vue.use(VueRouter)

import router from './router'

//关闭Vue的生产提示
Vue.config.productionTip = false;

//创建VUe实例对象 --vm
new Vue({
  //将App组件放入容器中
  render: h => h(App),
  router,
}).$mount('#app');
