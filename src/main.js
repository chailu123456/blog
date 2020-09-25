// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import ElementUI from 'element-ui';
import "./utils/es.shim";
import 'element-ui/lib/theme-chalk/index.css';
import './style/element-variables.scss';
import App from './App';
import router from './router';
import store from './store/store'
Vue.use(ElementUI);
Vue.config.productionTip = false


// 判断是否需要登录权限 以及是否登录
router.beforeEach((to, from, next) => {
  console.log(to);
  if(localStorage.getItem('username')) {
    next()
  } else {
    if (to.path === '/login') next()
    else next('/login')
  }
})

import './style/global.css';
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
