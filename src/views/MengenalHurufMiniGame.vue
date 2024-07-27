<template>
    <div
        class="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 p-6">
        <!-- Judul -->
        <h1 class="text-5xl font-bold text-white mb-6 animate-bounce">Mini Game Seleksi Huruf</h1>

        <!-- Soal -->
        <h2 class="text-3xl font-semibold text-white mb-4">
            Pilih semua huruf {{ questions[currentQuestion].letter }} yang muncul
        </h2>

        <!-- Pilihan Huruf -->
        <div class="grid grid-cols-4 gap-6 mb-6">
            <button v-for="(letter, index) in questions[currentQuestion].letters" :key="index"
                @click="selectLetter(letter)" :disabled="answered" :class="getButtonClass(letter)">
                {{ letter.char }}
            </button>
        </div>

        <!-- Pesan Hasil Jawaban -->
        <div class="text-3xl font-bold mb-4" :class="{ 'text-green-500': correct, 'text-red-500': !correct }">
            {{ message }}
        </div>

        <!-- Score Display -->
        <div class="text-xl font-semibold mb-4 text-white">
            Skor Benar: {{ score.correct }} | Skor Salah: {{ score.incorrect }}
        </div>

        <!-- Tombol Cek Jawaban -->
        <button @click="checkAnswer"
            class="mt-4 px-8 py-4 bg-blue-600 text-white font-bold rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300"
            :disabled="answered">
            Cek Jawaban
        </button>

        <!-- Tombol Lanjut Soal -->
        <button v-if="answered && currentQuestion < questions.length - 1" @click="nextQuestion"
            class="mt-4 px-8 py-4 bg-purple-600 text-white font-bold rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300">
            Lanjut ke Soal Berikutnya
        </button>

        <!-- Tombol Mulai Ulang -->
        <button v-if="answered && currentQuestion === questions.length - 1" @click="restartGame"
            class="mt-4 px-8 py-4 bg-green-600 text-white font-bold rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300">
            Mulai Lagi
        </button>

        <!-- History Skor -->
        <div class="w-full mt-6">
            <h3 class="text-xl font-semibold text-white mb-2">History Skor:</h3>
            <ul>
                <li v-for="(entry, index) in scoreHistory" :key="index" class="text-white">
                    Permainan {{ index + 1 }}: Benar - {{ entry.correct }}, Salah - {{ entry.incorrect }}
                </li>
            </ul>
        </div>

    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const questions = ref([
    {
        letter: 'A',
        letters: [
            { char: 'A', isCorrect: true },
            { char: 'B', isCorrect: false },
            { char: 'C', isCorrect: false },
            { char: 'a', isCorrect: true },
            { char: 'd', isCorrect: false },
            { char: 'e', isCorrect: false },
            { char: 'A', isCorrect: true },
            { char: 'a', isCorrect: true },
        ],
    },
    {
        letter: 'J',
        letters: [
            { char: 'j', isCorrect: true },
            { char: 'b', isCorrect: false },
            { char: 'J', isCorrect: true },
            { char: 'h', isCorrect: false },
            { char: 'k', isCorrect: false },
            { char: 'J', isCorrect: true },
            { char: 'a', isCorrect: false },
            { char: 'j', isCorrect: true },
        ],
    },
    {
        letter: 'S',
        letters: [
            { char: 's', isCorrect: true },
            { char: 'r', isCorrect: false },
            { char: 'S', isCorrect: true },
            { char: 't', isCorrect: false },
            { char: 'u', isCorrect: false },
            { char: 's', isCorrect: true },
            { char: 'S', isCorrect: true },
            { char: 'o', isCorrect: false },
        ],
    },
    {
        letter: 'M',
        letters: [
            { char: 'm', isCorrect: true },
            { char: 'n', isCorrect: false },
            { char: 'M', isCorrect: true },
            { char: 'p', isCorrect: false },
            { char: 'q', isCorrect: false },
            { char: 'm', isCorrect: true },
            { char: 'M', isCorrect: true },
            { char: 'b', isCorrect: false },
        ],
    },
    {
        letter: 'E',
        letters: [
            { char: 'e', isCorrect: true },
            { char: 'd', isCorrect: false },
            { char: 'E', isCorrect: true },
            { char: 'f', isCorrect: false },
            { char: 'g', isCorrect: false },
            { char: 'e', isCorrect: true },
            { char: 'E', isCorrect: true },
            { char: 'h', isCorrect: false },
        ],
    },
]);

const currentQuestion = ref(0);
const correct = ref(false);
const message = ref('');
const answered = ref(false);
const selectedLetters = ref(new Set());
const score = ref({ correct: 0, incorrect: 0 });
const scoreHistory = ref([]);

watch(currentQuestion, (newVal) => {
    if (newVal >= questions.value.length && !answered.value) {
        answered.value = true; // Prevent multiple alerts
        alert(`Selamat! Kamu telah menyelesaikan semua soal!\nSkor Benar: ${score.value.correct}, Skor Salah: ${score.value.incorrect}`);
        saveCurrentScore();
        resetGame();
    }
});

const selectLetter = (letter) => {
    if (!answered.value) {
        if (selectedLetters.value.has(letter)) {
            selectedLetters.value.delete(letter);
        } else {
            selectedLetters.value.add(letter);
        }
    }
};

const checkAnswer = () => {
    if (!answered.value) {
        const correctLetters = questions.value[currentQuestion.value].letters.filter(l => l.isCorrect);
        const selectedCorrectLetters = Array.from(selectedLetters.value).filter(l => l.isCorrect);

        const isAllCorrect = selectedCorrectLetters.length === correctLetters.length;
        const isAllSelected = selectedLetters.value.size === correctLetters.length;

        correct.value = isAllCorrect && isAllSelected;
        message.value = correct.value ? 'Correct!' : 'Try Again!';
        answered.value = true;

        if (correct.value) {
            score.value.correct++;
        } else {
            score.value.incorrect++;
        }
    }
};

const nextQuestion = () => {
    if (answered.value) {
        if (currentQuestion.value < questions.value.length - 1) {
            currentQuestion.value++;
            correct.value = false;
            message.value = '';
            answered.value = false;
            selectedLetters.value.clear();
        } else {
            alert("Selamat! Kamu telah menyelesaikan semua soal!");
            saveCurrentScore();
            resetGame();
        }
    }
};

const restartGame = () => {
    saveCurrentScore(); // Simpan skor sebelum memulai ulang
    resetGame();
};


const resetGame = () => {
    currentQuestion.value = 0;
    correct.value = false;
    message.value = '';
    answered.value = false;
    selectedLetters.value.clear();
    score.value = { correct: 0, incorrect: 0 };
};


const saveCurrentScore = () => {
    scoreHistory.value.push({ correct: score.value.correct, incorrect: score.value.incorrect });
};

// Get button class based on the selection status
const getButtonClass = (letter) => {
    const isSelected = selectedLetters.value.has(letter);
    const isCorrect = letter.isCorrect;
    const isIncorrect = answered.value && !isCorrect && selectedLetters.value.has(letter);

    return [
        'flex items-center justify-center w-20 h-20 rounded-full text-3xl font-bold transition-all duration-300',
        'shadow-md',
        isSelected ? 'bg-cyan-400 text-gray-800 scale-110' : 'bg-yellow-300 hover:bg-yellow-400',
        isCorrect && answered.value ? 'bg-green-500 text-white' : '',
        isIncorrect ? 'bg-red-500 text-white' : '',
    ].join(' ');
};
</script>
