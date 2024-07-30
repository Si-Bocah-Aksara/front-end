<template>
    <div class="p-4 bg-gray-200 text-center">
      <RouterLink to="/about" class="text-gray-700 hover:text-gray-900">About</RouterLink>
    </div>
  </template>
  
  <script>
  import { RouterLink } from 'vue-router';
  
  export default {
    name: 'Footer'
  }
  </script>