<template>
    <div class="flex flex-col h-screen bg-gray-100">
      <div class="flex flex-1">
        <WelcomeScreen />
        <NavigationButtons />
      </div>
      <Footer />
    </div>
  </template>
  
  <script setup lang="ts">
  import WelcomeScreen from '../components/Home_WelcomeScreen.vue';
  import NavigationButtons from '../components/Home_NavigationButtons.vue';
  import Footer from '../components/Home_Footer.vue';
  </script>