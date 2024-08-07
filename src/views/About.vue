<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 p-4">
      <div class="max-w-3xl w-full bg-white shadow-lg rounded-lg overflow-hidden p-8">
        <h1 class="text-4xl font-bold text-center text-blue-800 mb-6">Tentang Platform Kami</h1>
        <p class="text-gray-700 justify-center text-lg mb-4">
          Platform ini dirancang untuk membantu anak-anak belajar dengan cara yang menyenangkan dan interaktif.
          Kami menawarkan berbagai mini-game edukatif yang dirancang untuk meningkatkan keterampilan anak-anak. 
          Dengan mengadopsi teknik mind-mapping diharapkan bisa menjadi pendekatan yang ramah anak, 
          kami berusaha untuk memberikan pengalaman belajar yang menyenangkan bagi anak.
        </p>
  
        <<h2 class="text-3xl font-bold text-center text-purple-800 mt-8 mb-4">Tim Kami</h2>
        <div class="flex flex-wrap justify-center mb-12">  <div v-for="member in teamMembers" :key="member.name" class="flex flex-col items-center m-4">  <img :src="member.image" alt="Profile Image" class="w-32 h-32 rounded-full border-4 border-blue-500 mb-4 shadow-lg" />
            <h3 class="text-2xl font-bold text-center text-green-800">{{ member.name }}</h3>  <p class="text-gray-700 text-center">{{ member.role }}</p>  </div>
        </div>
        
  
        <div class="flex justify-center mt-8">
          <RouterLink to="/" class="items-center border-2 rounded-full flex justify-center w-52 h-12 bg-white text-blue-500 font-semibold hover:bg-violet-200">
            Kembali
          </RouterLink>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import tya from "../assets/tya.png";
  import lcd from "../assets/lcdisorder.jpg";
  export default {
    data() {
      return {
        teamMembers: [
          {
            name: 'Tya',
            image: tya,
            role: 'Pengembang Utama'
          },
          {
            name: 'lazycatdisorder',
            image: lcd,
            role: 'Penasihat'
          }
        ],
      }
    }
  }
  </script>
  