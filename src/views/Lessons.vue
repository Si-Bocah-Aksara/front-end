<template>
    <div class="flex flex-col h-screen" style="background-color: #eeeae1;">
        <RouterLink to="/">Back</RouterLink>
        <div class="flex flex-1">
            <div class="flex-1 flex flex-col items-center justify-center">
                <RouterLink to="/lessons/mengenal-huruf"
                class="flex items-center justify-center ml-20 w-2/4 h-2/4 text-white rounded-full text-center" style="background-color: #e88704;">
                Mengenal Huruf
                </RouterLink>
            </div>

            <div class="flex-1 flex flex-col items-center justify-center">
                <RouterLink to="/lessons/belajar-membaca"
                class="flex items-center justify-center mr-20 w-2/4 h-2/4 text-white rounded-full text-center" style="background-color: #3c8895;">
                Belajar Membaca
                </RouterLink>
            </div>
        </div>
    </div>
</template>