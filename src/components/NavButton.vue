<template>
    <RouterLink :to="to" class="mx-2 mb-4 border-2 rounded-full flex items-center justify-center w-48 h-12 bg-white text-yellow-500 font-semibold hover:bg-yellow-100">
      {{ text }}
    </RouterLink>
  </template>
  
  <script setup lang="ts">
  import { RouterLink } from 'vue-router';
  
  defineProps<{
    to: string;
    text: string;
  }>();
  </script>