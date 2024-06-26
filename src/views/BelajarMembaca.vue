<template>
    <div class="container mx-auto p-6 bg-blue-50 rounded-lg shadow-lg">
        <h1 class="text-4xl font-bold text-orange-600 mb-8 text-center">BELAJAR MEMBACA</h1>
        <div class="flex flex-wrap justify-center gap-8">
            <RouterLink to="/lessons/belajar-membaca/subtema-hewan" class="theme-button bg-teal-500 hover:bg-teal-700">
                Binatang
            </RouterLink>
            <div class="theme-button bg-teal-500 hover:bg-teal-700">Kendaraan</div>
            <div class="theme-button bg-teal-500 hover:bg-teal-700">Profesi</div>
            <div class="theme-button bg-teal-500 hover:bg-teal-700">Makanan</div>
            <div class="theme-button bg-teal-500 hover:bg-teal-700">Alam</div>
        </div>
    </div>
</template>

<style scoped>
.theme-button {
    @apply text-white text-lg font-bold w-32 h-32 flex items-center justify-center rounded-full cursor-pointer transition duration-300;
}
</style>
