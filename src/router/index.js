import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'

const UpdateLog = () => import('../views/update_log/Updatelog')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Component',
      name: 'component',
      component: () => import('@/views/component/Component'),
      children: [
        {
          path: '/updatelog',
          name: 'updatelog',
          component: () => import('@/views/update_log/Updatelog')
        },
        {
          path: '/Form',
          name: 'Form',
          component: () => import('@/views/component/common/Form'),
        },
        {
          path: '/Banner',
          name: 'Banner',
          component: () => import('@/views/component/common/Banner'),
        },
        {
          path: '/Tabbar',
          name: 'Tabbar',
          component: () => import('@/views/component/common/Tabbar'),
        },
        {
          path: '/Table',
          name: 'Table',
          component: () => import('@/views/component/common/Table'),
        }
      ]
    },
    {
      path: '/guide',
      name: 'guide',
      component: () => import('@/views/guide/Guide')
    },
    {
      path: '/resource',
      name: 'resource',
      component: () => import('@/views/resource/Resource')
    }
  ]
})
