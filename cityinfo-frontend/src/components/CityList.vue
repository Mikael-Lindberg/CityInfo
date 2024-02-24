<template>
  <div class="border rounded-xl py-6 px-4 mt-4 mx-4">
    <h2 class="text-3xl text-gray-900 text-center">Cities</h2>
    <ul class="text-gray-800">
      <li v-for="city in cities" :key="city.id">
        <h3>{{ city.name }}</h3>
        <p>{{ city.description }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface City {
  id: number
  name: string
  description: string
}

const cities = ref<City[]>([])

onMounted(async () => {
  try {
    const token = localStorage.getItem('authToken')
    if (!token) {
      throw new Error('Authentication token not found')
    }

    const response = await fetch('https://localhost:7034/api/v1/cities', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    if (!response.ok) {
      throw new Error('Failed to fetch cities')
    }

    cities.value = (await response.json()) as City[]
  } catch (error) {
    console.error('Error fetching cities:', error)
  }
})
</script>
