<template>
    <div class="p-4 bg-gray-100 h-screen flex flex-col items-center justify-center">
        <h1 class="text-3xl font-bold mb-4">DETAIL KALIMAT 1 MENGENAI SAPI</h1>
        <h2 class="text-2xl mb-2">Berisi sebagai berikut:</h2>

        <div class="my-6 p-4 bg-white rounded-lg shadow-lg w-full md:w-2/3 lg:w-1/2">
            <h1 class="text-xl font-bold mb-4">(Gambar real sapi makan rumput)</h1>
            <h1 class="text-xl mb-4">Kalimat: sapi suka makan rumput</h1>
            <h1 class="text-xl mb-4">*Audio mengenai kalimat yang berkata sapi suka makan rumput</h1>
            <router-link to="/next-detail"
                class="flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full text-2xl font-bold shadow-lg transform transition-transform duration-300 hover:scale-105">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6">
                    <path fill-rule="evenodd"
                        d="M3.293 6.293a1 1 0 011.414 0L10 11.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z"
                        clip-rule="evenodd" />
                </svg>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailSapi',
}
</script>
