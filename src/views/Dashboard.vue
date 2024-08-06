<template>
  <div class="flex flex-col h-screen bg-gray-100">
    <div class="flex flex-1">
      <div class="flex-1 flex flex-col items-center justify-center bg-teal-500 text-white py-10" id="welcomeScreen">
        <RouterLink to="/" class="max-w-80">
          <img src="../assets/logo.png" alt="Logo Si Bocah Aksara">
        </RouterLink>
        <h1 class="text-2xl text-center mb-4 font-semibold">Halo Selamat Datang Di Platform Belajar Membaca</h1>
      </div>
  
      <div class="flex-1 flex flex-col items-center justify-center bg-yellow-500 text-white py-10" id="btnn">
        <RouterLink to="/parent-page" class="mx-2 mb-4 border-2 rounded-full flex items-center justify-center w-48 h-12 bg-white text-yellow-500 font-semibold hover:bg-yellow-100">
          Parent Page
        </RouterLink>
        <RouterLink to="/lessons" class="mx-2 mb-4 border-2 rounded-full flex items-center justify-center w-48 h-12 bg-white text-yellow-500 font-semibold hover:bg-yellow-100">
          Mulai Pelajaran
        </RouterLink>
        <RouterLink to="/login" class="mx-2 mb-4 border-2 rounded-full flex items-center justify-center w-48 h-12 bg-white text-yellow-500 font-semibold hover:bg-yellow-100">Login</RouterLink>
        <RouterLink to="/dashboard-admin" class="mx-4 mb-4 border-2 rounded-full flex items-center justify-center w-48 h-12 bg-white text-yellow-500 font-semibold hover:bg-yellow-100">
          moved soon
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
