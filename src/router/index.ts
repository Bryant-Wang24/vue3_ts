import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('../views/Home.vue'),
    meta: {
      title: '常见问题'
    }
  },
  {
    path: '/localprint',
    component: () => import('../components/LocalPrint.vue'),
    meta: {
        title: '本地打印'
    }
},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
