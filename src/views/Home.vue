<template>
    <div class="flex flex-col h-screen bg-gray-100">
      <div class="flex flex-1">
        <WelcomeScreen />
        <NavigationSection />
      </div>
      <Footer />
    </div>
  </template>
  
  <script>
  import WelcomeScreen from '../components/Home_WelcomeScreen.vue';
  import NavigationSection from '../components/Home_NavigationSection.vue';
  import Footer from '../components/Home_Footer.vue';
  
  export default {
    components: {
      WelcomeScreen,
      NavigationSection,
      Footer
    }
  }
  </script>