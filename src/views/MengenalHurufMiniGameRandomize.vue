<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 p-6">
        <div class="relative z-10 p-4 self-start">
            <RouterLink to="/lessons/mengenal-huruf" class="text-blue-500 hover:underline text-lg">Back</RouterLink>
        </div>
        <h1 class="text-5xl font-bold text-white mb-6 animate-bounce">Mini Game Seleksi Huruf</h1>

        <template v-if="currentQuestion">
            <h2 class="text-3xl font-semibold text-white mb-4">
                Pilih semua huruf {{ currentQuestion.letter }} yang muncul (besar dan kecil)
            </h2>

            <div class="grid grid-cols-4 gap-6 mb-6">
                <button v-for="(letter, index) in currentQuestion.options" :key="index"
                    @click="selectLetter(letter)" :disabled="answered" :class="getButtonClass(letter)">
                    {{ letter.char }}
                </button>
            </div>

            <div class="text-3xl font-bold mb-4" :class="{ 'text-green-500': correct, 'text-red-500': !correct && answered }">
                {{ message }}
            </div>

            <div class="text-xl font-semibold mb-4 text-white">
                Skor Benar: {{ score.correct }} | Skor Salah: {{ score.incorrect }}
            </div>

            <button @click="checkAnswer"
                class="mt-4 px-8 py-4 bg-blue-600 text-white font-bold rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300"
                :disabled="answered">
                Cek Jawaban
            </button>

            <button v-if="answered && questionIndex < totalQuestions - 1" @click="nextQuestion"
                class="mt-4 px-8 py-4 bg-purple-600 text-white font-bold rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300">
                Lanjut ke Soal Berikutnya
            </button>

            <button v-if="answered && questionIndex === totalQuestions - 1" @click="restartGame"
                class="mt-4 px-8 py-4 bg-green-600 text-white font-bold rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300">
                Mulai Lagi
            </button>
        </template>

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
import { ref, computed, onMounted } from 'vue';

interface Letter {
    char: string;
    isCorrect: boolean;
}

interface Question {
    letter: string;
    options: Letter[];
}

const totalQuestions = 10;
const questions = ref<Question[]>([]);
const questionIndex = ref(0);
const currentQuestion = computed(() => questions.value[questionIndex.value]);
const correct = ref(false);
const message = ref('');
const answered = ref(false);
const selectedLetters = ref(new Set<Letter>());
const score = ref({ correct: 0, incorrect: 0 });
const scoreHistory = ref<{ correct: number; incorrect: number }[]>([]);

const generateQuestion = (): Question => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const letter = alphabet[Math.floor(Math.random() * alphabet.length)];
    const options: Letter[] = [];
    
    // Determine the number of correct answers (1 to 6)
    const correctCount = Math.floor(Math.random() * 6) + 1;
    
    // Add correct answers
    for (let i = 0; i < correctCount; i++) {
        options.push({ char: i % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase(), isCorrect: true });
    }
    
    // Fill the rest with random incorrect letters
    while (options.length < 8) {
        const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
        if (randomLetter !== letter) {
            options.push({ 
                char: Math.random() < 0.5 ? randomLetter.toUpperCase() : randomLetter.toLowerCase(), 
                isCorrect: false 
            });
        }
    }
    
    // Shuffle the options
    for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
    }
    
    return { letter, options };
};

const generateQuestions = () => {
    questions.value = Array(totalQuestions).fill(null).map(generateQuestion);
};

onMounted(generateQuestions);

const selectLetter = (letter: Letter) => {
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
        const correctLetters = currentQuestion.value.options.filter(l => l.isCorrect);
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
        if (questionIndex.value < totalQuestions - 1) {
            questionIndex.value++;
            correct.value = false;
            message.value = '';
            answered.value = false;
            selectedLetters.value.clear();
        } else {
            alert("Selamat! Kamu telah menyelesaikan semua soal!");
            saveCurrentScore();
            restartGame();
        }
    }
};

const restartGame = () => {
    saveCurrentScore();
    generateQuestions();
    questionIndex.value = 0;
    correct.value = false;
    message.value = '';
    answered.value = false;
    selectedLetters.value.clear();
    score.value = { correct: 0, incorrect: 0 };
};

const saveCurrentScore = () => {
    scoreHistory.value.push({ correct: score.value.correct, incorrect: score.value.incorrect });
};

const getButtonClass = (letter: Letter) => {
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