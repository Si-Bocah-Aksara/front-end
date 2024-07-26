<template>
    <div class="flex flex-col items-center bg-gray-100 h-screen p-4">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">Detail Huruf A</h1>

        <!-- Section for the letter and audio -->
        <div class="text-center mb-8">
            <h1 class="text-6xl font-bold text-teal-600">A a</h1>
            <button
                class="mt-4 p-2 rounded-full bg-yellow-400 hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-teal-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gray-800" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm3 9H7v-2h6v2z" />
                </svg>
            </button>
        </div>

        <!-- Section for images starting with 'A' -->
        <div class="grid grid-cols-2 gap-4 mb-8">
            <RouterLink to="/lessons/mengenal-huruf/a/detail-gambar-1"
                class="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
                <img src="../assets/mengenalHuruf/ayam.jpg" alt="Gambar 1" class="w-full h-40 object-cover">
                <div class="p-4 text-center text-xl font-bold text-gray-700">Ayam</div>
            </RouterLink>
            <div
                class="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
                <img src="../assets/mengenalHuruf/apel.jpg" alt="Gambar 2" class="w-full h-40 object-cover">
                <div class="p-4 text-center text-xl font-bold text-gray-700">Apel</div>
            </div>
            <div
                class="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
                <img src="../assets/mengenalHuruf/api.jpg" alt="Gambar 3" class="w-full h-40 object-cover">
                <div class="p-4 text-center text-xl font-bold text-gray-700">Api</div>
            </div>
            <div
                class="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
                <img src="../assets/mengenalHuruf/awan.jpg" alt="Gambar 4" class="w-full h-40 object-cover">
                <div class="p-4 text-center text-xl font-bold text-gray-700">Awan</div>
            </div>
        </div>

        <!-- Link to mini game -->
        <RouterLink to="/lessons/mengenal-huruf/a/mini-game"
            class="text-xl font-bold text-white py-2 px-8 rounded-full bg-teal-600 hover:bg-teal-500 transition duration-300 ease-in-out">
            Mini Game
        </RouterLink>
    </div>
</template>