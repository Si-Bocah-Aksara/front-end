<template>
  <div class="flex-1 flex flex-col items-center justify-center bg-yellow-500 text-white py-10" id="btnn">
    <RouterLink to="/lessons" class="mx-2 mb-4 border-2 rounded-full flex items-center justify-center w-48 h-12 bg-white text-yellow-500 font-semibold hover:bg-yellow-100">
          Mulai Pelajaran
        </RouterLink>
        <RouterLink to="/scoreboard" class="mx-2 mb-4 border-2 rounded-full flex items-center justify-center w-48 h-12 bg-white text-yellow-500 font-semibold hover:bg-yellow-100">
          Score Board
        </RouterLink>
  </div>
</template>


<script setup lang="ts">
  import { RouterLink } from 'vue-router';
</script>