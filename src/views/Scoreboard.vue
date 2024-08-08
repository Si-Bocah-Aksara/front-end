<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-pink-500 to-blue-500 text-black">
    <div class="max-w-7xl w-full bg-white shadow-lg rounded-lg overflow-hidden p-8">
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold">Scoreboard</h1>
      </div>

      <div class="overflow-y-auto h-80">
        <table class="min-w-full rounded-lg overflow-hidden">
          <thead>
            <tr>
              <th
                class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                @click="sortTable('date')"
              >
                Tanggal & Waktu
                <span v-if="sortColumn === 'date'">{{ sortOrder === 'asc' ? '↑' : '↓' }}</span>
              </th>
              <th
                class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                @click="sortTable('lesson')"
              >
                Pelajaran
                <span v-if="sortColumn === 'lesson'">{{ sortOrder === 'asc' ? '↑' : '↓' }}</span>
              </th>
              <th
                class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                @click="sortTable('status')"
              >
                Status
                <span v-if="sortColumn === 'status'">{{ sortOrder === 'asc' ? '↑' : '↓' }}</span>
              </th>
              <th
                class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                @click="sortTable('benar')"
              >
                Benar
                <span v-if="sortColumn === 'benar'">{{ sortOrder === 'asc' ? '↑' : '↓' }}</span>
              </th>
              <th
                class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                @click="sortTable('salah')"
              >
                Salah
                <span v-if="sortColumn === 'salah'">{{ sortOrder === 'asc' ? '↑' : '↓' }}</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="attempt in sortedHighScoreBoard" :key="attempt.idAttempt">
              <td class="px-6 py-4 whitespace-nowrap">
                {{ formatDate(attempt.data.attempt) }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap">{{ attempt.lesson }}</td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span v-if="attempt.data.isDone">Selesai</span>
                <span v-else>Belum Selesai</span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                {{ attempt.data.skor.benar }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                {{ attempt.data.skor.salah }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <RouterLink
        to="/"
        class="mx-2 mb-4 items-center border-2 rounded-full flex items-center justify-center w-48 h-12 bg-white text-blue-500 font-semibold hover:bg-blue-100"
      >
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
      sortColumn: '', // Column currently being sorted
      sortOrder: 'asc', // Sort order: 'asc' or 'desc'
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
  computed: {
    sortedHighScoreBoard() {
      // Clone the highScoreBoard array
      let sortedArray = [...this.highScoreBoard];

      if (this.sortColumn) {
        sortedArray.sort((a, b) => {
          let compareA, compareB;

          // Determine which field to sort by
          if (this.sortColumn === 'date') {
            compareA = new Date(a.data.attempt);
            compareB = new Date(b.data.attempt);
          } else if (this.sortColumn === 'lesson') {
            compareA = a.lesson.toLowerCase();
            compareB = b.lesson.toLowerCase();
          } else if (this.sortColumn === 'status') {
            compareA = a.data.isDone ? 1 : 0;
            compareB = b.data.isDone ? 1 : 0;
          } else if (this.sortColumn === 'benar') {
            compareA = a.data.skor.benar;
            compareB = b.data.skor.benar;
          } else if (this.sortColumn === 'salah') {
            compareA = a.data.skor.salah;
            compareB = b.data.skor.salah;
          }

          // Compare values
          if (compareA < compareB) {
            return this.sortOrder === 'asc' ? -1 : 1;
          }
          if (compareA > compareB) {
            return this.sortOrder === 'asc' ? 1 : -1;
          }
          return 0;
        });
      }

      return sortedArray;
    },
  },
  methods: {
    formatDate(dateString) {
      return format(new Date(dateString), 'dd/MM/yyyy HH:mm:ss'); // Customize format as needed
    },
    sortTable(column) {
      if (this.sortColumn === column) {
        // If already sorted by this column, reverse the sort order
        this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
      } else {
        // Otherwise, set the column to the one clicked and default to ascending
        this.sortColumn = column;
        this.sortOrder = 'asc';
      }
    },
  },
};
</script>
