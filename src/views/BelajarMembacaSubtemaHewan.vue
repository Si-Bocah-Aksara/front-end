<template>
    <div class="container mx-auto p-6">
        <h1 class="text-4xl font-bold text-center mb-8">Subtema Hewan</h1>
        <div class="flex flex-wrap justify-center gap-8">
            <RouterLink to="/lessons/belajar-membaca/subtema-hewan/sapi"
                class="w-40 h-40 rounded-full overflow-hidden shadow-lg">
                <img src="#" alt="Sapi" class="object-cover w-full h-full">
                <h2 class="text-center mt-2">Sapi</h2>
            </RouterLink>
            <RouterLink to="#"
                class="w-40 h-40 rounded-full overflow-hidden shadow-lg">
                <img src="#" alt="Kelinci" class="object-cover w-full h-full">
                <h2 class="text-center mt-2">Kelinci</h2>
            </RouterLink>
            <RouterLink to="#"
                class="w-40 h-40 rounded-full overflow-hidden shadow-lg">
                <img src="#" alt="Singa" class="object-cover w-full h-full">
                <h2 class="text-center mt-2">Singa</h2>
            </RouterLink>
            <RouterLink to="#"
                class="w-40 h-40 rounded-full overflow-hidden shadow-lg">
                <img src="#" alt="Beruang" class="object-cover w-full h-full">
                <h2 class="text-center mt-2">Beruang</h2>
            </RouterLink>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SubtemaHewan'
}
</script>
