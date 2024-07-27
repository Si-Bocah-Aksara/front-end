<template>
    <div class="bg-yellow-50 min-h-screen py-10">
        <div class="container mx-auto p-6">
            <h1 class="text-4xl font-bold text-center mb-8 text-yellow-700">Subtema Hewan</h1>
            <div class="flex flex-wrap justify-center gap-12">
                <RouterLink to="/lessons/belajar-membaca/subtema-hewan/monyet"
                    class="w-48 h-48 rounded-full overflow-hidden shadow-lg transform hover:scale-110 transition-transform duration-300 ease-in-out bg-white hover:bg-yellow-100 flex flex-col items-center justify-center">
                    <img src="../assets/belajarMembaca/SubtemaMonyet/icon_monyet.jpg" alt="Monyet" class="object-cover w-24 h-24 rounded-full mb-2">
                    <h2 class="text-center text-lg font-semibold text-gray-700">🐒 Monyet</h2>
                </RouterLink>
                <RouterLink to="#"
                    class="w-48 h-48 rounded-full overflow-hidden shadow-lg transform hover:scale-110 transition-transform duration-300 ease-in-out bg-white hover:bg-yellow-100 flex flex-col items-center justify-center">
                    <img src="../assets/belajarMembaca/SubtemaGajah/icon_gajah.jpg" alt="Gajah" class="object-cover w-24 h-24 rounded-full mb-2">
                    <h2 class="text-center text-lg font-semibold text-gray-700">🐘 Gajah</h2>
                </RouterLink>
                <RouterLink to="#"
                    class="w-48 h-48 rounded-full overflow-hidden shadow-lg transform hover:scale-110 transition-transform duration-300 ease-in-out bg-white hover:bg-yellow-100 flex flex-col items-center justify-center">
                    <img src="../assets/belajarMembaca/SubtemaJerapah/icon_Jerapah.jpg" alt="Jerapah" class="object-cover w-24 h-24 rounded-full mb-2">
                    <h2 class="text-center text-lg font-semibold text-gray-700">🦒 Jerapah</h2>
                </RouterLink>
                <RouterLink to="#"
                    class="w-48 h-48 rounded-full overflow-hidden shadow-lg transform hover:scale-110 transition-transform duration-300 ease-in-out bg-white hover:bg-yellow-100 flex flex-col items-center justify-center">
                    <img src="../assets/belajarMembaca/SubtemaKelinci/icon_kelinci.jpg" alt="Kelinci" class="object-cover w-24 h-24 rounded-full mb-2">
                    <h2 class="text-center text-lg font-semibold text-gray-700">🐇 Kelinci</h2>
                </RouterLink>
                <RouterLink to="#"
                    class="w-48 h-48 rounded-full overflow-hidden shadow-lg transform hover:scale-110 transition-transform duration-300 ease-in-out bg-white hover:bg-yellow-100 flex flex-col items-center justify-center">
                    <img src="../assets/belajarMembaca/SubtemaKucing/icon_kucing.jpg" alt="Kucing" class="object-cover w-24 h-24 rounded-full mb-2">
                    <h2 class="text-center text-lg font-semibold text-gray-700">🐱 Kucing</h2>
                </RouterLink>
                <RouterLink to="#"
                    class="w-48 h-48 rounded-full overflow-hidden shadow-lg transform hover:scale-110 transition-transform duration-300 ease-in-out bg-white hover:bg-yellow-100 flex flex-col items-center justify-center">
                    <img src="../assets/belajarMembaca/SubtemaPanda/icon_panda.jpg" alt="Panda" class="object-cover w-24 h-24 rounded-full mb-2">
                    <h2 class="text-center text-lg font-semibold text-gray-700">🐼 Panda</h2>
                </RouterLink>
                <RouterLink to="#"
                    class="w-48 h-48 rounded-full overflow-hidden shadow-lg transform hover:scale-110 transition-transform duration-300 ease-in-out bg-white hover:bg-yellow-100 flex flex-col items-center justify-center">
                    <img src="../assets/belajarMembaca/SubtemaSapi/icon_sapi.jpg" alt="Sapi" class="object-cover w-24 h-24 rounded-full mb-2">
                    <h2 class="text-center text-lg font-semibold text-gray-700">🐄 Sapi</h2>
                </RouterLink>
                <RouterLink to="#"
                    class="w-48 h-48 rounded-full overflow-hidden shadow-lg transform hover:scale-110 transition-transform duration-300 ease-in-out bg-white hover:bg-yellow-100 flex flex-col items-center justify-center">
                    <img src="../assets/belajarMembaca/SubtemaSemut/icon_semut.jpg" alt="Semut" class="object-cover w-24 h-24 rounded-full mb-2">
                    <h2 class="text-center text-lg font-semibold text-gray-700">🐜 Semut</h2>
                </RouterLink>
                <RouterLink to="#"
                    class="w-48 h-48 rounded-full overflow-hidden shadow-lg transform hover:scale-110 transition-transform duration-300 ease-in-out bg-white hover:bg-yellow-100 flex flex-col items-center justify-center">
                    <img src="../assets/belajarMembaca/SubtemaSinga/icon_singa.jpg" alt="Singa" class="object-cover w-24 h-24 rounded-full mb-2">
                    <h2 class="text-center text-lg font-semibold text-gray-700">🦁 Singa</h2>
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SubtemaHewan'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=ABeeZee:ital@0;1&display=swap');

body {
    font-family: 'ABeeZee', sans-serif;
}
</style>
