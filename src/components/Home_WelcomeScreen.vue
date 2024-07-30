<template>
    <div class="flex-1 flex flex-col items-center justify-center bg-teal-500 text-white py-10" id="welcomeScreen">
      <RouterLink to="/" class="max-w-80">
        <img src="../assets/logo.png" alt="Logo Si Bocah Aksara">
      </RouterLink>
      <h1 class="text-2xl text-center mb-4 font-semibold">Halo Selamat Datang Di Platform Belajar Membaca</h1>
    </div>
  </template>
  
  <script setup lang="ts">
  import { RouterLink } from 'vue-router';
  </script>