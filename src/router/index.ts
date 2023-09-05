import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/pages/Login/LoginPage.vue')
    },
    {
      path: '/todos',
      name: 'todos',
      component: () => import('@/pages/Todos/TodosPage.vue')
    },
    {
      path: '/create-todo',
      name: 'create-todo',
      component: () => import('@/pages/Create/CreateTodo.vue')
    },
    {
      path:'/todo-page/:id',
      name:'todo-page',
      component: () => import('@/pages/Todo/TodoPage.vue')
    }
  ]
})

export default router