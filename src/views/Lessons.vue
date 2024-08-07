<template>
    <div class="relative flex flex-col h-screen bg-gray-100">
        <div class="background-overlay absolute inset-0 z-0"></div>
        
        <div class="relative z-10 flex flex-1 flex-col justify-center items-center">
            <!-- di rendengin jangan dibikin vertikal -->
            <div class="flex space-x-64">
                <RouterLink to="/lessons/mengenal-huruf"
                    class="flex items-center justify-center w-64 h-64 text-white rounded-full text-center bg-yellow-500 text-2xl font-bold shadow-lg transform transition-transform duration-300 hover:scale-105">
                    Mengenal Huruf
                </RouterLink>
                <RouterLink to="/lessons/belajar-membaca"
                    class="flex items-center justify-center w-64 h-64 text-white rounded-full text-center bg-teal-600 text-2xl font-bold shadow-lg transform transition-transform duration-300 hover:scale-105">
                    Belajar Membaca
                </RouterLink>
            </div>
            <!-- Tombol back ini -->
            <div class="fixed bottom-12 left-1/2 transform -translate-x-1/2">
                <RouterLink to="/" class="items-center border-2 rounded-full flex justify-center w-52 h-12 bg-white text-blue-500 font-semibold hover:bg-violet-200">
                  Kembali
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
