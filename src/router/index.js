import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'

Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/weibo',
      name:'weibo',
      component: () => import('@/views/weibo/index')
    },
    {
      path: '/resource',
      name:'resource',
      component: () => import('@/views/resource/index')
    },
    {
      path: '/vue',
      name:'vue',
      component: () => import('@/views/vue/index')
    },
    {
      path: '/ydui',
      name:'ydui',
      component: () => import('@/views/ydui/index')
    },
    {
      path: '/swiper',
      name:'swiper',
      component: () => import('@/views/swiper/index')
    },
    {
      path: '/bootstrap',
      name:'bootstrap',
      component: () => import('@/views/bootstrap/index')
    },
    {
      path: '/elementui',
      name:'elementui',
      component: () => import('@/views/elementui/index')
    },
    {
      path: '/component',
      name:'component',
      component: () => import('@/views/component/component'),
      children: [
        {
          path: '/component/form',
          name:'form',
          component: () => import('@/views/component/common/form'),
        },
        {
          path: '/component/banner',
          name:'banner',
          component: () => import('@/views/component/common/banner'),
        },
        {
          path: '/component/tabbar',
          name:'tabbar',
          component: () => import('@/views/component/common/tabbar'),
        },
        {
          path: '/component/table', 
          name:'table',
          component: () => import('@/views/component/common/table'),
        },
        {
          path: '/component/slide', 
          name:'slide',
          component: () => import('@/views/component/common/slide'),
        }
      ]
    }
  ]
})
