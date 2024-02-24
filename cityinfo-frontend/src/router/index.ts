import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { isPublic: true }
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

  if (to.name !== 'home' && !isAuthenticated()) {
    next({ name: 'home' })
  } else {
    next()
  }
})

export default router
