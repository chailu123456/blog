// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import "./utils/es.shim";
import 'element-ui/lib/theme-chalk/index.css';
import './style/element-variables.scss';
import App from './App';
import router from './router';
import TP from './until/pross.js'
import './style/pross.css'
import store from './store/store'
Vue.use(ElementUI);
Vue.config.productionTip = false

let tp = new TP({
  color: '#3f2863',
  width: '2px',
  speed: '1',
  mount: 'body'
})

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}



// 判断是否需要登录权限 以及是否登录
router.beforeEach((to, from, next) => {
  tp.start();
  if(localStorage.getItem('username')) {
    next()
  } else {
    if (to.path === '/login') next()
    else next('/login')
  }
})

router.afterEach(() => {
  tp.done()
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
