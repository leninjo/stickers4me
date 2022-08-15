import { createRouter, createWebHashHistory } from 'vue-router'
import StickersView from '../views/StickersView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: StickersView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
