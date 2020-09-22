import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      redirect: '/article',
      component: () => import('@/pages/index'),
      children:[
        {
          path: '/article',
          component: () => import('@/pages/article'),
          name: 'Article',
        },
        {
          path: '/publish',
          component: () => import('@/pages/publish'),
          name: 'publish',
        },
        {
          path: '/about',
          component: () => import('@/pages/about'),
          name: 'about',
        },
      ]
    },
    {
      path: '/Login',
      name: 'Login',
      component: () => import('@/pages/login'),
    }
  ]
})
