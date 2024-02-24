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
      component: () => import('../views/CityView.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = () => {
    return !!localStorage.getItem('authToken')
  }

  if (to.name === 'login' && isAuthenticated()) {
    next({ name: 'logout' })
  } else if (to.meta.isPublic || isAuthenticated()) {
    next()
  } else {
    next({ name: 'login' })
  }
})

export default router
