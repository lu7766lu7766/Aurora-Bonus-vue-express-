import Vue from 'vue'
import VueRouter from 'vue-router'

const routes = [
  { path: '', name: 'app', component: () => import('src/App'),
    children: [
      { path: '', component: () => import('@/Index'),
        children: [
          { path: '', name: 'home', component: () => import('@/Index/Home') },
          { path: 'user-add', name: 'user-add', component: () => import('@/Index/UserAdd') },
          { path: 'user-list', name: 'user-list', component: () => import('@/Index/UserList') }
        ]
      },
      { path: 'login', name: 'login', component: () => import('@/Login') },
      { path: '*', redirect : '/login' }
    ]
  }
]

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes // same with routes: routes
})

export default router
