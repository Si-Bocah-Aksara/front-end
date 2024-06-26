<template>
    <div class="relative flex flex-col h-screen bg-gray-100">
        <div class="background-overlay absolute inset-0 z-0"></div>
        <div class="relative z-10 p-4">
            <RouterLink to="/" class="text-blue-500 hover:underline text-lg">Back</RouterLink>
        </div>
        <div class="relative z-10 flex flex-1">
            <div class="flex-1 flex flex-col items-center justify-center">
                <RouterLink to="/lessons/mengenal-huruf"
                    class="flex items-center justify-center w-64 h-64 text-white rounded-full text-center bg-yellow-500 text-2xl font-bold shadow-lg transform transition-transform duration-300 hover:scale-105">
                    Mengenal Huruf
                </RouterLink>
            </div>

            <div class="flex-1 flex flex-col items-center justify-center">
                <RouterLink to="/lessons/belajar-membaca"
                    class="flex items-center justify-center w-64 h-64 text-white rounded-full text-center bg-teal-600 text-2xl font-bold shadow-lg transform transition-transform duration-300 hover:scale-105">
                    Belajar Membaca
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<style scoped>
.background-overlay {
    background-color: #7ccf6d;
    opacity: 0.3;
    background-image:  linear-gradient(135deg, #fcffcd 25%, transparent 25%), linear-gradient(225deg, #fcffcd 25%, transparent 25%), linear-gradient(45deg, #fcffcd 25%, transparent 25%), linear-gradient(315deg, #fcffcd 25%, #7ccf6d 25%);
    background-position:  40px 0, 40px 0, 0 0, 0 0;
    background-size: 80px 80px;
    background-repeat: repeat;
}
</style>
