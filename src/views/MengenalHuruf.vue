<template>
    <div class="flex flex-col h-screen bg-gradient-to-r from-blue-200 to-teal-200">
        <!-- Kontainer Utama -->
        <div class="flex-1 flex flex-col justify-between p-4">
            
            <!-- Judul -->
            <div class="text-center mb-4">
                <h1 class="text-4xl md:text-5xl font-extrabold text-gray-800 mb-2 drop-shadow-md">Mengenal Huruf</h1>
                <p class="text-base md:text-lg text-gray-600">Belajar huruf dengan cara yang menyenangkan!</p>
            </div>
            
            <!-- Mini Games -->
            <div class="text-center mb-4">
                <h1 class="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 drop-shadow-md">🎮 Mini Games 🎮</h1>
                <div id="mini-games" class="flex flex-wrap justify-center gap-4">
                    <RouterLink to="/lessons/mengenal-huruf/mini-game">
                        <button
                            class="px-4 py-2 md:px-6 md:py-3 bg-yellow-500 text-white font-bold text-base md:text-xl rounded-full shadow-md hover:bg-yellow-400 transition-transform duration-300 ease-in-out transform hover:scale-110">
                            🔍 Seleksi Huruf
                        </button>
                    </RouterLink>
                    <!-- Tombol Game yang dinonaktifkan bisa diaktifkan dengan cara yang sama -->
                    <!-- <RouterLink disabled to="/lessons/mengenal-huruf/mini-game2">
                        <button
                            class="px-4 py-2 md:px-6 md:py-3 bg-green-500 text-white font-bold text-base md:text-xl rounded-full shadow-md hover:bg-green-400 transition-transform duration-300 ease-in-out transform hover:scale-110 cursor-not-allowed">
                            🎲 Game 2
                        </button>
                    </RouterLink>
                    <RouterLink disabled to="/lessons/mengenal-huruf/mini-game3">
                        <button
                            class="px-4 py-2 md:px-6 md:py-3 bg-purple-500 text-white font-bold text-base md:text-xl rounded-full shadow-md hover:bg-purple-400 transition-transform duration-300 ease-in-out transform hover:scale-110 cursor-not-allowed">
                            🧩 Game 3
                        </button>
                    </RouterLink> -->
                </div>
            </div>
            
            <!-- Grid Huruf -->
            <div class="flex-1 flex flex-col items-center justify-center">
                <div class="grid grid-cols-4 gap-4 md:grid-cols-6 lg:grid-cols-8">
                    <RouterLink v-for="letter in letters" :key="letter" :to="'/lessons/mengenal-huruf/' + letter"
                        class="flex items-center justify-center w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-24 text-white rounded-full text-center bg-teal-500 text-xl md:text-2xl font-bold hover:bg-teal-400 transition-all duration-300 ease-in-out shadow-lg transform hover:scale-105">
                        {{ letter }}
                    </RouterLink>
                </div>
            </div>
        </div>
        <!-- Tombol Kembali -->
        <div class="text-center mb-4">
            <RouterLink to="/lessons" class="hover:underline text-lg mx-2 mb-2  border-2 rounded-full items-center justify-center w-48 h-12 bg-white text-blue-500 font-semibold hover:bg-blue-100 p-4 transform">Back</RouterLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
</script>

<style scoped>
/* Tambahkan gaya khusus jika diperlukan */
</style>
