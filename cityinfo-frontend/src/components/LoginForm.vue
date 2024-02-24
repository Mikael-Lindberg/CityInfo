<template>
  <div class="flex items-center justify-center min-h-screen bg-red-500 text-gray-900">
    <div
      class="px-16 py-10 rounded-xl mt-4 text-left bg-white shadow-2xl border border-complimentary-500"
    >
      <h3 class="text-2xl font-bold text-center">Login to your account</h3>
      <form class="mt-4">
        <div>
          <label class="block" for="username">Username</label>
          <input
            type="text"
            placeholder="Username"
            id="username"
            class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-complimentary-600"
          />
        </div>
        <div class="mt-4">
          <label class="block" for="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            id="password"
            class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-complimentary-600"
          />
        </div>
        <div class="flex items-baseline justify-between">
          <button
            class="px-6 py-2 mt-4 text-white bg-complimentary-600 rounded-lg bg-complimentary-600 hover:bg-complimentary-500"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
