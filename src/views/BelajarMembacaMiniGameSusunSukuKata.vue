<template>
    <div class="bg-purple-50 min-h-screen py-8">
        <div class="container mx-auto p-6 bg-white rounded-lg shadow-lg max-w-2xl">
            <h1 class="text-4xl font-bold text-center mb-8 text-purple-700">Mini Games: Susun Suku Kata</h1>
            <div class="flex flex-col items-center">
                <img :src="currentQuestion.image" alt="Gambar" class="object-cover w-64 h-64 mb-6 rounded-lg shadow-md border-4 border-purple-400">
                <h2 class="text-2xl font-semibold mb-4 text-purple-800">Pilih Suku Kata yang Benar</h2>
                <div class="flex mb-4">
                    <div v-for="(syllable, index) in selectedSyllables" :key="index" class="suku-kata-display">
                        {{ syllable }}
                    </div>
                </div>
                <div class="grid grid-cols-5 gap-4 mb-4">
                    <button v-for="(syllable, index) in currentQuestion.syllables" :key="index" @click="selectSyllable(syllable)" class="suku-kata-button">
                        {{ syllable }}
                    </button>
                </div>
                <div class="grid grid-cols-2 gap-6 mb-2 mt-2">
                    <button @click="removeLastSyllable" class="bg-red-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-red-700 transition-transform transform hover:scale-105 flex items-center space-x-2 mb-4">
                        <span>🔙 Hapus</span>
                    </button>
                    <button @click="checkAnswer" class="bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105 flex items-center space-x-2 mb-4">
                        <span>📝 Periksa Jawaban</span>
                    </button>
                </div>
                <div v-if="isCorrect !== null" class="mt-6">
                    <p v-if="isCorrect" class="text-green-600 text-lg font-bold">Jawaban Benar! 🎉</p>
                    <p v-else class="text-red-600 text-lg font-bold">Jawaban Salah! 😞</p>
                </div>
                <button v-if="isCorrect !== null" @click="nextQuestion" class="bg-green-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-700 transition-transform transform hover:scale-105 flex items-center space-x-2 mt-4">
                    <span>➡️ Soal Selanjutnya</span>
                </button>
                <div class="flex justify-between w-full mt-4">
                    <p class="text-lg font-semibold text-purple-700">Skor Benar: {{ score.correct }}</p>
                    <p class="text-lg font-semibold text-purple-700">Skor Salah: {{ score.incorrect }}</p>
                </div>
                <div class="w-full mt-6">
                    <h3 class="text-xl font-semibold text-purple-800 mb-2">History Skor:</h3>
                    <ul>
                        <li v-for="(entry, index) in scoreHistory" :key="index" class="text-purple-600">
                            Permainan {{ index + 1 }}: Benar - {{ entry.correct }}, Salah - {{ entry.incorrect }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MiniGames',
    data() {
        return {
            questions: [
                {
                    image: '../assets/belajarMembaca/MiniGameSusunSukuKata/sepatu.jpg',
                    correctAnswer: ['se', 'pa', 'tu'],
                    syllables: ['se', 'ka', 'pa', 'da', 'tu']
                },
                {
                    image: '../assets/belajarMembaca/MiniGameSusunSukuKata/buku.jpg',
                    correctAnswer: ['bu', 'ku'],
                    syllables: ['ka', 'bu', 'bi', 'ku', 'bo']
                },
                {
                    image: '../assets/belajarMembaca/MiniGameSusunSukuKata/kereta.jpg',
                    correctAnswer: ['ke', 're', 'ta'],
                    syllables: ['ke', 'pa', 're', 'ya', 'ta']
                },
                {
                    image: '../assets/belajarMembaca/MiniGameSusunSukuKata/gurita.jpg',
                    correctAnswer: ['gu', 'ri', 'ta'],
                    syllables: ['bu', 'gu', 'pi', 'ri', 'ta']
                },
            ],
            currentQuestionIndex: 0,
            selectedSyllables: [],
            isCorrect: null,
            score: {
                correct: 0,
                incorrect: 0
            },
            scoreHistory: [] // Untuk menyimpan history skor
        };
    },
    computed: {
        currentQuestion() {
            return this.questions[this.currentQuestionIndex];
        }
    },
    methods: {
        selectSyllable(syllable) {
            if (this.selectedSyllables.length < this.currentQuestion.correctAnswer.length) {
                this.selectedSyllables.push(syllable);
            }
        },
        removeLastSyllable() {
            this.selectedSyllables.pop();
        },
        checkAnswer() {
            // Periksa jawaban saat ini
            if (this.selectedSyllables.join('') === this.currentQuestion.correctAnswer.join('')) {
                this.isCorrect = true;
            } else {
                this.isCorrect = false;
            }
        },
        nextQuestion() {
            // Jika jawaban benar, tambah skor benar, jika salah tambah skor salah
            if (this.isCorrect) {
                this.score.correct++;
            } else {
                this.score.incorrect++;
            }

            if (this.currentQuestionIndex < this.questions.length - 1) {
                // Jika masih ada soal berikutnya, lanjutkan ke soal berikutnya
                this.currentQuestionIndex++;
                this.selectedSyllables = [];
                this.isCorrect = null;
            } else {
                // Jika semua soal telah dijawab, simpan skor ke dalam history
                alert("Selamat! Kamu telah menyelesaikan semua soal!");
                this.saveCurrentScore();
                this.resetGame();
            }
        },
        saveCurrentScore() {
            // Simpan skor saat ini ke dalam history
            this.scoreHistory.push({ correct: this.score.correct, incorrect: this.score.incorrect });
        },
        resetGame() {
            // Reset permainan untuk memulai ulang
            this.currentQuestionIndex = 0;
            this.score.correct = 0;
            this.score.incorrect = 0;
            this.selectedSyllables = [];
            this.isCorrect = null;
        }
    }
}
</script>

<style scoped>
.suku-kata-button {
    @apply bg-yellow-200 text-blue-800 text-xl font-semibold px-4 py-2 rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105 hover:bg-yellow-300;
}

.suku-kata-display {
    @apply bg-purple-200 text-purple-800 text-xl font-semibold px-4 py-2 rounded-lg shadow-md mr-2;
}
</style>
