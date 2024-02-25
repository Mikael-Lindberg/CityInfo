<template>
  <div id="app">
    <NavigationBar v-if="!isLoginRoute" />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
// @ts-ignore
import NavigationBar from './components/NavigationBar.vue'

const route = useRoute()

const isLoginRoute = computed(() => route.path === '/login')
</script>
