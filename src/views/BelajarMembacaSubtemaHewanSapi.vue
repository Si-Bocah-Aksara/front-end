<template>
    <div class="container mx-auto p-6">
        <h1 class="text-4xl font-bold text-center mb-8">Subtema Hewan: Sapi</h1>
        <div class="flex flex-col items-center">
            <div class="mb-6 w-1/2">
                <img src="#" alt="Gambar Sapi" class="object-cover rounded-lg shadow-lg">
            </div>
            <div class="text-center mb-8">
                <h2 class="text-2xl font-semibold mb-4">Mindmap tentang Sapi</h2>
                <!-- <p class="text-lg mb-4">Ditengah-tengah gambar sapi yang terhubung dengan mindmap tentang sapi.</p> -->
                <RouterLink to="/lessons/belajar-membaca/subtema-hewan/sapi/detail-kalimat-1"
                    class="text-blue-500 hover:text-blue-700">
                    Sapi Makan Apa?
                </RouterLink>
            </div>
            <div class="text-center">
                <p class="text-lg mb-4">Kalimat 2 mengenai sapi</p>
                <p class="text-lg mb-4">Kalimat 3 mengenai sapi</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SubtemaHewanSapi'
}
</script>