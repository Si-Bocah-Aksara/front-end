<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-pink-500 to-blue-500 text-black">
      <div class="max-w-7xl w-full bg-white shadow-lg rounded-lg overflow-hidden p-8">
        <div class="text-center mb-8">
          <h1 class="text-4xl font-bold">Scoreboard</h1>
        </div>
  
        <div class="overflow-y-auto h-80"> <table class="min-w-full rounded-lg overflow-hidden">
            <thead>
              <tr>
                <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tanggal & Waktu
                </th>
                <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Pelajaran
                </th>
                <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">   
  
                  Benar
                </th>
                <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Salah
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="attempt in highScoreBoard" :key="attempt.idAttempt">
                <td class="px-6 py-4 whitespace-nowrap">{{ formatDate(attempt.data.attempt) }}</td>
                <td class="px-6 py-4 whitespace-nowrap">{{ attempt.lesson }}</td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span v-if="attempt.data.isDone">Selesai</span>
                  <span v-else>Belum Selesai</span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">{{ attempt.data.skor.benar }}</td>
                <td class="px-6 py-4 whitespace-nowrap">{{ attempt.data.skor.salah }}</td>
              </tr>
            </tbody>
          </table>
      </div>
      <RouterLink to="/" class="mx-2 mb-4 items-center border-2 rounded-full flex items-center justify-center w-48 h-12 bg-white text-blue-500 font-semibold hover:bg-blue-100">
        Back
      </RouterLink>
    </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { format } from 'date-fns'; // Assuming you have date-fns installed
  
  
  export default {
    name: 'AboutPage',
    data() {
      return {
        highScoreBoard: [],
      };
    },
    mounted() {
      const storedData = localStorage.getItem('highScoreBoard');
      if (storedData) {
        this.highScoreBoard = JSON.parse(storedData);
      } else {
        // Handle empty localStorage (optional)
      }
    },
    methods: {
      formatDate(dateString) {
        return format(new Date(dateString), 'dd/MM/yyyy HH:mm:ss'); // Customize format as needed
      },
    },
  };
  </script>
  