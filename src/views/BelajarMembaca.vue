<template>
    <div class="container mx-auto p-6 bg-blue-50 rounded-lg shadow-lg">
        <div class="relative z-10 p-4">
            <RouterLink to="/lessons" class="text-blue-500 hover:underline text-lg">Back</RouterLink>
        </div>
        <h1 class="text-4xl font-bold text-orange-600 mb-8 text-center">BELAJAR MEMBACA</h1>
        <div class="flex flex-wrap justify-center gap-8">
            <RouterLink to="/lessons/belajar-membaca/subtema-hewan"
                class="flex flex-col items-center justify-center text-white text-lg font-bold w-32 h-32 rounded-full cursor-pointer transition-transform duration-300 transform hover:scale-110 hover:rotate-3 shadow-lg bg-yellow-400 hover:bg-yellow-500">
                <span class="text-4xl mb-2">🐾</span>
                <span>Binatang</span>
            </RouterLink>
            <div
                class="flex flex-col items-center justify-center text-gray-500 text-lg font-bold w-32 h-32 rounded-full cursor-not-allowed opacity-50 bg-gray-300 shadow-lg">
                <span class="text-4xl mb-2">🚗</span>
                <span>Kendaraan</span>
            </div>
            <div
                class="flex flex-col items-center justify-center text-gray-500 text-lg font-bold w-32 h-32 rounded-full cursor-not-allowed opacity-50 bg-gray-300 shadow-lg">
                <span class="text-4xl mb-2">👨‍🚒</span>
                <span>Profesi</span>
            </div>
            <div
                class="flex flex-col items-center justify-center text-gray-500 text-lg font-bold w-32 h-32 rounded-full cursor-not-allowed opacity-50 bg-gray-300 shadow-lg">
                <span class="text-4xl mb-2">🍎</span>
                <span>Makanan</span>
            </div>
            <div
                class="flex flex-col items-center justify-center text-gray-500 text-lg font-bold w-32 h-32 rounded-full cursor-not-allowed opacity-50 bg-gray-300 shadow-lg">
                <span class="text-4xl mb-2">🌳</span>
                <span>Alam</span>
            </div>
        </div>
    </div>

    <div class="container mx-auto p-6 bg-blue-50 rounded-lg shadow-lg">
        <h1 class="text-4xl font-bold text-orange-600 mb-8 text-center">🎮 MINI GAMES</h1>
        <div class="flex flex-wrap justify-center gap-8">
            <RouterLink to="/lessons/belajar-membaca/menyusun-suku-kata"
                class="flex flex-col items-center justify-center text-white text-lg font-bold w-32 h-32 rounded-full cursor-pointer transition-transform duration-300 transform hover:scale-110 hover:rotate-3 shadow-lg bg-purple-400 hover:bg-purple-500">
                <span class="label">Menyusun Suku Kata</span>
            </RouterLink>
        </div>
    </div>
</template>
