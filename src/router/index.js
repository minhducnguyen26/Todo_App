import { createRouter, createWebHistory } from 'vue-router'

import Home       from '../views/Home.vue'
import CreateTodo from "../views/CreateTodo.vue"
import EditTodo from "../views/EditTodo.vue"
import Settings   from "../views/Settings.vue"

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/CreateTodo',
    component: CreateTodo
  },
  {
    path: '/EditTodo',
    component: EditTodo
  },
  {
    path: '/Settings',
    component: Settings
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
