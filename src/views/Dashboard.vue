<template>  
  <div class="flex flex-col h-screen" style="background-color: #eeeae1;">
    <div class="flex flex-1">
      <div class="flex-1 flex flex-col items-center justify-center h-3/4" id="welcomeScreen" style="background-color: #3c8895;">
        <RouterLink to="/" class="border-2 mx-2">(ini ceritanya logo)</RouterLink>
        <h1 class="text-center">Halo Selamat Datang Di Platform Belajar Membaca Si Bocah Aksara</h1>
        <div>
          <RouterLink to="/login">Login</RouterLink>
        </div>
      </div>
  
      <div class="flex-1 flex flex-col items-center justify-center h-3/4" id="btnn" style="background-color: #e88704;">
        <RouterLink to="/parent-page" class="mx-2 border-2 border-black rounded-full flex items-center justify-center"
          style="width: 200px; height: 50px;">Parent Page</RouterLink> <br>
        <RouterLink to="/lessons" class="mx-2 border-2 border-black rounded-full flex items-center justify-center"
          style="width: 200px; height: 50px;">Mulai Pelajaran</RouterLink> <br>
      </div>
    </div>

    <div class="p-4">
      <RouterLink to="/about" class="mx-2">About</RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>
