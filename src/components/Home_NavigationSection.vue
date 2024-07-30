<template>
    <div class="flex-1 flex flex-col items-center justify-center bg-yellow-500 text-white py-10" id="btnn">
      <NavigationButtons />
    </div>
  </template>
  
  <script>
  import NavigationButtons from '../components/Home_NavigationButtons.vue';
  
  export default {
    name: 'NavigationSection',
    components: {
      NavigationButtons
    }
  }
  </script>