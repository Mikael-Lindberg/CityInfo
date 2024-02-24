import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
      meta: { isPublic: true }
    },
    {
      path: '/',
      name: 'index',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/cities',
      name: 'cities',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = () => {
    return !!localStorage.getItem('authToken')
  }

  if (to.name !== 'login' && !isAuthenticated()) {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router
