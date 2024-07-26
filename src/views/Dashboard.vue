<template>
  <div class="flex flex-col h-screen bg-gray-100">
    <div class="flex flex-1">
      <div class="flex-1 flex flex-col items-center justify-center bg-teal-500 text-white py-10" id="welcomeScreen">
        <RouterLink to="/" class="border-2 border-white rounded-full p-4 mb-6">
          <span class="text-lg font-bold">Logo</span>
        </RouterLink>
        <h1 class="text-2xl text-center mb-4 font-semibold">Halo Selamat Datang Di Platform Belajar Membaca Si Bocah Aksara</h1>
        <div>
          <RouterLink to="/login" class="bg-white text-teal-500 px-4 py-2 rounded-md shadow-md hover:bg-teal-100">Login</RouterLink>
        </div>
      </div>
  
      <div class="flex-1 flex flex-col items-center justify-center bg-yellow-500 text-white py-10" id="btnn">
        <RouterLink to="/parent-page" class="mx-2 mb-4 border-2 rounded-full flex items-center justify-center w-48 h-12 bg-white text-yellow-500 font-semibold hover:bg-yellow-100">
          Parent Page
        </RouterLink>
        <RouterLink to="/lessons" class="mx-2 border-2 rounded-full flex items-center justify-center w-48 h-12 bg-white text-yellow-500 font-semibold hover:bg-yellow-100">
          Mulai Pelajaran
        </RouterLink>
        <RouterLink to="/dashboard-admin" class="mx-2 border-2 rounded-full flex items-center justify-center w-48 h-12 bg-white text-yellow-500 font-semibold hover:bg-yellow-100">
          testing doang
        </RouterLink>
      </div>
    </div>

    <div class="p-4 bg-gray-200 text-center">
      <RouterLink to="/about" class="text-gray-700 hover:text-gray-900">About</RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>
