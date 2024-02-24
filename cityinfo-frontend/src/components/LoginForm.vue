<template>
  <div class="flex items-center justify-center min-h-screen bg-red-500 text-gray-900">
    <div
      class="px-16 py-10 rounded-xl mt-4 text-left bg-white shadow-2xl border border-complimentary-500"
    >
      <h3 class="text-2xl font-bold text-center">Login to your account</h3>
      <form class="mt-4" @submit.prevent="handleLogin">
        <div>
          <label class="block" for="username">Username</label>
          <input
            v-model="credentials.username"
            type="text"
            placeholder="Username"
            id="username"
            class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-complimentary-600"
          />
        </div>
        <div class="mt-4">
          <label class="block" for="password">Password</label>
          <input
            v-model="credentials.password"
            type="password"
            placeholder="Password"
            id="password"
            class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-complimentary-600"
          />
        </div>
        <div class="flex items-baseline justify-between">
          <button
            type="submit"
            class="px-6 py-2 mt-4 text-white bg-complimentary-600 rounded-lg hover:bg-complimentary-500"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const credentials = ref({
  username: '',
  password: ''
})

const router = useRouter()

const handleLogin = async () => {
  try {
    const response = await fetch(`https://localhost:7034/api/authentication/authenticate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials.value)
    })

    if (!response.ok) {
      throw new Error(`Login failed: ${response.statusText}`)
    }

    const token = await response.text()

    localStorage.setItem('authToken', token)

    router.push('/')
  } catch (error) {
    console.error('Authentication error:', error)
  }
}
</script>
