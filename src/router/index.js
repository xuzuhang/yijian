import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import Login from '@/page/login'
import Bindmobile from '@/page/bindmobile'
import Design from '@/page/design'
import aa from '@/page/aa'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      meta: { btnPermissions: ['admin','supper'] },
    },
    {
      path: '/aa',
      name: 'aa',
      component: aa,
      meta: { btnPermissions: ['admin','supper','normal'] },
    },
    {
      path: '/login',
      name: 'login',
      component:Login,
      meta: { btnPermissions: ['admin' ]},
    },
    {
      path: '/bindmobile',
      name: 'bindmobile',
      component:Bindmobile,
      meta: { btnPermissions: ['admin' ]},
    },
    {
      path: '/design',
      name: 'design',
      component:Design,
      meta: { btnPermissions: ['admin','supper'] },
    },
  ]
})
