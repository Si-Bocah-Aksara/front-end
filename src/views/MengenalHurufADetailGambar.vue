<template>
    <div class="flex flex-col items-center bg-gray-100 h-screen p-4">

        <!-- Section for the image and description -->
        <div class="text-center mb-8">
            <h1 class="text-3xl font-bold text-teal-600">Ayam</h1>
            <img src="../assets/mengenalHuruf/ayam.jpg" alt="Gambar Ayam" class="w-1/2 h-auto mt-4 rounded-lg shadow-md">
        </div>

        <!-- Interactive letter 'A' with audio -->
        <div class="text-center mb-8">
            <button id="interactiveA"
                class="mt-4 p-4 rounded-full bg-yellow-400 hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-teal-600">
                <h1 class="text-5xl font-bold text-gray-800">A</h1>
            </button>
        </div>

        <!-- Hidden next button initially -->
        <div id="nextButton" class="text-center hidden">
            <button
                class="mt-4 p-2 rounded-full bg-teal-600 hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-yellow-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm4-8a1 1 0 00-.293-.707l-3-3a1 1 0 10-1.414 1.414L11.586 9H6a1 1 0 100 2h5.586l-2.293 2.293a1 1 0 001.414 1.414l3-3A1 1 0 0014 10z"
                        clip-rule="evenodd" />
                </svg>
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
    const interactiveA = document.getElementById('interactiveA');
    const nextButton = document.getElementById('nextButton');
    let audioPlayed = false;

    interactiveA?.addEventListener('click', () => {
        if (!audioPlayed) {
            const audio = new Audio('/path-to-audio-a.mp3');
            audio.play();
            audio.onended = () => {
                nextButton?.classList.remove('hidden');
                audioPlayed = true;
            };
        } else {
            const audio = new Audio('/path-to-audio-a.mp3');
            audio.play();
        }
    });
});
</script>

<style>
.hidden {
    display: none;
}
</style>