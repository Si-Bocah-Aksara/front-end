<template>
    <div class="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
        <h1 class="text-4xl font-bold text-gray-800 mb-6">MINI GAME HURUF A</h1>

        <div class="grid grid-cols-4 gap-4 mb-6">
            <button v-for="letter in letters" :key="letter" @click="checkLetter(letter)" :class="['flex items-center justify-center w-24 h-24 rounded-full text-2xl font-bold',
                letter.isCorrect ? 'bg-green-500 text-white' : 'bg-yellow-400 text-gray-800']">
                {{ letter.char }}
            </button>
        </div>

        <div class="text-2xl font-bold" :class="{ 'text-green-600': correct, 'text-red-600': !correct }">
            {{ message }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Define the letters for the game
const letters = ref([
    { char: 'A', isCorrect: true },
    { char: 'B', isCorrect: false },
    { char: 'C', isCorrect: false },
    { char: 'a', isCorrect: true },
    { char: 'd', isCorrect: false },
    { char: 'e', isCorrect: false },
    { char: 'A', isCorrect: true },
    { char: 'a', isCorrect: true }
]);

const correct = ref(false);
const message = ref('');

const checkLetter = (letter) => {
    if (letter.isCorrect) {
        correct.value = true;
        message.value = 'Correct!';
    } else {
        correct.value = false;
        message.value = 'Try Again!';
    }
};
</script>

<style>
.hidden {
    display: none;
}
</style>
