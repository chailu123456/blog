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
          name: 'Article'
        },
        {
          path: '/article/detail/:id',
          name: 'detail',
          component: () => import('@/pages/template'),
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
        {
          path: '/manage',
          component: () => import('@/pages/manage'),
          name: 'manage',
        },
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/pages/login'),
    },
  ]
})
