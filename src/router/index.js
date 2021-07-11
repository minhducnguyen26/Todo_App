import { createRouter, createWebHistory } from 'vue-router'

import Home from "../views/Home.vue"
import Menu from "../views/Menu"
import CreateTodo from "../views/CreateTodo.vue"

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/Menu',
    component: Menu
  },
  {
    path: '/CreateTodo',
    component: CreateTodo
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
