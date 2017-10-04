import Vue from 'vue'
import VueRouter from 'vue-router'

const routes = [
  { path: '/', component: () => import('src/App'), name: 'App',
    children: [
      { path: '/login', name: 'login', component: () => import('@/Login') },
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
