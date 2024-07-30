<template>
    <div class="container mx-auto p-6 bg-blue-50 rounded-lg shadow-lg">
        <div class="relative z-10 p-4">
            <RouterLink to="/lessons" class="text-blue-500 hover:underline text-lg">Back</RouterLink>
        </div>
        <h1 class="text-4xl font-bold text-orange-600 mb-8 text-center">BELAJAR MEMBACA</h1>
        <div class="flex flex-wrap justify-center gap-8">
            <RouterLink to="/lessons/belajar-membaca/subtema-hewan" class="theme-button bg-yellow-400 hover:bg-yellow-500" id="subtema-binatang">
                <span class="emoji">🐾</span>
                <span class="label">Binatang</span>
            </RouterLink>
            <div class="theme-button bg-green-400 hover:bg-green-500" id="subtema-kendaraan">
                <span class="emoji">🚗</span>
                <span class="label">Kendaraan</span>
            </div>
            <div class="theme-button bg-red-400 hover:bg-red-500" id="subtema-profesi">
                <span class="emoji">👨‍🚒</span>
                <span class="label">Profesi</span>
            </div>
            <div class="theme-button bg-pink-400 hover:bg-pink-500" id="subtema-makanan">
                <span class="emoji">🍎</span>
                <span class="label">Makanan</span>
            </div>
            <div class="theme-button bg-purple-400 hover:bg-purple-500" id="subtema-alam">
                <span class="emoji">🌳</span>
                <span class="label">Alam</span>
            </div>
        </div>
    </div>

    <div class="container mx-auto p-6 bg-blue-50 rounded-lg shadow-lg">
        <h1 class="text-4xl font-bold text-orange-600 mb-8 text-center">🎮 MINI GAMES</h1>
        <div class="flex flex-wrap justify-center gap-8">
            <RouterLink to="/lessons/belajar-membaca/menyusun-suku-kata" class="theme-button text-center bg-purple-400 hover:bg-purple-500">
                <span class="label">Menyusun Suku Kata</span>
            </RouterLink>
            <!-- <RouterLink disabled to="#" class="theme-button bg-pink-400 text-center hover:bg-pink-500">
                <span class="label">Melengkapi Kata</span>
            </RouterLink>
            <RouterLink disabled to="#" class="theme-button bg-red-400 text-center hover:bg-red-500">
                <span class="label">Coding Warna</span>
            </RouterLink> -->
        </div>
    </div>
</template>

<style scoped>
.theme-button {
    @apply text-white text-lg font-bold w-32 h-32 flex flex-col items-center justify-center rounded-full cursor-pointer transition-transform duration-300 transform hover:scale-110 hover:rotate-3 shadow-lg;
    .emoji {
        font-size: 2rem;
        margin-bottom: 0.5rem;
    }

    .label {
        font-size: 1rem;
    }
}

</style>
