<template>
  <nav class="navbar py-4 bg-red-500 px-4 text-white">
    <div class="flex justify-between">
      <div>list routes here ...</div>
      <button
        v-if="showLogoutButton"
        @click="logout"
        class="text-lg border py-2 px-4 border-complimentary-100 rounded-lg hover:border-complimentary-300 hover:text-complimentary-300"
      >
        Log Out
      </button>
    </div>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const isAuthenticated = computed(() => !!localStorage.getItem('authToken'))
const isLoginView = computed(() => route.name === 'login')

const showLogoutButton = computed(() => isAuthenticated.value && !isLoginView.value)

const logout = () => {
  localStorage.removeItem('authToken') // Remove the stored token
  router.push('/login') // Redirect to the login page
}
</script>
